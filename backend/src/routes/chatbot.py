from flask import Blueprint, jsonify, request
from flask_cors import cross_origin
import json

chatbot_bp = Blueprint('chatbot', __name__)

@chatbot_bp.route('/chat', methods=['POST'])
@cross_origin()
def chat():
    """Handle chatbot conversations for water harvesting queries"""
    try:
        data = request.json
        user_message = data.get('message', '').lower()
        
        # Simple rule-based responses for demonstration
        response = generate_response(user_message)
        
        return jsonify({
            'response': response,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'response': 'Sorry, I encountered an error. Please try again.',
            'status': 'error'
        }), 500

@chatbot_bp.route('/calculate', methods=['POST'])
@cross_origin()
def calculate_water_savings():
    """Calculate water savings based on user input"""
    try:
        data = request.json
        roof_area = float(data.get('roof_area', 0))  # in sq ft
        rainfall = float(data.get('rainfall', 600))  # in mm
        efficiency = float(data.get('efficiency', 0.8))  # 80% default efficiency
        
        # Calculate annual water collection (in liters)
        # Formula: Area (sq ft) * Rainfall (mm) * 0.623 * Efficiency
        annual_collection = roof_area * rainfall * 0.623 * efficiency
        
        # Calculate cost savings (assuming ₹20 per 1000 liters)
        cost_savings = (annual_collection / 1000) * 20
        
        # Calculate system cost based on roof area
        system_cost = estimate_system_cost(roof_area)
        
        # Calculate payback period
        payback_years = system_cost / cost_savings if cost_savings > 0 else 0
        
        return jsonify({
            'annual_collection': round(annual_collection, 2),
            'cost_savings': round(cost_savings, 2),
            'system_cost': system_cost,
            'payback_years': round(payback_years, 1),
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'error': 'Invalid input data',
            'status': 'error'
        }), 400

@chatbot_bp.route('/recommend', methods=['POST'])
@cross_origin()
def recommend_method():
    """Recommend best harvesting method based on location and conditions"""
    try:
        data = request.json
        location_type = data.get('location_type', 'urban').lower()
        rainfall = float(data.get('rainfall', 600))
        area_size = data.get('area_size', 'small').lower()
        budget = data.get('budget', 'medium').lower()
        
        recommendation = get_method_recommendation(location_type, rainfall, area_size, budget)
        
        return jsonify({
            'recommendation': recommendation,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'error': 'Unable to generate recommendation',
            'status': 'error'
        }), 400

def generate_response(user_message):
    """Generate appropriate response based on user message"""
    
    if any(word in user_message for word in ['water', 'save', 'collect', 'harvest']):
        return """Based on average rooftop harvesting, a 1000 sq ft roof can collect approximately 15,000-20,000 liters annually in areas with 600mm rainfall. 
        
Would you like me to calculate the exact amount for your specific roof area and location? Please provide:
- Roof area (in sq ft)
- Annual rainfall (in mm)
- Location type (urban/rural)"""
    
    elif any(word in user_message for word in ['cost', 'price', 'money', 'expensive']):
        return """Rooftop harvesting systems typically cost:
        
• Small residential (up to 1000 sq ft): ₹15,000-25,000
• Medium residential (1000-2000 sq ft): ₹25,000-40,000  
• Large residential (2000+ sq ft): ₹40,000-60,000

The payback period is usually 3-5 years through water bill savings. Would you like a detailed cost calculation for your specific requirements?"""
    
    elif any(word in user_message for word in ['method', 'technique', 'type', 'system']):
        return """The best method depends on your specific conditions:

🏠 **Urban Areas**: Rooftop rainwater harvesting with storage tanks
🌾 **Rural Areas**: Check dams, farm ponds, percolation tanks
🏔️ **Hilly Areas**: Contour bunding, check dams
🏜️ **Arid Areas**: Traditional systems like bawris, johads

Tell me your location type, rainfall, and area size for a personalized recommendation!"""
    
    elif any(word in user_message for word in ['maintenance', 'clean', 'care']):
        return """Regular maintenance is essential for optimal performance:

✅ **Monthly**: Clean gutters and remove debris
✅ **Quarterly**: Check and clean first-flush diverters  
✅ **Bi-annually**: Inspect storage tanks and pipes
✅ **Annually**: Professional system check and water quality testing

Proper maintenance ensures 15-20 year system lifespan and consistent water quality."""
    
    elif any(word in user_message for word in ['benefit', 'advantage', 'why']):
        return """Key benefits of groundwater harvesting:

💧 **Water Security**: Reduce dependency on external sources
💰 **Cost Savings**: Lower water bills, 3-5 year payback
🌱 **Environmental**: Prevent soil erosion, recharge aquifers
🏘️ **Community**: Improved water access, reduced conflicts
📈 **Property Value**: Increases property value by 5-10%

Which benefit would you like to know more about?"""
    
    else:
        return """I'm here to help with groundwater harvesting! I can assist you with:

🔢 **Water Savings Calculator** - Estimate collection potential
💰 **Cost Analysis** - System costs and payback period  
🛠️ **Method Recommendations** - Best techniques for your area
📊 **Benefits Information** - Environmental and economic advantages
🔧 **Maintenance Guidance** - Keep your system running efficiently

What would you like to know about?"""

def estimate_system_cost(roof_area):
    """Estimate system cost based on roof area"""
    if roof_area <= 500:
        return 15000
    elif roof_area <= 1000:
        return 25000
    elif roof_area <= 1500:
        return 35000
    elif roof_area <= 2000:
        return 45000
    else:
        return 55000

def get_method_recommendation(location_type, rainfall, area_size, budget):
    """Generate method recommendation based on parameters"""
    
    recommendations = []
    
    # Primary recommendation based on location and rainfall
    if location_type == 'urban':
        if rainfall > 800:
            primary = {
                'method': 'Rooftop Rainwater Harvesting with Storage',
                'efficiency': '85-90%',
                'cost': '₹25,000-45,000',
                'suitability': 'Excellent for high rainfall urban areas'
            }
        else:
            primary = {
                'method': 'Rooftop Rainwater Harvesting with Recharge',
                'efficiency': '75-85%', 
                'cost': '₹15,000-30,000',
                'suitability': 'Good for moderate rainfall urban areas'
            }
    elif location_type == 'rural':
        if rainfall > 600:
            primary = {
                'method': 'Farm Ponds with Check Dams',
                'efficiency': '70-80%',
                'cost': '₹50,000-2,00,000',
                'suitability': 'Ideal for rural areas with good rainfall'
            }
        else:
            primary = {
                'method': 'Percolation Tanks and Recharge Wells',
                'efficiency': '60-75%',
                'cost': '₹1,00,000-5,00,000', 
                'suitability': 'Suitable for low rainfall rural areas'
            }
    else:  # semi-urban
        primary = {
            'method': 'Community-based Harvesting System',
            'efficiency': '75-85%',
            'cost': '₹2,00,000-10,00,000',
            'suitability': 'Cost-effective for semi-urban communities'
        }
    
    recommendations.append(primary)
    
    # Secondary recommendations
    if budget == 'low':
        secondary = {
            'method': 'Simple Recharge Pit System',
            'efficiency': '60-70%',
            'cost': '₹5,000-15,000',
            'suitability': 'Budget-friendly option with basic benefits'
        }
    elif budget == 'high':
        secondary = {
            'method': 'Advanced Filtration with Smart Monitoring',
            'efficiency': '90-95%',
            'cost': '₹75,000-1,50,000',
            'suitability': 'Premium system with maximum efficiency'
        }
    else:  # medium budget
        secondary = {
            'method': 'Standard Rooftop System with Basic Filtration',
            'efficiency': '80-85%',
            'cost': '₹30,000-50,000',
            'suitability': 'Balanced cost-performance option'
        }
    
    recommendations.append(secondary)
    
    return {
        'primary_recommendation': primary,
        'alternative_option': secondary,
        'location_factors': {
            'rainfall_category': 'High' if rainfall > 800 else 'Medium' if rainfall > 400 else 'Low',
            'location_type': location_type.title(),
            'recommended_capacity': f"{int(rainfall * 0.8)} liters per sq ft annually"
        }
    }


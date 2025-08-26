import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Droplets, Leaf, TrendingUp, Users, MessageCircle, BookOpen } from 'lucide-react'
import './App.css'

// Homepage Component
function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Ground Water Harvesting
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Sustainable water conservation solutions for India's future. Learn about groundwater harvesting techniques, 
            benefits, and how you can contribute to water security in your community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/chatbot">Water Calculator</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Water Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reduce dependency on external water sources and preserve precious groundwater resources for future generations.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Significant reduction in water bills and long-term economic benefits for households and communities.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Environmental Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Contribute to sustainable development and help combat climate change through responsible water management.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// About Component
function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Ground Water Harvesting</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Definition and Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Groundwater harvesting is the process of collecting and storing rainwater or surface water 
                to replenish underground aquifers. This sustainable practice helps maintain groundwater levels 
                and ensures water security for communities across India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Models</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Check Dams</h4>
                  <p className="text-sm text-gray-600">Small barriers built across seasonal streams to capture and store rainwater.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Percolation Tanks</h4>
                  <p className="text-sm text-gray-600">Artificial reservoirs that allow water to seep into the ground slowly.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recharge Wells</h4>
                  <p className="text-sm text-gray-600">Deep wells designed to direct surface water into underground aquifers.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rooftop Harvesting</h4>
                  <p className="text-sm text-gray-600">Collection of rainwater from building rooftops for storage or recharge.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context and Current Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                India has a rich history of traditional water harvesting systems dating back thousands of years. 
                Modern techniques combine ancient wisdom with contemporary technology to address current water challenges. 
                Government initiatives and community participation are driving widespread adoption across the country.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Benefits Component
function Benefits() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Benefits of Ground Water Harvesting</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-600" />
                Environmental Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Prevents soil erosion and reduces flood risks</li>
                <li>• Maintains groundwater levels and prevents depletion</li>
                <li>• Reduces urban heat island effect</li>
                <li>• Supports biodiversity and ecosystem health</li>
                <li>• Minimizes dependency on distant water sources</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Economic Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Significant reduction in water bills</li>
                <li>• Lower infrastructure costs compared to large-scale projects</li>
                <li>• Increased property values</li>
                <li>• Reduced energy costs for water pumping</li>
                <li>• Long-term return on investment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Social and Community Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Enhanced water security for communities</li>
                <li>• Reduced conflicts over water resources</li>
                <li>• Improved public health through better water quality</li>
                <li>• Community empowerment and participation</li>
                <li>• Educational opportunities about sustainability</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Case Studies Component
function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Case Studies and Success Stories</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Rajasthan - Desert Bloom Initiative</CardTitle>
              <CardDescription>Transforming arid landscapes through community-driven water harvesting</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the Thar Desert region of Rajasthan, traditional water harvesting techniques like bawris and 
                johads have been revived with modern enhancements. Over 500 villages have implemented these systems, 
                resulting in a 40% increase in groundwater levels and improved agricultural productivity.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-800">Impact: 2 million liters of water harvested annually per village</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tamil Nadu - Urban Rooftop Revolution</CardTitle>
              <CardDescription>Chennai's mandatory rooftop rainwater harvesting program</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Following severe water crises, Chennai implemented mandatory rooftop rainwater harvesting for all buildings. 
                This initiative has helped the city become more resilient to droughts and reduced dependency on external water sources.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-800">Impact: 50% reduction in groundwater depletion rate</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maharashtra - Watershed Management Success</CardTitle>
              <CardDescription>Hiware Bazar village transformation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hiware Bazar village in Maharashtra transformed from a drought-prone area to a water-surplus region 
                through comprehensive watershed management and community participation in water harvesting projects.
              </p>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-purple-800">Impact: Per capita income increased by 300%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Methods Component
function Methods() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Methods and Technologies</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Surface Water Harvesting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Check Dams and Weirs</h4>
                  <p className="text-gray-700 text-sm mb-2">Efficiency: 70-85% | Cost: ₹2-5 lakhs per structure</p>
                  <p className="text-gray-600">Ideal for seasonal streams in hilly and semi-arid regions. Best suited for areas with 400-800mm annual rainfall.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Farm Ponds</h4>
                  <p className="text-gray-700 text-sm mb-2">Efficiency: 60-75% | Cost: ₹50,000-2 lakhs</p>
                  <p className="text-gray-600">Suitable for individual farmers and small communities. Works well in areas with clay or impermeable soil.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rooftop Rainwater Harvesting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Direct Storage Systems</h4>
                  <p className="text-gray-700 text-sm mb-2">Efficiency: 80-90% | Cost: ₹15,000-50,000</p>
                  <p className="text-gray-600">Best for urban areas with reliable rainfall. Requires regular maintenance and water treatment.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recharge Systems</h4>
                  <p className="text-gray-700 text-sm mb-2">Efficiency: 70-80% | Cost: ₹10,000-30,000</p>
                  <p className="text-gray-600">Ideal for areas with good soil permeability. Lower maintenance compared to storage systems.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">High Rainfall (&gt;1000mm)</h4>
                  <p className="text-sm">Rooftop harvesting with storage tanks, percolation tanks for excess water management.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Moderate Rainfall (400-1000mm)</h4>
                  <p className="text-sm">Check dams, farm ponds, and recharge wells for optimal water capture.</p>
                </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Low Rainfall (&lt;400mm)</h4>
                    <p className="text-sm">Focus on recharge systems, traditional methods like bawris and johads.</p>
                  </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Urban Areas</h4>
                  <p className="text-sm">Mandatory rooftop harvesting, permeable pavements, and urban recharge systems.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Chatbot Component
function Chatbot() {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! I can help you estimate water savings and suggest the best harvesting methods for your location. What would you like to know?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return
    
    const userMessage = { type: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    
    // Simple chatbot responses (placeholder for actual implementation)
    setTimeout(() => {
      let botResponse = ''
      const lowerInput = input.toLowerCase()
      
      if (lowerInput.includes('water') && lowerInput.includes('save')) {
        botResponse = 'Based on average rooftop harvesting, a 1000 sq ft roof can collect approximately 15,000-20,000 liters annually in areas with 600mm rainfall. Would you like a detailed calculation for your specific area?'
      } else if (lowerInput.includes('cost') || lowerInput.includes('price')) {
        botResponse = 'Rooftop harvesting systems typically cost ₹15,000-50,000 for residential installations. The payback period is usually 3-5 years through water bill savings. What\'s your roof area and location?'
      } else if (lowerInput.includes('method') || lowerInput.includes('technique')) {
        botResponse = 'The best method depends on your location and rainfall. For urban areas, I recommend rooftop harvesting. For rural areas, check dams or farm ponds work well. What\'s your location type?'
      } else {
        botResponse = 'I can help you with water savings calculations, cost estimates, and method recommendations. Try asking about "water savings", "costs", or "best methods" for your area.'
      }
      
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }])
    }, 1000)
    
    setInput('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Water Harvesting Assistant</h1>
        
        <Card className="h-96 mb-4">
          <CardContent className="p-4 h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about water savings, costs, or methods..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button onClick={handleSend} className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center text-sm text-gray-600">
          This is a demonstration chatbot. For detailed calculations and professional advice, please contact our experts.
        </div>
      </div>
    </div>
  )
}

// Resources Component
function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Resources and Further Reading</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Research Papers and Studies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Groundwater Recharge through Rainwater Harvesting</h4>
                  <p className="text-sm text-gray-600">Central Ground Water Board, Ministry of Water Resources</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Economic Analysis of Rainwater Harvesting Systems in India</h4>
                  <p className="text-sm text-gray-600">Indian Institute of Technology, Delhi</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Traditional Water Harvesting Systems: A Review</h4>
                  <p className="text-sm text-gray-600">Journal of Environmental Management</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Government Policies and Schemes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">National Water Policy 2012</h4>
                  <p className="text-sm text-gray-700">Framework for sustainable water resource management and conservation.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pradhan Mantri Krishi Sinchayee Yojana</h4>
                  <p className="text-sm text-gray-700">Government scheme promoting water conservation and harvesting in agriculture.</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Atal Bhujal Yojana</h4>
                  <p className="text-sm text-gray-700">Groundwater management and conservation program in water-stressed areas.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Downloadable Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <h4 className="font-semibold mb-1">Rooftop Harvesting Manual</h4>
                  <p className="text-xs text-gray-600">Step-by-step installation guide</p>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <h4 className="font-semibold mb-1">Cost-Benefit Calculator</h4>
                  <p className="text-xs text-gray-600">Excel template for ROI analysis</p>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <h4 className="font-semibold mb-1">Maintenance Checklist</h4>
                  <p className="text-xs text-gray-600">Annual maintenance guidelines</p>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <h4 className="font-semibold mb-1">Policy Guidelines</h4>
                  <p className="text-xs text-gray-600">State-wise regulations summary</p>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Get Professional Advice</CardTitle>
            <CardDescription>
              Contact our experts for personalized recommendations and installation services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a topic</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="installation">Installation Services</option>
                  <option value="maintenance">Maintenance Support</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project, location, and requirements..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 Email: info@groundwaterharvesting.in</p>
                <p>📞 Phone: +91-9876543210</p>
                <p>🏢 Office: New Delhi, India</p>
                <p>⏰ Hours: Monday-Friday, 9 AM - 6 PM IST</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Navigation Component
function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            💧 GroundWater
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link to="/methods" className="text-gray-700 hover:text-blue-600 transition-colors">Methods</Link>
            <Link to="/chatbot" className="text-gray-700 hover:text-blue-600 transition-colors">Calculator</Link>
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">☰</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/methods" element={<Methods />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="mb-4">© 2024 Ground Water Harvesting Initiative. Promoting sustainable water conservation across India.</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/about" className="hover:text-blue-400">About</Link>
              <Link to="/contact" className="hover:text-blue-400">Contact</Link>
              <Link to="/resources" className="hover:text-blue-400">Resources</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App


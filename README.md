# Ground Water Harvesting Website

A comprehensive web application for promoting groundwater harvesting awareness and providing interactive tools for water conservation planning.

## Project Structure

```
groundwater_harvesting_project/
├── frontend/          # React frontend application
│   ├── src/
│   ├── dist/         # Built frontend files
│   └── package.json
├── backend/          # Flask backend application
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── models/   # Database models
│   │   └── static/   # Served frontend files
│   ├── venv/         # Python virtual environment
│   └── requirements.txt
└── README.md
```

## Features

### Frontend (React)
- **Homepage**: Introduction and key benefits
- **About**: Detailed information about groundwater harvesting
- **Benefits**: Environmental, economic, and social advantages
- **Case Studies**: Success stories from different regions
- **Methods**: Technical details and recommendations
- **Calculator/Chatbot**: Interactive water savings calculator
- **Resources**: Research papers and downloadable guides
- **Contact**: Professional consultation form

### Backend (Flask)
- **REST API**: Endpoints for chatbot functionality
- **Water Calculator**: Estimates savings based on roof area and rainfall
- **Method Recommendations**: Suggests best techniques by location
- **CORS Support**: Enables frontend-backend communication
- **Static File Serving**: Serves the built React application

## Installation & Setup

### Prerequisites
- Python 3.11+
- Node.js 20+
- pnpm package manager

### Backend Setup
```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
python src/main.py
```

### Frontend Development
```bash
cd frontend
pnpm install
pnpm run dev
```

### Production Build
```bash
cd frontend
pnpm run build
cp -r dist/* ../backend/src/static/
```

## API Endpoints

- `POST /api/chat` - Chatbot conversation
- `POST /api/calculate` - Water savings calculation
- `POST /api/recommend` - Method recommendations

## Technology Stack

- **Frontend**: React, Tailwind CSS, shadcn/ui, Lucide icons
- **Backend**: Flask, SQLAlchemy, Flask-CORS
- **Database**: SQLite (development)
- **Build Tools**: Vite, pnpm

## Usage

1. Start the Flask backend server
2. Access the application at http://localhost:5000
3. Navigate through different sections using the top menu
4. Use the Calculator page to interact with the chatbot
5. Fill out the Contact form for professional consultation

## Key Features Implemented

✅ Responsive design for all devices
✅ Interactive chatbot for water savings estimation
✅ Comprehensive information about harvesting methods
✅ Case studies from different Indian regions
✅ Professional contact form
✅ Modern UI with Tailwind CSS
✅ RESTful API backend
✅ Cross-origin resource sharing (CORS)

## Future Enhancements

- Advanced water calculation algorithms
- User authentication and profiles
- Real-time weather data integration
- Government scheme information
- Installation service provider directory
- Mobile application

## License

This project is created for educational and promotional purposes to increase awareness about groundwater harvesting in India.

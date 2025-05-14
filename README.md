# TritonThenix Website 💪

A dynamic React-based website for UC San Diego's premier calisthenics and fitness community. This platform serves as a hub for event management, and community engagement.

## 🌟 Features

- **Interactive Workout Schedule**: 
  - Dynamic calendar integration
  - Progress visualization
  
- **Event Management**:
  - Automated ICS file generation
  - Real-time event updates
  - RSVP functionality
  
- **Community Features**:
  - Member profiles and achievements
  - Family system for workout groups
  - Interactive bingo card challenges
  
- **Social Integration**:
  - Member profile showcase

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Data Handling**: 
  - PapaParse for CSV processing
  - Axios for API requests
  - Local Storage for persistence
- **UI/UX**: 
  - Custom CSS modules
  - FontAwesome icons
  - Responsive design
- **Automation**: Custom Node.js scripts for:
  - Image list generation
  - ICS file creation
  - CSV data processing

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/DEPRECIATED-tritonthenix-website.git
   cd DEPRECIATED-tritonthenix-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000)

## 📱 Development Scripts

- `npm start`: Development server
- `npm run build`: Production build
- `npm run generate-image-list`: Update image assets
- `npm run generate-ICS-files`: Create calendar files
- `npm run download-Event-Images-CSV`: Process event images

## 🔄 Automated Workflows

The project includes several automation scripts:
- Automatic image list generation
- Event calendar file creation
- CSV data processing for events and workouts
- GitHub Pages deployment pipeline

## 🏗️ Project Structure

```
src/
├── components/     # React components
│   ├── Events/    # Event management
│   ├── Workouts/  # Workout tracking
│   └── Members/   # Member profiles
├── scripts/       # Automation scripts
├── public/        # Static assets
└── ...           # Configuration files
```

## 📝 License

This project is private and maintained by TritonThenix at UC San Diego.

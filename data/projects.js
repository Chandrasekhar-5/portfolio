const projectsData = [
    {
        id: 1,
        title: "PrepPulse",
        description: "Coming soon. A next-gen exam preparation platform.",
        detailedDescription: "A comprehensive exam preparation platform featuring a modern dashboard, practice tests, and performance analytics. Built with pure HTML, CSS, and JavaScript, it includes interactive quiz modules, progress tracking, and a clean user interface optimized for study sessions.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: null,
        codeUrl: null,
        badge: "Coming Soon",
        comingSoon: true,
        features: ["Interactive Quizzes", "Progress Tracking", "Responsive Design", "Performance Analytics","Adaptive practice system for competitive exams",
    "Performance-based analytics dashboard",
    "Modern distraction-free study UI"]
    },
    {
        id: 2,
        title: "Finance Dashboard",
        description: "Frontend‑only application with advanced animations and interactive elements.",
        detailedDescription: "A comprehensive financial dashboard displaying real-time metrics, charts, and transaction history. Features include interactive data visualization using GSAP animations, dark/light mode, and mock API integration for financial data simulation.",
        technologies: ["JavaScript", "GSAP", "CSS"],
        liveUrl: "https://finance-dashboard-simulator.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/finance-dashboard-ui",
        badge: null,
        features: ["GSAP Animations", "Dark/Light Mode", "Interactive Charts", "Mock API Data"],
        images: {
            light: "assets/project-img/finance-light.png",
            dark: "assets/project-img/finance-dark.png"
        }
    },
    {
        id: 3,
        title: "Job Dashboard",
        description: "Open‑source reusable template for portfolio websites with modern design.",
        detailedDescription: "A job board dashboard for tracking applications, managing interviews, and organizing job search activities. Features include application status tracking, company profiles, and interview scheduling with a clean, modern interface.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://job-board-cb4.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/job-board",
        badge: "Open Source",
        features: ["Application Tracker", "Company Profiles", "Interview Scheduler", "Responsive Layout"],
        images: {
            light: "assets/project-img/job-light.png",
            dark: "assets/project-img/job-dark.png"
        }
    },
    {
        id: 4,
        title: "Movie Database",
        description: "A modern, responsive portfolio template to showcase your projects and skills.",
        detailedDescription: "A movie discovery application with search functionality, genre filtering, and detailed movie information. Features include trending movies, watchlist functionality, and responsive design for all devices.",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://movie-database-d3t.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/movie-database",
        badge: null,
        features: ["Movie Search", "Genre Filtering", "Watchlist", "Responsive Design"],
        image: "assets/project-img/movie-database.png"
    },
    {
        id: 5,
        title: "Weather App",
        description: "Real-time weather application with location detection and 5-day forecast.",
        detailedDescription: "A weather application that provides current conditions, 5-day forecasts, and location-based weather data. Features include geolocation detection, temperature unit conversion, and detailed weather metrics with animated weather icons.",
        technologies: ["API", "JavaScript", "CSS"],
        liveUrl: "https://arcweather.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/ArcWeather",
        badge: "API Integration",
        features: ["Geolocation", "5-Day Forecast", "Weather API", "Animated Icons"],
        image: "assets/project-img/weather.png"
    },
    {
        id: 6,
        title: "Expense Splitter",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "An expense splitting tool for groups to track shared expenses, calculate balances, and settle up. Features include adding participants, expense categorization, balance calculations, and local storage for data persistence.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://expense-splitter-8mh.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/expense-splitter",
        badge: "Interactive",
        features: ["Expense Tracking", "Balance Calculation", "Local Storage", "Group Management"],
        image: "assets/project-img/expense.png"
    },
    {
        id: 7,
        title: "Tip Calculator",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "A tip calculator that calculates tip amounts, splits bills, and provides different tip percentages. Features include bill splitting, custom tip percentages, and round-up functionality.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://tip-calculator-dwi.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/tip-calculator",
        badge: "Interactive",
        features: ["Tip Calculation", "Bill Splitting", "Custom Percentages", "Round-up Option"],
        images: {
            light: "assets/project-img/tip-light.png",
            dark: "assets/project-img/tip-dark.png"
        }
    },
    {
        id: 8,
        title: "Countdown Timer",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "A countdown timer application for tracking important events and deadlines. Features include multiple timer presets, custom time setting, pause/resume functionality, and visual progress indicators.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://countdown-timer-347.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/countdown-timer",
        badge: "Interactive",
        features: ["Custom Timers", "Progress Indicators", "Pause/Resume", "Multiple Presets"],
        images: {
            light: "assets/project-img/timer-light.png",
            dark: "assets/project-img/timer-dark.png"
        }
    },
    {
        id: 9,
        title: "Calculator",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "A fully functional calculator with basic arithmetic operations, memory functions, and a clean interface. Features include keyboard support, calculation history, and responsive design.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://calculator-eie.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/Calculator",
        badge: "Interactive",
        features: ["Basic Operations", "Memory Functions", "Keyboard Support", "Calculation History"],
        image: "assets/project-img/calculator.png"
    },
    {
        id: 10,
        title: "Periodic Table",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "An interactive periodic table with detailed element information, filtering options, and search functionality. Features include element details on hover, category filtering, and responsive grid layout.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://periodic-table-cii.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/periodic-table",
        badge: "Interactive",
        features: ["Element Details", "Category Filtering", "Search Functionality", "Interactive Grid"],
        image: "assets/project-img/periodic.png"
    }
];

export default projectsData;
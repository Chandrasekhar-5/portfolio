const projectsData = [
    {
        id: 1,
        title: "QuickPick",
        description: "A multi-tenant food ordering and analytics platform designed for college campuses.",
        detailedDescription: "QuickPick Campus is a multi-tenant food ordering and analytics platform designed for college campuses. The system allows students to order food from campus vendors while enabling vendors and administrators to manage operations and view analytics.",
        technologies: ["React.js", "TailwindCSS","Node.js", "Express.js", "MongoDB", "Typescript"],
        liveUrl: "https://quick-pick-landing-page.vercel.app/",
        codeUrl: "https://github.com/Chandrasekhar-5/quick-pick",
        badge: "Real-World Application",
        features: ["Multi-role campus food ordering platform for Students, Vendors, and Admins", "Real-time order management and vendor dashboard", "JWT-based authentication and role-based access control", "Multi-tenant architecture using collegeId isolation","Separate React frontends for scalability and security",
                    "Analytics and order tracking system","Integrated REST APIs with React frontends and MongoDB backend"],
        image: "assets/project-img/quick-pick.png"
    },


        /*
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
    "Modern distraction-free study UI"] */



    {
        id: 2,
        title: "Finance Dashboard",
        description: "A modern, responsive online banking dashboard.",
        detailedDescription: "A comprehensive financial dashboard displaying balance, accounts, and transaction history. Features include interactive data visualization , dark/light mode, and mock data for financial data simulation.",
        technologies: ["JavaScript(ES6+)", "CSS", "HTML"],
        liveUrl: "https://finance-dashboard-simulator.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/finance-dashboard-ui",
        badge: "Open Source",
        features: [
                "User Registration , Login & Secure logout ",
                "LocalStorage-based session persistence",
                "Real-time balance updates after transactions",
                "Internal transfers (checking ↔ savings)",
                "External transfer simulation",
                "Bill payments (electricity, internet, credit card, etc.)",
                "Dark/Light Mode"
        ],
        images: {
            light: "assets/project-img/finance-light.png",
            dark: "assets/project-img/finance-dark.png"
        }
    },
    {
        id: 3,
        title: "Job Dashboard",
        description: "A fully responsive, modern Job Board web application.",
        detailedDescription: "A fully responsive, modern Job Board web application built using HTML, CSS, and Vanilla JavaScript.It allows users to browse jobs, apply filters, sort listings, save jobs, and switch between light & dark themes — all without any backend.",
        technologies: ["JavaScript(ES6+)", "CSS", "HTML"],
        liveUrl: "https://job-board-cb4.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/job-board",
        badge: "Open Source",
        features: [
                "Search jobs by title, company, description, or skills", 
                "Filter by: Location , Job Type (Full Time, Part Time, Internship, Contract)", 
                "Sorting Options", 
                "Save Jobs (LocalStorage)",
                "Apply job action",
                "Grid View & List View toggle",
                "Fully responsive (mobile, tablet & desktop)"
            ],
        images: {
            light: "assets/project-img/job-light.png",
            dark: "assets/project-img/job-dark.png"
        }
    },
    {
        id: 4,
        title: "Movie Database",
        description: "A beautiful, responsive movie database web application built using OMDB API.",
        detailedDescription: "A movie discovery application with search functionality, genre filtering, and detailed movie information. Features include trending movies, watchlist functionality, and responsive design for all devices.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        liveUrl: "https://movie-database-d3t.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/movie-database",
        badge: "API Integration",
        features: [
                "Smart Search: Search for movies, TV series, and episodes", 
                "Filters: Filter by year and type (movie/series/episode)", 
                "Random Discovery: Discover random movies with one click", 
                "Responsive Design: Works perfectly on desktop, tablet, and mobile",
                "Infinite Scroll: Load more movies as you scroll"
            ],
        image: "assets/project-img/movie-database.png"
    },
    {
        id: 5,
        title: "Weather App",
        description: "Real-time weather application with 7-day forecast.",
        detailedDescription: "A weather application that provides current conditions, 7-day forecasts, and location-based weather data. Features include geolocation detection, temperature unit conversion, and detailed weather metrics with animated weather icons.",
        technologies: ["API", "JavaScript", "CSS", "HTML"],
        liveUrl: "https://arcweather.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/ArcWeather",
        badge: "API Integration",
        features: ["Geolocation", "5-Day Forecast", "Weather API", "Animated Icons"],
        image: "assets/project-img/weather.png"
    },
    {
        id: 6,
        title: "Expense Splitter",
        description: "A clean and interactive frontend-only Expense Splitter.",
        detailedDescription: "An expense splitting tool for groups to track shared expenses, calculate balances, and settle up. Features include adding participants, expense categorization, balance calculations, and local storage for data persistence.",
        technologies: ["Local Storage", "JavaScript", "UI/UX"],
        liveUrl: "https://expense-splitter-8mh.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/expense-splitter",
        badge: "Real-World Utility",
        features: [
                "Expense Tracking",
                "Optimized settlement suggestions (minimum transactions)", 
                "Balance Calculation", 
                "Local Storage",
                "Export & Import data (JSON)", 
                "Group Management"
            ],
        image: "assets/project-img/expense.png"
    },
    {
        id: 7,
        title: "Tip Calculator",
        description: "A clean, responsive Tip Calculator web application.",
        detailedDescription: "A tip calculator that calculates tip amounts, splits bills, and provides different tip percentages. Features include bill splitting, custom tip percentages, and round-up functionality.",
        technologies: ["JavaScript(ES6+)", "CSS", "HTML"],
        liveUrl: "https://tip-calculator-dwi.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/tip-calculator",
        badge: "Logic-Building Project",
        features: [
                "Enter bill amount with validation", 
                "Split bill among multiple people", 
                "Select tip percentage or enter custom tip", 
                "Real-time calculation (no calculate button)"
            ],
        images: {
            light: "assets/project-img/tip-light.png",
            dark: "assets/project-img/tip-dark.png"
        }
    },
    {
        id: 8,
        title: "Countdown Timer",
        description: "Drag and drop task management application with local storage.",
        detailedDescription: "A countdown timer application focusing on clean UI, accurate timing logic, and mobile-first responsiveness.Features include custom time setting, pause/resume functionality.",
        technologies: ["JavaScript", "CSS", "HTML"],
        liveUrl: "https://countdown-timer-347.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/countdown-timer",
        badge: "Time-Based Utility",
        features: [
                "Set countdown using hours, minutes, and seconds", 
                "Start, pause, resume, and reset controls", 
                "Live countdown display", 
                "Visual indication when timer completes"],
        images: {
            light: "assets/project-img/timer-light.png",
            dark: "assets/project-img/timer-dark.png"
        }
    },
    {
        id: 9,
        title: "Calculator",
        description: "A modern, mobile-inspired scientific calculator.",
        detailedDescription: "The Realme Style Calculator is a feature-rich web application designed to replicate the feel of a modern smartphone calculator while extending its capabilities beyond basic arithmetic.In addition, it includes a slide-in unit converter drawer that allows users to convert values across multiple domains such as length, weight, area, volume, temperature, speed, pressure, power, number systems, and currency.",
        technologies: ["JavaScript", "CSS", "HTML", "API"],
        liveUrl: "https://calculator-eie.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/Calculator",
        badge: "Logic-Building Project",
        features: [
                "Basic operations: + − × ÷ %", 
                "Scientific functions:sin, cos, tan, log, ln, √, factorial !, inverse", 
                "Power operator ^", 
                "Constants: π, e, Bracket support ( )",
                "Radians / Degrees toggle",
                "Animated function preview before calculation",
                "Smart input handling & error prevention"
            ],
        image: "assets/project-img/calculator.png"
    },
    {
        id: 10,
        title: "Periodic Table",
        description: "An interactive, visually rich periodic table web application.",
        detailedDescription: "The Interactive Periodic Table is a dynamic web-based visualization of the periodic table designed to make learning chemistry intuitive and engaging. Instead of static tables, each element is represented as an interactive card placed accurately according to its period and group. Elements respond to user interactions such as hovering, searching, and clicking, providing instant visual feedback.",
        technologies: ["JavaScript", "CSS", "HTML"],
        liveUrl: "https://periodic-table-cii.pages.dev/",
        codeUrl: "https://github.com/Chandrasekhar-5/periodic-table",
        badge: "Interactive",
        features: [
                "Complete periodic table (118 elements)", 
                "Hover animations with smooth scaling", 
                "Click-based element detail modal", 
                "Smart search & highlight system",
                "Color-coded element categories",
                "Separate Lanthanide & Actinide series"
            ],
        image: "assets/project-img/periodic.png"
    }
];

export default projectsData;
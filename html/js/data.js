/* Shared data for the standalone HTML pages. Mirrors src/data/*.json from the Vue project. */

const NAVIGATION = {
  brand: "Bikram",
  links: [
    { label: "Home", path: "index.html" },
    { label: "About", path: "about.html" },
    { label: "Skills", path: "skills.html" },
    { label: "Experience", path: "experience.html" },
    { label: "Projects", path: "projects.html" },
    { label: "Services", path: "services.html" },
    { label: "Contact", path: "contact.html" }
  ],
  cta: { label: "Download Resume", path: "resume.html" }
};

const PROFILE = {
  name: "Bikram",
  role: "FRONTEND DEVELOPER",
  heroTitleLine1: "Crafting High-Performance",
  heroTitleLine2: "Digital Experiences",
  heroDescription: "I'm a Frontend Developer with 8+ years of experience in building modern, scalable and user-friendly web applications. I specialize in React, Vue, TypeScript and modern frontend architectures.",
  heroStack: ["React", "Vue", "Next.js", "TypeScript", "Tailwind"],
  heroStats: [
    { value: "8+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" }
  ],
  heroNote: "Turning ideas into fast, accessible and beautiful web experiences.",
  aboutHeading: "I'm a Frontend Developer with 8+ Years of Experience",
  aboutParagraph1: "I build modern, responsive and accessible web applications using technologies like React, Vue, TypeScript and more.",
  aboutParagraph2: "I love turning complex problems into simple, elegant solutions and always strive to create seamless user experiences.",
  aboutStats: [
    { value: "8+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "Remote", label: "Work Mode" }
  ],
  philosophy: "Better UI, Better Experiences.",
  coreStrengths: [
    { title: "Problem Solving", description: "Build efficient solutions" },
    { title: "Clean Code", description: "Maintainable & scalable" },
    { title: "Team Collaboration", description: "Work well as agile teams" },
    { title: "Continuous Learning", description: "Stay updated with new tech" }
  ]
};

const SKILLS = {
  heading: "Technologies I Work With",
  description: "I work with modern technologies and tools to build scalable, performance-driven and user-friendly web applications.",
  categories: [
    { id: "frontend", title: "Frontend", items: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript"] },
    { id: "frameworks", title: "Frameworks & Libraries", items: ["React", "Vue", "Next.js", "Nuxt.js", "Bootstrap", "jQuery", "Redux", "Vuex", "Pinia"] },
    { id: "api", title: "API & Integration", items: ["REST API", "GraphQL", "JSON", "Axios", "Async JS", "Accessibility", "Adobe Analytics"] },
    { id: "tools", title: "Tools & Design", items: ["Figma", "VS Code", "FileZilla", "MS Office"] },
    { id: "version-control", title: "Version Control", items: ["Git", "GitHub"] },
    { id: "ui-ux", title: "UI/UX", items: ["Figma", "Adobe XD", "Design Systems"] }
  ]
};

const EXPERIENCE = {
  heading: "Professional Journey",
  description: "8+ years of experience building modern web applications and leading frontend development initiatives.",
  totalExperience: "8+ Years",
  timeline: [
    {
      id: "scb",
      period: "2021 - Present",
      role: "Senior Frontend Developer",
      company: "Standard Chartered Bank",
      points: [
        "Developed and maintained customer-facing web applications",
        "Worked on SCB digital journeys and marketing platforms",
        "Collaborated with cross-functional teams to deliver high-quality features"
      ],
      tags: ["React", "Vue", "JavaScript", "TypeScript", "SCSS"]
    },
    {
      id: "abc",
      period: "2018 - 2021",
      role: "Frontend Developer",
      company: "ABC Tech Solutions",
      points: [
        "Built responsive web applications for enterprise clients",
        "Implemented UI components and REST APIs"
      ],
      tags: ["React", "Vue", "JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "xyz",
      period: "2016 - 2018",
      role: "Junior Frontend Developer",
      company: "XYZ Digital",
      points: [
        "Developed interactive UI components",
        "Fixed bugs and improved performance"
      ],
      tags: ["HTML5", "jQuery", "CSS3"]
    }
  ]
};

const PROJECTS = {
  heading: "My Recent Work",
  description: "Here are some of the projects I've worked on, showcasing my skills in frontend development and UI engineering.",
  filters: ["All", "React", "Vue", "Next.js", "Web App"],
  items: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A modern e-commerce web application with product listing, cart and checkout functionality.",
      role: "Frontend Developer",
      category: "React",
      tags: ["React", "TypeScript", "Redux", "Tailwind", "Axios"],
      duration: "3 months",
      liveDemo: "https://ecommerce-demo.com",
      overview: "Built a scalable e-commerce platform with product listing, cart, checkout and user authentication. Focused on performance, clean code and responsive design.",
      keyFeatures: ["Product catalog & search", "Shopping cart & checkout", "User authentication", "Responsive design"],
      tabs: ["Overview", "Challenges", "Solution", "Development Process", "Results"]
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "A productivity tool for managing tasks, projects and teams with real-time sync.",
      role: "Frontend Developer",
      category: "Vue",
      tags: ["Vue", "Pinia", "Vuex", "SCSS"],
      duration: "2 months",
      liveDemo: "https://taskapp-demo.com",
      overview: "A productivity tool for managing tasks, projects and teams with real-time sync and a clean, distraction-free interface.",
      keyFeatures: ["Kanban boards", "Team collaboration", "Real-time updates", "Task reminders"],
      tabs: ["Overview", "Challenges", "Solution", "Development Process", "Results"]
    },
    {
      id: "travel-booking-platform",
      title: "Travel Booking Platform",
      description: "A responsive travel booking platform with filters and booking flow.",
      role: "Frontend Developer",
      category: "Next.js",
      tags: ["Next.js", "TypeScript", "REST API"],
      duration: "4 months",
      liveDemo: "https://travelbooking-demo.com",
      overview: "A responsive travel booking platform that lets users search flights and hotels with rich filtering and a streamlined booking flow.",
      keyFeatures: ["Flight & hotel search", "Advanced filters", "Booking flow", "Responsive layout"],
      tabs: ["Overview", "Challenges", "Solution", "Development Process", "Results"]
    },
    {
      id: "analytics-dashboard",
      title: "Analytics Dashboard",
      description: "Admin dashboard with data visualization and analytics reports.",
      role: "Frontend Developer",
      category: "Web App",
      tags: ["React", "Chart.js", "Antd", "SCSS"],
      duration: "2 months",
      liveDemo: "https://analytics-demo.com",
      overview: "An admin dashboard with data visualization widgets and downloadable analytics reports for business teams.",
      keyFeatures: ["Interactive charts", "Custom reports", "Role-based access", "Dark mode"],
      tabs: ["Overview", "Challenges", "Solution", "Development Process", "Results"]
    }
  ]
};

const SERVICES = {
  heading: "My Services",
  description: "I provide end-to-end frontend development services to help businesses build modern, high-performing web applications.",
  items: [
    { id: "frontend-development", title: "Frontend Development", description: "Modern, scalable and maintainable UI applications." },
    { id: "ui-engineering", title: "UI Engineering", description: "Pixel-perfect and accessible user interfaces." },
    { id: "responsive-web-development", title: "Responsive Web Development", description: "Mobile-first, cross-browser responsive design." },
    { id: "api-integration", title: "API Integration", description: "REST & GraphQL integration with seamless data flow." },
    { id: "performance-optimization", title: "Performance Optimization", description: "Faster load times & better user experience." },
    { id: "website-modernization", title: "Website Modernization", description: "Upgrade legacy systems to modern tech." }
  ]
};

const CONTACT = {
  heading: "Let's Work Together",
  description: "Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to new opportunities and interesting conversations.",
  availability: "Available for new opportunities",
  email: "Bikram@example.com",
  linkedin: "linkedin.com/in/Bikram",
  github: "github.com/Bikram",
  formNote: "Let's build something amazing together."
};

const RESUME = {
  heading: "My Resume",
  description: "View my detailed resume with experience, skills, education and certifications.",
  pdfUrl: "#",
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" }
  ]
};

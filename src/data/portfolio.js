import hazemPhoto from '../assets/hazem.jpg';

export const portfolioData = {
  personal: {
    name: "Hazem AlTaamneh",
    title: "Architectural Engineer | Facade Specialist",
    subtitle: "Project Coordinator | Architectural Technologist",
    location: "Germany",
    email: "hazem@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Experienced Architectural Engineer with a passion for facade design and technical innovation. Specialized in BIM modeling, 3D visualization, and construction management.",
    image: hazemPhoto,
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8e7d3e18?w=1200&h=400&fit=crop"
  },

  about: {
    summary: "Architectural Engineer with 5+ years of experience in facade design, BIM modeling, and construction management. Skilled in transforming technical concepts into innovative architectural solutions. Specialized in program management and project coordination.",
    highlights: [
      "Expert in Revit BIM and 3D rendering",
      "Facade design and technical detailing",
      "Project management and coordination",
      "Construction drawings and specifications"
    ]
  },

  experience: [
    {
      id: 1,
      title: "Facade Designer",
      company: "Ennova Facades Inc.",
      duration: "Apr 2020 - Aug 2023",
      location: "Windsor, Ontario, Canada",
      type: "Full-time",
      description: [
        "Designed and managed facade systems for commercial and residential projects",
        "Coordinated with architectural teams and clients for project specifications",
        "Utilized AutoCAD and Revit for technical documentation"
      ],
      skills: ["Program Management", "Construction Management", "AutoCAD", "Revit", "Technical Design"]
    },
    {
      id: 2,
      title: "Architectural Designer",
      company: "Freelance",
      duration: "Sep 2020 - Feb 2023",
      location: "Kingsville, Ontario, Canada",
      type: "Freelance",
      description: [
        "Transformed technical construction drawings into 3D architectural models using Revit BIM software",
        "Produced renders from 3D rendering software using Enscape",
        "Produced presentation materials for client proposals",
        "Worked closely with clients to manage project updates"
      ],
      skills: ["Revit", "Enscape", "3D Rendering", "BIM Modeling", "Client Management"]
    },
    {
      id: 3,
      title: "Prototype Specialist",
      company: "EWS Inc.",
      duration: "Apr 2019 - Mar 2020",
      location: "Leamington, Ontario, Canada",
      type: "Contract Part-time",
      description: [
        "Read and interpreted blueprints and schematics for specific jobs",
        "Operated manual and automatic tools for assembly",
        "Ensured product quality through inspections",
        "Led training and mentored newer employees"
      ],
      skills: ["Project Planning", "Quality Control", "Blueprint Reading", "Team Leadership"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Architectural Engineering",
      school: "Faculty of Engineering and Information Technology - University of Pécs",
      duration: "Sep 2024 - Feb 2026",
      grade: "4.71/5 - Excellent",
      skills: ["Analytical Skills", "Detailed Design", "BIM Modeling"]
    },
    {
      id: 2,
      degree: "Ontario College Advanced Diploma",
      field: "Architectural Technology",
      school: "St. Clair College",
      description: "Building design, construction drawings, project estimating, and construction specifications",
      skills: ["Analytical Skills", "Detailed Design", "Construction Documentation"]
    }
  ],

  skills: [
    { category: "Software", skills: ["Revit", "AutoCAD", "SketchUp", "Enscape", "Photoshop", "ArchiCAD"] },
    { category: "Design", skills: ["Facade Design", "BIM Modeling", "3D Rendering", "Technical Detailing", "Building Information Modeling"] },
    { category: "Management", skills: ["Project Management", "Construction Management", "Program Management", "Project Coordination", "Client Management"] },
    { category: "Technical", skills: ["Construction Drawings", "Building Specifications", "Blueprint Reading", "Quality Control"] }
  ],

  certifications: [
    {
      id: 1,
      title: "Project Initiation: Starting a Successful Project",
      issuer: "Google",
      issued: "Feb 2025",
      credentialId: "EDH6THQRCLNC"
    },
    {
      id: 2,
      title: "Foundations of Project Management",
      issuer: "Google",
      issued: "Jul 2024",
      credentialId: "JD8MJEMB545N"
    }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/hazemmt/",
    github: "https://github.com/hazemmt1",
    email: "hazem@example.com",
    phone: "+1 (555) 123-4567"
  }
};

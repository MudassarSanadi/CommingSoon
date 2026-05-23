export interface TeamMember {
  initials: string
  name: string
  role: string
  bio: string
  about: string
  skills: string[]
  projects: string[]
}

export const teamMembers: TeamMember[] = [
  {
    initials: 'AR',
    name: 'Aryan Rathi',
    role: 'Software Architect',
    bio: '10+ years designing scalable enterprise systems. Specializes in distributed architecture and cloud-native applications.',
    about: 'Aryan leads architectural decisions across all major platform builds. With over a decade of enterprise software experience, he brings structure, foresight, and technical depth to every engagement.',
    skills: ['System Design', 'Cloud Architecture', 'Node.js', 'PostgreSQL', 'Microservices'],
    projects: ['Dairy ERP Platform', 'Multi-Branch Retail System', 'SaaS Billing Engine']
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Backend Lead',
    bio: 'Expert in API architecture and database optimization. Builds the backbone of high-throughput enterprise systems.',
    about: 'Priya architects the server-side systems that power Logic Shell\'s most demanding client deployments.',
    skills: ['Python', 'Django', 'Redis', 'MySQL', 'API Design'],
    projects: ['Cloud Analytics Engine', 'CRM Backend', 'Inventory Management System']
  },
  {
    initials: 'KM',
    name: 'Karan Mehta',
    role: 'UI/UX Designer',
    bio: 'Crafts enterprise interfaces that are operationally functional and visually refined. Former Zoho product designer.',
    about: 'Karan brings a rare combination of product thinking and visual craft to Logic Shell.',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'React'],
    projects: ['Enterprise Dashboard Suite', 'POS Interface Redesign', 'Mobile Monitoring App']
  },
  {
    initials: 'AN',
    name: 'Asgar Nesari',
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer with expertise in modern JavaScript frameworks, REST APIs, and database design.',
    about: 'Asgar is a dedicated Full Stack Developer with strong command over React, Node.js, and MongoDB. He has delivered multiple end-to-end web applications with a focus on performance and clean code.',
    skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    projects: ['E-Commerce Dashboard', 'Inventory Management System', 'Real-time Analytics Portal']
  },
  {
    initials: 'MM',
    name: 'Muskan Mujawar',
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer specializing in modern web technologies, API integration, and responsive UI development.',
    about: 'Muskan is a passionate Full Stack Developer with expertise in building dynamic web applications. She excels at creating intuitive interfaces and robust backend systems.',
    skills: ['JavaScript', 'React', 'Python', 'Django', 'PostgreSQL'],
    projects: ['Customer Portal', 'Admin Dashboard', 'Workflow Automation Tool']
  },
  {
    initials: 'GP',
    name: 'Gayatri Patil',
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer skilled in frontend frameworks, backend services, and database management.',
    about: 'Gayatri brings a holistic approach to full stack development, bridging the gap between design and functionality.',
    skills: ['Vue.js', 'Laravel', 'MySQL', 'REST APIs', 'Bootstrap'],
    projects: ['HR Management System', 'Inventory Tracker', 'Client Portal']
  }
]
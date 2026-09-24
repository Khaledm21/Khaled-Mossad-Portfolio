import { FaGraduationCap, FaRobot, FaShieldAlt, FaLaptopCode, FaDesktop } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'

export const experienceData = [
  {
    id: 1,
    role: 'Front-End Developer',
    company: 'IBGates',
    location: 'Mansoura, Egypt',
    period: 'Aug 2025 – Aug 2026',
    type: 'Full-time',
    color: '#6366f1',
    current: false,
    description: [
      'Worked as a Front-End Developer focusing on building and improving modern, responsive web interfaces using React.js. Developed reusable and scalable components, enhanced existing interfaces, and contributed to improving the overall UI/UX across different projects.',
      'Collaborated with team members throughout the development process to deliver reliable and user-friendly solutions. The role also involved research, data collection, content preparation, data entry, and basic data analysis, giving me experience beyond frontend development and strengthening my ability to work across different types of tasks and requirements.',
    ],
    points: [
      'Built and improved modern, responsive web interfaces using React.js',
      'Developed reusable and scalable components, enhancing performance & overall UI/UX',
      'Collaborated with team members throughout the development lifecycle to deliver reliable solutions',
      'Handled research, data collection, content preparation, data entry, and basic data analysis',
    ],
  },
]

export const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science and Engineering',
    field: 'Software Engineering',
    school: 'New Mansoura University',
    location: 'Mansoura, Egypt',
    period: '2021 – 2025',
    icon: FaGraduationCap,
    color: '#6366f1',
    description: [
      "Completed my Bachelor's degree in Computer Science and Engineering with a specialization in Software Engineering. My academic journey provided the foundation for my understanding of software development, programming, problem-solving, and engineering principles, which I later applied to practical web development projects and professional training.",
    ],
    tags: ['Software Engineering', 'Computer Science', 'OOP', 'Data Structures', 'Problem Solving'],
  },
  {
    id: 2,
    degree: 'SOC Analyst & Cybersecurity Diploma',
    field: 'Security Operations & Threat Defense',
    school: 'AMIT Learning',
    location: 'Egypt',
    period: 'Jul 2026 – Present',
    icon: FaShieldAlt,
    color: '#10b981',
    current: true,
    description: [
      'Currently pursuing a 160-hour practical Cybersecurity and Security Operations diploma, expanding my technical background beyond software development into cybersecurity.',
      'The program covers Network Fundamentals, Linux, CompTIA Security+, Cyber Attacks, Incident Response, Digital Forensics, Threat Hunting, QRadar, and Splunk. It also includes hands-on training with tools such as Kali Linux, Burp Suite, OWASP ZAP, Nmap, SQLMap, Postman, QRadar, and Splunk, alongside practical labs in network security, web attack simulation, incident response, digital forensics, and SIEM-based threat hunting.',
    ],
    tags: ['Kali Linux', 'Burp Suite', 'Splunk', 'QRadar', 'CompTIA Security+', 'SIEM'],
  },
  {
    id: 3,
    degree: 'Front-End Development with React',
    field: 'Modern Web Development',
    school: 'Route Academy',
    location: 'Egypt',
    period: 'Oct 2025 – Apr 2026',
    icon: SiReact,
    color: '#00d8ff',
    description: [
      'Completed practical front-end development training focused on HTML, CSS, JavaScript, and React.js. Throughout the training, I worked on building interactive and responsive web applications while applying clean-code practices and modern UI/UX principles.',
      'The program strengthened my ability to transform designs and requirements into real-world React applications and helped build the technical foundation I use in my current frontend projects.',
    ],
    tags: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Clean Code', 'UI/UX Principles'],
  },
  {
    id: 4,
    degree: 'Front-End Developer Trainee',
    field: 'Intensive Front-End Training',
    school: 'Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Egypt',
    period: '2025',
    icon: FaLaptopCode,
    color: '#8b5cf6',
    description: [
      'Completed an intensive front-end development training program covering HTML, CSS, JavaScript, React.js, and responsive web design.',
      'Worked on multiple practical front-end projects with a focus on usability and clean code. The program also provided experience working on collaborative tasks and helped strengthen teamwork, time management, self-learning, and problem-solving skills.',
    ],
    tags: ['React.js', 'Responsive Design', 'Component Architecture', 'Clean Code', 'Teamwork'],
  },
  {
    id: 5,
    degree: 'IT Intern',
    field: 'Information Technology Fundamentals',
    school: 'General Authority for Investment and Free Zones (GAFI)',
    location: 'Egypt',
    period: 'Aug 2023',
    icon: FaDesktop,
    color: '#f59e0b',
    description: [
      'Completed a one-month IT training program that introduced me to different areas of information technology, including networking, databases, and IT support fundamentals.',
      'The experience also helped develop professional skills in communication, technical documentation, and task management while providing early exposure to working within a professional IT environment.',
    ],
    tags: ['Networking', 'Databases', 'IT Support', 'Technical Documentation'],
  },
  {
    id: 6,
    degree: 'Robotics Trainee',
    field: 'Humanoid Robotics & Programming Logic',
    school: 'Faculty of Computer Science, New Mansoura University',
    location: 'Mansoura, Egypt',
    period: 'Jul 2022',
    icon: FaRobot,
    color: '#ec4899',
    description: [
      'Completed hands-on training in robotics fundamentals and programming concepts, including practical experience working with humanoid robots such as the NAO robot.',
      'Developed simple robotics projects and interactive tasks during the training, strengthening my understanding of programming logic, problem-solving, and applying software concepts to physical and interactive systems.',
    ],
    tags: ['NAO Robot', 'Robotics Logic', 'Algorithm Design', 'Problem Solving'],
  },
]

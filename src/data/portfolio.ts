export const profile = {
  name: "Ali Ahmed",
  email: "aliahmed7d3@gmail.com",
  phone: "(469) 386-2859",
  phoneHref: "tel:+14693862859",
  github: "https://github.com/ali-ahmed-code",
  linkedin: "https://www.linkedin.com/in/aahme105",
  resumePath: "resume.pdf",
  tagline: "Code that makes a difference.",
};

// The displayed code and the Run button share these exact values.
export const ali = {
  name: profile.name,
  studying: "Computer Science",
  university: "ASU",
  graduation: 2027,
  focus: ["full-stack development", "real-world impact"],
  alwaysLearning: true,
} as const;

export function introduceAli() {
  return (
    `${ali.name} is a ` +
    `${ali.studying} student at ` +
    `${ali.university}.`
  );
}

export const navigation = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export const stats = [
  {
    value: "3",
    label: "Professional roles",
    detail: "Technology & operations",
  },
  {
    value: "44%",
    label: "More consultations",
    detail: "Booking workflow redesign",
  },
  { value: "80", label: "Staff on my team", detail: "Coordinating at ASU" },
  {
    value: "2027",
    label: "Expected graduation",
    detail: "B.S. Computer Science",
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  period?: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: { src: string; alt: string };
  featured?: boolean;
}

// Add more objects here. The responsive grid adjusts automatically.
// Dates and project URLs are intentionally omitted until you supply them.
export const projects: Project[] = [
  {
    id: "weather-app",
    title: "Weather App",
    category: "Personal project",
    description:
      "A clear forecast, wherever you are. A responsive weather app that turns live API data into an easy-to-read everyday tool.",
    highlights: [
      "Real-time weather data through the OpenWeatherMap API.",
      "Asynchronous API handling and dynamic weather icons.",
      "Dual °C / °F display, with a layout built for mobile and desktop.",
      "Deployed using GitHub Pages.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "REST API", "GitHub Pages"],
    featured: true,
    // githubUrl: 'https://github.com/ali-ahmed-code/your-repository',
    // liveUrl: 'https://your-real-project-url',
    // period: '2025',
    // image: { src: 'images/weather-app.webp', alt: 'Weather App showing a forecast and temperature controls' },
  },
];

export const experience = [
  {
    title: "Facilities Supervisor",
    company: "Sun Devil Fitness Complex, ASU",
    location: "Tempe, Arizona",
    period: "May 2025 — Present",
    current: true,
    highlights: [
      "Supervise facility operations and enforce safety procedures to keep recreation spaces running smoothly.",
      "Assist 2,000+ daily users with facility access, equipment, and recreation support.",
      "Coordinate with an 80-person staff team; CPR and First Aid certified.",
    ],
    tags: ["Leadership", "Operations", "Safety"],
    impact: "2,000+ daily users supported",
  },
  {
    title: "Web Development Intern",
    company: "Project Managers",
    location: "Karachi, Pakistan",
    period: "May 2023 — Jul 2023",
    current: false,
    highlights: [
      "Fixed HTML, CSS, and JavaScript bugs that were breaking client appointment bookings.",
      "Tracked bugs and sprint work in Jira, keeping fixes organized and visible to the team.",
      "Redesigned the booking workflow, cutting average booking time from 13 to 6 minutes.",
      "Increased monthly consultations from 9 to 13 clients (+44%), driving a 44% rise in revenue.",
    ],
    tags: ["HTML / CSS", "JavaScript", "Jira"],
    impact: "13 → 6 min average booking time",
  },
  {
    title: "IT & Digital Support Intern",
    company: "J. Junaid Jamshed",
    location: "Karachi, Pakistan",
    period: "Nov 2022 — Jan 2023",
    current: false,
    highlights: [
      "Resolved inconsistencies in a digital catalog system as part of a six-person team.",
      "Improved catalog update speed by 30% and reduced data-entry errors by 20%.",
      "Contributed to a 12% increase in online sales through improvements to catalog quality and operations.",
    ],
    tags: ["E-commerce", "Data quality", "Teamwork"],
    impact: "30% faster catalog updates",
  },
];

export const leadership = [
  {
    role: "Society Executive Member",
    organization: "Lyceum Lytech · Tech Society",
    period: "Aug 2022 — May 2023",
    highlights: [
      "Organized a Tech Fair for 250+ participants and led a 113-member team on event logistics and registration.",
      "Ran a social media campaign that grew participation by 25%.",
    ],
    metric: "250+",
    metricLabel: "Tech Fair participants",
  },
  {
    role: "Volunteer",
    organization: "Lyceum Service Society · Karachi",
    period: "Oct 2021 — May 2023",
    highlights: [
      "Organized bake sales and donation drives, raising approximately $4,000 for charity and cancer patients.",
      "Homeschooled underprivileged students, bringing the same patience and care to teaching as to teamwork.",
    ],
    metric: "~$4K",
    metricLabel: "Raised for community causes",
  },
];

export const coursework = [
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Computer Organization and Assembly Language",
  "Introduction to Programming Languages",
  "Entrepreneurship in Tech",
];

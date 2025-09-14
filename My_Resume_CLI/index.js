#!/usr/bin/env node

// ANSI escape codes for formatting
const reset = "\x1b[0m";
const bold = "\x1b[1m";
const underline = "\x1b[4m";
const blue = "\x1b[34m";
const cyan = "\x1b[36m";

// Box drawing characters
const topLeft = "┌";
const topRight = "┐";
const bottomLeft = "└";
const bottomRight = "┘";
const horizontal = "─";
const vertical = "│";
const separatorLine = "├" + "─".repeat(70) + "┤";

function padLine(line, width) {
  const len = line.replace(/\x1b\[[0-9;]*m/g, '').length; // strip ANSI codes for length
  if (len > width) return line;
  return line + " ".repeat(width - len);
}

const contentWidth = 70;

const resumeLines = [
  `${bold}Kiran Jaiswal${reset}`,
  `Linkedin: linkedin.com/in/kiran-jaiswal/`,
  `GitHub: github.com/kiran-jaiswal`,
  `Coding Profile: codolio.com/profile/kiranjaiswall`,
  `Portfolio: https://codebykiran.vercel.app/`,
  "",
  `${underline}SKILLS${reset}`,
  `- ${bold}Languages:${reset} C++, JavaScript, C, PHP, Python`,
  `- ${bold}Frameworks:${reset} HTML, CSS, Bootstrap, NodeJS, React, Tailwind CSS, ExpressJS`,
  `- ${bold}Tools/Platforms:${reset} MySQL, MongoDB, Git & GitHub, Figma, VS Code, IntelliJ`,
  `- ${bold}Core Concepts:${reset} Data Structures and Algorithms, Object-Oriented Programming (OOP), Operating System (OS), Computer Networks (CN)`,
  `- ${bold}Soft Skills:${reset} Resilient, Analytical, Detail-oriented, Adaptable, Proactive`,
  "",
  `${underline}EXPERIENCE${reset}`,
  `- ${bold}Outlier – AI Intern (Remote)${reset} (September 2024 – December 2024)`,
  `  Freelancer`,
  `  • Engineered and tested 30+ AI prompts for LLMs, increasing response accuracy by 25% in QA benchmark tests.`,
  `  • Implemented prompt engineering techniques and evaluated model outputs for performance and reliability.`,
  `  • Fine-tuned an AI model for enhanced accuracy in mathematical computations.`,
  "",
  `${underline}PROJECTS${reset}`,
  `- ${bold}PrepWise${reset} | Next.js, Tailwind CSS, TypeScript Vapi, Firebase, Gemini, WebStorm (August 2025)`,
  `  • Developed an AI-powered mock interview web application enabling real-time interview simulations with conversational AI, improving user preparation for technical interviews.`,
  `  • Integrated Vapi Web SDK for dynamic Workflow handling within the application, removing the need for manual assistant setup in the dashboard.`,
  `  • Implemented Firebase Authentication for secure user login/signup and Cloud Firestore for scalable data storage and interview session tracking.`,
  `- ${bold}Virtual ICU Visits${reset} | HTML, Tailwind CSS, JavaScript, PHP (April 2025)`,
  `  • Designed and developed a secure web-based platform for virtual ICU visits, enabling real-time communication between doctors and family members, and secure remote access to patient updates.`,
  `  • Implemented video visit request and scheduling features with automated notifications to enhance coordination and user experience.`,
  `  • Project Link: virtualicu.42web.io/`,
  `- ${bold}Zenaris${reset} | Next.js, TypeScript, LangChain, ChromaDB, Clerk, Stripe, Gemini (December 2024)`,
  `  • Built Zenaris, a SaaS eLearning platform offering personalized learning paths with AI-powered content recommendations and semantic search.`,
  `  • Used Gemini API to generate custom study plans; working on LangChain stored context embeddings in ChromaDB for fast retrieval and multi-modal memory.`,
  `  • Implemented secure payments via Stripe and user auth with Clerk; improved course completion rates by 40% for early beta users.`,
  "",
  `${underline}CERTIFICATES${reset}`,
  `- Introduction to Machine Learning – IIT Madras | NPTEL (October 2024)`,
  `- Python using Django Track | Cipher Schools (August 2024)`,
  `- Mastering Data Structures and Algorithms Using C and C++ | Udemy (November 2023)`,
  "",
  `${underline}ACHIEVEMENTS${reset}`,
  `- Top 50 finalist, SIH 2024 – sustainability project on smart resource conservation. (November 2024)`,
  `- Selected as a Campus Ambassador for GGSOC 2024 Extended Edition (September 2024)`,
  `- Secured 10th position in the national-level “Innovate and Inspire” competition. (September 2024)`,
  `- Participated in Myntra HackerRamp WeForShe 2024 Hackathon (August 2024)`,
  "",
  `${underline}EDUCATION${reset}`,
  `- ${bold}Lovely Professional University${reset}, Punjab, India (September 2022 - Present)`,
  `  Bachelor of Technology - Computer Science and Engineering; CGPA: 7.20`,
  `- ${bold}New Central Public Academy${reset} (April 2019 - March 2021)`,
  `  Percentage: 72.4`,
  `- ${bold}Gyan Kunj Academy${reset} (April 2017 - March 2019)`,
  `  Percentage: 81.6`
];

resumeLines.forEach(line => {
  console.log(line);
});

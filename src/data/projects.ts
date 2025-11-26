// src/data/projects.ts

export type ProjectCategory = "experience" | "project" | "hobby";

export type ProjectCard = {
  id: number;
  color: string;
  label: string;
  role: string;
  description: string;
  link: string;
  imgPath: string;      // small orbit image
  heroImgPath?: string; // big image for detail / work page
  tools: string[];
  category: ProjectCategory;
};

export const PROJECTS: ProjectCard[] = [
  // ========== EXPERIENCE ==========
  {
    id: 0,
    color: "hsl(220, 70%, 60%)",
    label: "VR Reaching Research (NYU Vision & Action Lab)",
    role: "Research Assistant",
    description:
      "Built VR tasks with penalty zones to study how people plan and control reaches under risk, running thousands of trials per participant.",
    link: "/projects/vr-research",
    imgPath: "assets/images/orbit/img1.svg",
    heroImgPath: "assets/images/orbit/img1.svg",
    tools: ["Unity", "C#", "HTC Vive"],
    category: "experience",
  },
  {
    id: 1,
    color: "hsl(250, 70%, 60%)",
    label: "MissPoppins Website Redesign",
    role: "UI/UX Designer",
    description:
      "Redesigned the marketing website for a parent–coach marketplace to clarify the value proposition and improve sign-up flows.",
    link: "/projects/misspoppins-web",
    imgPath: "assets/images/orbit/img2.svg",
    heroImgPath: "assets/images/orbit/img2.svg",
    tools: ["Figma", "UX Writing"],
    category: "experience",
  },
  {
    id: 2,
    color: "hsl(280, 70%, 60%)",
    label: "MissPoppins App Redesign",
    role: "UIUX Designer",
    description:
      "Reworked the parent-facing mobile app flows for booking, messaging, and tracking sessions to reduce confusion and support busy parents.",
    link: "/projects/misspoppins-app",
    imgPath: "assets/images/orbit/img3.svg",
    heroImgPath: "assets/images/orbit/img3.svg",
    tools: ["Figma", "Fig Jam"],
    category: "experience",
  },
  {
    id: 3,
    color: "hsl(310, 70%, 60%)",
    label: "MissPoppins Coach Desktop Dashboard",
    role: "UI/UX Designer",
    description:
      "Designed a new coach dashboard (Motherboard) to replace Tellescope, making client management, scheduling, and payments much clearer.",
    link: "/projects/misspoppins-coach",
    imgPath: "assets/images/orbit/img4.svg",
    heroImgPath: "assets/images/orbit/img4.svg",
    tools: ["Figma", "Information Architecture"],
    category: "experience",
  },

  // ========== PROJECTS ==========
  {
    id: 4,
    color: "hsl(190, 70%, 60%)",
    label: "Project Crescendo",
    role: "Organizer · Designer",
    description:
      "Co-ran music sessions for students with disabilities and designed lightweight logistics flows for guardians and volunteers.",
    link: "/projects/project-crescendo",
    imgPath: "assets/images/orbit/img5.svg",
    heroImgPath: "assets/images/orbit/img5.svg",
    tools: ["Notion", "Google Sheets"],
    category: "project",
  },
  {
    id: 5,

    color: "hsl(60, 70%, 60%)",
    label: "Iva Park",
    role: "Product Designer · Researcher",
    description:
      "",
    link: "/projects/band", //will have to fix later
    imgPath: "assets/images/orbit/img6.svg",
    heroImgPath: "assets/images/orbit/img6.svg",
    tools: [],
    category: "hobby",
  },
  {
    id: 6,
    color: "hsl(40, 70%, 60%)",
    label: "ASL Alphabet Detector",
    role: "Developer · UX",
    description:
      "Full-stack ASL alphabet recognizer with a CNN backend and a web UI for live webcam prediction and history.",
    link: "/projects/asl-alphabet",
    imgPath: "assets/images/orbit/img7.svg",
    heroImgPath: "assets/images/orbit/img7.svg",
    tools: ["TensorFlow", "Flask", "MongoDB"],
    category: "project",


  },
  {
    id: 7,
    color: "hsl(150, 70%, 60%)",
    label: "MBTI Ramen Quiz",
    role: "Product Designer · Frontend",
    description:
      "A playful web quiz that pairs each MBTI type with a Korean instant ramen, mixing personality questions with fun visual storytelling.",
    link: "/projects/mbti-ramen",
    imgPath: "assets/images/orbit/img8.svg",
    heroImgPath: "assets/images/orbit/img8.svg",
    tools: ["JavaScript", "Figma"],
    category: "project",
  },
  {
    id: 8,
    color: "hsl(330, 70%, 60%)",
    label: "Nerofilm – Virtual Photobooth",
    role: "UI/UX Designer",
    description:
      "Vintage photobooth-inspired landing page with textured visuals and film-style interactions.",
    link: "/projects/nerofilm",
    imgPath: "assets/images/orbit/img9.svg",
    heroImgPath: "assets/images/orbit/img9.svg",
    tools: ["HTML/CSS", "JavaScript"],
    category: "project",
  },
  {
    id: 9,
    color: "hsl(120, 70%, 60%)",
    label: "Detecting Objects using Bipartite Matching",
    role: "Computer Vision",
    description:
      "Implemented classical CV pipelines from scratch, including filtering, edge detection, and basic recognition.",
    link: "/projects/cv-hw1",
    imgPath: "assets/images/orbit/img10.svg",
    heroImgPath: "assets/images/orbit/img10.svg",
    tools: ["Python", "PyTorch"],
    category: "project",
  },
  {
    id: 10,
    color: "hsl(0, 70%, 60%)",
    label: "Electric Guitarist",
    role: "Computer Vision",
    description:
      "Extended the toolkit with feature extraction, matching, and deep learning experiments for image classification.",
    link: "/projects/cv-hw2",
    imgPath: "assets/images/orbit/img11.svg",
    heroImgPath: "assets/images/orbit/img11.svg",
    tools: ["Python", "PyTorch"],
    category: "hobby",
  },

  // ========== HOBBIES ==========
  {
    id: 11,
    color: "hsl(20, 70%, 60%)",
    label: "ASL Video Call (GestureTalk)",
    role: "Product Designer · Frontend",
    description:
      "Real-time video calling app that layers ASL gesture recognition and live captions on top of WebRTC meetings.",
    link: "/projects/asl-call",
    imgPath: "assets/images/orbit/img12.svg",
    heroImgPath: "assets/images/orbit/img12.svg",
    tools: ["React", "WebRTC", "Socket.io"],
    category: "project",
 
  },
];

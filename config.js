// config.js (Students edit only this file)
// Mini Project B (Oshawa GO railway visualization) – Group 02
window.SITE_CONFIG = {
  pageTitle: "Oshawa GO Station Digital Twin | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",
    courseTag: "SMRTTECH 4SC3",
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Haonan Ouyang",
    program: "BTech Automation Engineering Technology",
    university: "McMaster University, Canada",
    email: "ouyanh4@solutions.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This work was completed as an academic smart transportation project. The study results are provided only for educational purposes and do not represent an official analysis or position of any organization.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#12263f",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#1b6fc2"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#12263f",
    footerText: "#ffffff",
    footerBorder: "#1e3a5f",
    homeLinkText: "RoadwayVR",
    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",
    templateCreditLinkText: "Learn more at RoadwayVR.com",
    templateCreditUrl: "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle:
      "Oshawa GO Station Digital Twin: Railway Asset Development and Immersive 360° Visualization in Unity",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Flat preview of the Unity 360° video: station view, then the GO train arriving and passing the platform",
    videoCaption:
      "Flat preview cut from our 360° Unity video: station view → A01 locomotive arrives → A02 coaches pass the platform. Watch the full 30-second 360° video on YouTube: youtube.com/watch?v=8CXkN81lpho"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Railway visualization helps non-specialists understand a proposed station environment.",
      "Our study area is Oshawa GO Station, 915 Bloor Street West, Oshawa, Ontario.",
      "The supplied terrain and tracks show the corridor, but not the station, train and surroundings.",
      "We chose a passenger concept: a GO Transit locomotive and bi-level coach, as these serve Oshawa GO."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "Asset readiness: the terrain and rails need coordinated, contemporary 3D assets.",
      "Transfer: AI-generated models must be scaled, textured and exported cleanly for Unity.",
      "Spatial coherence: the station, train and surroundings must work together with believable movement.",
      "Communication: the proposal needs an immersive output and evidence of its quality and limits."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Prepare a coordinated collection of 13 contemporary assets (A01–A13) for Unity.",
      "Assemble the railway environment and move the A01 locomotive with a matching A02 coach.",
      "Check rendering and output quality and produce a verified 360° video.",
      "Present the project's methods and findings through a web showcase."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Asset Development (Meshy AI + Blender)",
        text: "Generate 13 assets from reference images, then scale, texture and export them as FBX.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 2: Environment Assembly (Unity)",
        text: "Place the assets at their planned locations on the supplied Oshawa terrain and tracks.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 3: Train Movement (Unity)",
        text: "Move the A01 locomotive and A02 coach together along the supplied track.",
        image: "assets/img/image4.jpg"
      },
      {
        title: "Step 4: 360° Output & Communication",
        text: "Record a 360° video, publish it on YouTube and summarize the work on this website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Asset Development (Meshy AI + Blender)",
        bullets: [
          { text: "Generate each asset in Meshy AI from a reference image; A01 is based on a GO Transit locomotive." },
          { text: "Reduce A01 from 192,754 to 10,117 faces so it runs lighter in a game engine." },
          { text: "Apply scale, alignment and materials in Blender, then export all 13 assets as FBX." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Environment Assembly (Unity)",
        bullets: [
          { text: "Import each FBX and its textures into its own A01–A13 folder in Unity." },
          { text: "Place the station, platform canopy, buildings, vegetation, lamps, benches and bins beside the track." },
          { text: "Use a clear-sky skybox and daylight so the station and platform stay legible." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Train Movement (Unity)",
        bullets: [
          { text: "Lead the train with the A01 GO locomotive (20.73 m), followed by A02 bi-level coaches (25.9 m)." },
          { text: "Animate the train along the supplied track beside the platform with the course path-mover workflow." },
          { text: "Check that the wheels stay on the rails, coaches keep their spacing and the platform stays clear." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: 360° Output & Communication",
        bullets: [
          { text: "Record a 30-second 360° video from a fixed camera at the platform edge." },
          { text: "Add 360° metadata and publish on YouTube so viewers can click and drag to look around." },
          { text: "Share methods, results and limitations on this showcase website." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",
    subtitle:
      "A01 locomotive mesh before and after reduction in Meshy AI (face and vertex counts shown in each panel). Results are for educational purposes only.",

    charts: {
      left: {
        title: "Before: original Meshy mesh – 192,754 faces, 116,171 vertices",
        src: "assets/img/image6.jpg",
        alt: "A01 GO locomotive original Meshy AI mesh with 192,754 faces"
      },
      right: {
        title: "After: reduced mesh – 10,117 faces, 21,393 vertices",
        src: "assets/img/image7.jpg",
        alt: "A01 GO locomotive reduced mesh with 10,117 faces"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "All 13 required assets (A01–A13) were generated, prepared in Blender and exported as FBX.",
      "Remeshing cut A01 from 192,754 to 10,117 faces (about 95% fewer), which lightens the load on the game engine.",
      "The reduced A01 keeps its shape, colours and GO branding; only the small lettering became slightly blurrier.",
      "In the 360° video the A01 locomotive arrives at about 11–12 s and the A02 coaches pass the platform from about 13 s to 24 s.",
      "The 30-second video plays as a spherical video on YouTube, so viewers can look around the station, platform and train.",
      "Limitations: approximate asset dimensions, a blurry low-resolution ground texture near the camera, and illustrative train movement, not validated railway operations."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Haonan Ouyang", role: "3D Asset Generation and Blender Modelling (A05–A10: vegetation, buildings, street furniture) + Report B Writing" },
      { name: "Nicolas Jao", role: "3D Asset Generation and Blender Modelling (A01–A04: locomotive, coach, station, platform) + 360° Video Production and Verification" },
      { name: "Jacob Kwan", role: "3D Asset Generation and Blender Modelling (A11–A13: lighting, fence, warning sign) + Report B Writing" }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3 Smart Cities and Communities, McMaster University",
      "Supplied resources: RailwayVR Unity project, Oshawa terrain and tracks (course materials)",
      "Tools: Meshy AI, Blender 5.2.2, Unity, Unity Recorder, YouTube",
      "A01 reference image: GO Transit locomotive render, ignitiondigital.com"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/NicolasJao/4SC3"
  }
};

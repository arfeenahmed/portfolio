const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

// ==========================
// Data
// ==========================

const experienceList = [
  {
    role: "WordPress Developer (Intern)",
    company: "Wenawa, Karachi",
    duration: "Jan 2026 – Apr 2026",
    description: [
      "Developed and customized WordPress websites",
      "Worked on themes, plugins, and website design",
      "Assisted in website maintenance and updates",
      "Gained hands-on experience in real-world projects",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "LuiTech, Karachi",
    duration: "May 2025 – Jul 2025",
    description: [
      "Built responsive web pages using HTML, CSS, and JavaScript",
      "Implemented modern UI designs using Bootstrap",
      "Improved website layout and user experience",
      "Worked on small frontend projects and tasks",
    ],
  },
];

const educationList = [
  {
    duration: "2025 - Present",
    degree: "HDSE (Higher Diploma in Software Engineering)",
    institute: "Aptech Pakistan",
  },
 
  {
    duration: "2024",
    degree: "Intermediate (Computer Science)",
    institute: "Govt. College",
  },
  {
    duration: "2022",
    degree: "Matriculation (A+ Grade)",
    institute: "Board of Secondary Education",
  },
];

const skillsList = [
  {
    name: "HTML5",
    icon: "fa-brands fa-html5"
  },
  {
    name: "CSS3",
    icon: "fa-brands fa-css3-alt"
  },
  {
    name: "JavaScript",
    icon: "fa-brands fa-js"
  },
  {
    name: "React.js",
    icon: "fa-brands fa-react"
  },
  {
    name: "Bootstrap",
    icon: "fa-brands fa-bootstrap"
  },
  {
    name: "WordPress",
    icon: "fa-brands fa-wordpress"
  },
  {
    name: "PHP",
    icon: "fa-brands fa-php"
  },
  {
    name: "MySQL",
    icon: "fa-solid fa-database"
  },
  {
    name: "Git & GitHub",
    icon: "fa-brands fa-github"
  },
  {
    name: "Tailwind CSS",
    icon: "fa-solid fa-wind"
  }
];

const aboutMe = [
  { label: "Name", value: "Arfeen Ahmed" },
  { label: "Role", value: "Frontend Developer" },
  { label: "Experience", value: "WordPress & Frontend Intern" },
  { label: "Nationality", value: "Pakistani" },
  { label: "Languages", value: "English, Urdu" },
  { label: "Freelance", value: "Available" },
  { label: "Email", value: "arfeenahmed441@gmail.com" },
];

// ==========================
// Default Tab
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs.length > 0) {
    aboutTabs[0].click();
  }
});

// ==========================
// Tabs
// ==========================

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    const activeTab = tab.dataset.section;
    document.getElementById(activeTab).classList.add("active");

    // ==========================
    // Experience
    // ==========================

    if (activeTab === "experience") {

      const container = document.querySelector("#experience .experience-list");

      container.innerHTML = experienceList
        .map(
          (item) => `
        <div class="experience-box">

            <h4>${item.duration}</h4>

            <h3>${item.role}</h3>

            <div class="company-name">
                <span></span>
                <p>${item.company}</p>
            </div>

            <ul>
                ${item.description
                  .map((desc) => `<li>${desc}</li>`)
                  .join("")}
            </ul>

        </div>
      `
        )
        .join("");
    }

    // ==========================
    // Education
    // ==========================

    if (activeTab === "education") {

      const container = document.querySelector("#education .experience-list");

      container.innerHTML = educationList
        .map(
          (item) => `
        <div class="experience-box">

            <h4>${item.duration}</h4>

            <h3>${item.degree}</h3>

            <div class="company-name">
                <span></span>
                <p>${item.institute}</p>
            </div>

        </div>
      `
        )
        .join("");
    }

    // ==========================
    // Skills
    // ==========================

   if (activeTab === "skill") {

  const container = document.querySelector("#skill .experience-list");

  container.innerHTML = skillsList
    .map(
      (skill) => `
      <div class="experience-box skill-box">

          <i class="${skill.icon}"></i>

          <h3>${skill.name}</h3>

      </div>
      `
    )
    .join("");
}

    // ==========================
    // About Me
    // ==========================

    if (activeTab === "aboutme") {

      const container = document.querySelector("#aboutme .experience-list");

      container.innerHTML = aboutMe
        .map(
          (item) => `
        <div class="experience-box">
            <h3>${item.label}</h3>
            <p>${item.value}</p>
        </div>
      `
        )
        .join("");
    }

  });
});
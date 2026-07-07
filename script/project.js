const projectsList = [
{
  title: "Personal Portfolio Website",
  image: "assets/portfolio.png",
  description:
    "A modern, fully responsive personal portfolio website showcasing my skills, experience, services, and projects. Built using HTML, CSS, and JavaScript with smooth animations, dynamic content rendering, and a contact form integrated with Formspree.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "Formspree"
  ],
  github: "https://github.com/arfeenahmed/portfolio",
  demo: "https://arfeenahmedportfolio.netlify.app/"
},
  {
    title: "Arsh Foundation Website",
    image: "assets/arsh.png",
    description:
      "Contributed to the official Arsh Foundation website during my WordPress internship. Customized pages, implemented design updates, managed plugins, and assisted with website maintenance under senior developer guidance.",
    technologies: [
      "WordPress",
      "Elementor",
      "CSS",
      "Plugins"
    ],
    github: null,
    demo: "https://arshfoundation.org/"
  },
  {
    title: "Online SMS System",
    image: "assets/onlinesms.png",
    description:
"Online SMS System is a web application developed using ASP.NET Core MVC and SQL Server. The project includes user authentication, profile management, contact management, SMS messaging, friend requests, and premium subscription features. It was developed as a learning project with AI-assisted guidance while implementing the core functionality, database integration, and responsive user interface.",
    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      "Bootstrap"
    ],
    github: "https://github.com/arfeenahmed/online_sms",
    demo: "https://onlinesms.somee.com/"
  },

   {
  title: "CARE Group - Healthcare Management System",
  image: "assets/caregroup.png",
description:
"Healthcare management system built using PHP & MySQL with doctor search, appointment booking, patient, doctor and admin dashboards, health information, and medical news.",
  technologies: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap"
  ],
  github: "https://github.com/arfeenahmed/caregroup",
  demo: "https://caregroup.infinityfreeapp.com/"
},
  {
    title: "Sneaker E-Commerce Website",
    image: "assets/sneaker.png",
    description:
      "A modern responsive e-commerce website featuring product listings, shopping cart, category filtering, and an engaging user interface built with vanilla JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    github: "https://github.com/arfeenahmed/eCommerce-sneaker",
    demo: "https://arfeenahmed.github.io/eCommerce-sneaker/"
  },



  {
    title: "Super Weather Check",
    image: "assets/weather.png",
    description:
      "A React.js weather application that uses the OpenWeather API to display real-time weather information including temperature, humidity, wind speed, and weather conditions.",
    technologies: [
      "React.js",
      "Axios",
      "REST API",
      "JavaScript",
      "CSS"
    ],
    github: "https://github.com/arfeenahmed/weather-react-app",
    demo: "https://superweathercheck.netlify.app/"
  },



  {
    title: "E-Project Website",
    image: "assets/eproject.png",
    description:
      "My first complete frontend web project featuring responsive layouts, multiple pages, navigation, and interactive components built with HTML, CSS, and JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    github: "https://github.com/arfeenahmed/eproject",
    demo: "https://arfeenahmed.github.io/eproject/"
  },

  {
    title: "JavaScript Calculator",
    image: "assets/calculator.png",
    description:
      "A responsive calculator application built using JavaScript DOM manipulation that performs basic arithmetic operations with a clean and modern user interface.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    github: "https://github.com/arfeenahmed/Calculator",
    demo: "https://arfeenahmed.github.io/Calculator/"
  }

];

const projectsContainer = document.querySelector(".projects-list");


const projectContent = projectsList.map((project)=>{

return `

<div class="project-card">

    <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
    </div>


    <div class="project-info">

        <h3>${project.title}</h3>

        <p>
            ${project.description}
        </p>


        <div class="tech-stack">

            ${project.technologies
              .map(tech=>`
                <span>${tech}</span>
              `)
              .join("")}

        </div>


        <div class="project-btn">

${project.github ? `
<a href="${project.github}" target="_blank">
<i class="fa-brands fa-github"></i>
Github
</a>
` : ""}

<a href="${project.demo}" target="_blank">
<i class="fa-solid fa-arrow-up-right-from-square"></i>
Live Demo
</a>

</div>


    </div>

</div>

`;

}).join("");


projectsContainer.innerHTML = projectContent;
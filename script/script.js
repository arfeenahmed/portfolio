const toggle = document.getElementById("menu-toggle");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}

const words = [
  "Frontend Developer",
  "React Developer",
  "WordPress Developer",
  //   "Future Full Stack Developer",
  "Web Developer",
  "Open to Freelance",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currenWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currenWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currenWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currenWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Active nav link
    navlinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    // Show active tab
    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
      toggle.checked =false;
    });

    if (tabName === "services") {
 const serviceList = [
  {
    id: 1,
    icon: "fa-solid fa-code",
    text: "Frontend Development",
    para: "I build responsive, modern, and user-friendly websites using HTML5, CSS3, JavaScript, and React.js with clean, maintainable code and optimized performance."
  },

  {
    id: 2,
    icon: "fa-brands fa-react",
    text: "React.js Development",
    para: "I develop interactive single-page applications using React.js, reusable components, hooks, API integration, and responsive UI design."
  },

  {
    id: 3,
    icon: "fa-brands fa-wordpress",
    text: "WordPress Development",
    para: "I customize WordPress websites using Elementor, themes, plugins, responsive layouts, and provide website maintenance based on project requirements."
  },

  {
    id: 4,
    icon: "fa-solid fa-database",
    text: "Backend Development",
    para: "I develop dynamic web applications using PHP, MySQL, and ASP.NET Core MVC with secure authentication, database integration, and CRUD functionality."
  },

  {
    id: 5,
    icon: "fa-solid fa-mobile-screen-button",
    text: "Responsive Web Design",
    para: "I create mobile-first responsive websites that deliver a seamless experience across desktop, tablet, and mobile devices."
  },

  {
    id: 6,
    icon: "fa-solid fa-cloud-arrow-up",
    text: "Website Deployment",
    para: "I deploy websites on GitHub Pages, Netlify, InfinityFree, and Somee while configuring domains, hosting, and project publishing."
  },

  {
    id: 7,
    icon: "fa-solid fa-bug",
    text: "Bug Fixing & Maintenance",
    para: "I identify and fix website bugs, improve performance, update features, and maintain existing websites for better stability."
  },

  {
    id: 8,
    icon: "fa-solid fa-code-branch",
    text: "Version Control",
    para: "I use Git and GitHub for source code management, version control, collaboration, and project deployment."
  }
];
      const services = document.getElementsByClassName("services-list");
      const innerContext = serviceList.map((l) => {
        return `
           <div class="box" key=${l?.id}>
             <div class="head-icon">
              <i class="fa-solid ${l.icon}"></i>
              <span><i class="fa-solid fa-arrow-down"></i></span>
             </div>
            <h3>${l.text}</h3>
            <span class="spacer"></span>
            <p>
              ${l.para}
            </p>
          </div>
            `;
      }).join("");
      console.log(services);
      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContext;
      });
    }
  });
});

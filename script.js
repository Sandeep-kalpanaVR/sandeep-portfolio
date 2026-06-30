const projects = [
  {
    title: "Gym Website",
    category: "business",
    icon: "🏋️",
    description:
      "A modern gym website with membership plans, trainers, gallery, BMI calculator, contact section, and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Business"],
    liveLink: "https://sandeep-kalpanavr.github.io/GYM-demo/",
    codeLink: "https://github.com/Sandeep-kalpanaVR/GYM-demo"
  },
  {
    title: "Futuristic Website",
    category: "creative",
    icon: "🚀",
    description:
      "A cool futuristic website with neon design, particles, animations, hover effects, and modern UI.",
    tags: ["Creative", "Neon", "JavaScript"],
    liveLink: "https://sandeep-kalpanavr.github.io/Future/",
    codeLink: "https://github.com/Sandeep-kalpanaVR/Future"
  },
  {
    title: "Bala Akka Birthday Website",
    category: "personal",
    icon: "🎂",
    description:
      "An interactive birthday website with wishes, photos, music, cake, gift popup, and confetti effects.",
    tags: ["Birthday", "Photos", "Interactive"],
    liveLink: "https://sandeep-kalpanavr.github.io/Happy-Birthday-Bala-Akka/",
    codeLink: "https://github.com/Sandeep-kalpanaVR/Happy-Birthday-Bala-Akka"
  }
];

const projectGrid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyMessage = document.getElementById("copyMessage");

function displayProjects(filter = "all") {
  projectGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-image">${project.icon}</div>

      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>

        <div class="project-links">
          <a href="${project.liveLink}" target="_blank" class="small-link">
            Live Website
          </a>

          <a href="${project.codeLink}" target="_blank" class="small-link">
            Source Code
          </a>
        </div>
      </div>
    `;

    projectGrid.appendChild(card);
  });
}

displayProjects();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    displayProjects(filter);
  });
});

copyEmailBtn.addEventListener("click", () => {
  const email = "sandeepsricharan10292@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    copyMessage.textContent = "Email copied: " + email;
  });
});

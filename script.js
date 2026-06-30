const projects = [
  {
    title: "Gym Website",
    category: "business",
    icon: "🏋️",
    description: "A modern gym website with plans, trainers, gallery, BMI calculator, and contact section.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://your-gym-website-link.com",
    codeLink: "#"
  },
  {
    title: "Bala Akka Birthday Website",
    category: "personal",
    icon: "🎂",
    description: "An interactive birthday website with wishes, photos, music, cake, and confetti effects.",
    tags: ["Birthday", "Gallery", "Interactive"],
    liveLink: "https://your-birthday-website-link.com",
    codeLink: "#"
  },
  {
    title: "Futuristic Website",
    category: "creative",
    icon: "🚀",
    description: "A cyber futuristic website with neon UI, particles, animations, and modern design.",
    tags: ["Creative", "Neon", "JavaScript"],
    liveLink: "https://your-futuristic-website-link.com",
    codeLink: "#"
  },
  {
    title: "Phone Store Website",
    category: "business",
    icon: "📱",
    description: "A clean phone store website with product listing cards, contact page, and responsive layout.",
    tags: ["HTML", "CSS", "Business"],
    liveLink: "https://your-phone-store-link.com",
    codeLink: "#"
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
          <a href="${project.liveLink}" target="_blank" class="small-link">Live Website</a>
          <a href="${project.codeLink}" target="_blank" class="small-link">Source Code</a>
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
  const email = "your-email@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    copyMessage.textContent = "Email copied: " + email;
  });
});

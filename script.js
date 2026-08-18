const projects = [
  {
    title: "Rasterization Engine",
    description: "Created a rasterization engine which can load, render, and animate obj files.",
    tags: ["C#", ".NET", "Graphics", "raylib"],
    github: "https://github.com/ZSchuler/rasterization-engine"
  },
  {
    title: "Land Grab (Multiplayer Game)",
    description: "Collaborated in a team of 4 to build a real-time competitive game using custom socket programming.",
    tags: ["Python", "Pygame", "Socket Programming", "Git"],
    github: "https://github.com/Hooopla/Land-Grab"
  },
  {
    title: "Virtual Closet Web App",
    description: "Collaborated in an Agile team to build a React-based virtual wardrobe that simplifies wardrobe organization.",
    tags: ["React", "Chatbot", "AI"],
    website: "https://project-01-sky.vercel.app/"
  },
];

const container = document.getElementById('projectContainer');

projects.forEach(project => {
  const item = document.createElement('div');
  item.className = 'project';

  const title = document.createElement('h3');
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description;

  const tags = document.createElement('div');
  tags.className = 'tags';
  tags.textContent = project.tags.join(' · ');

  const links = document.createElement('div');
  links.className = 'project-links';

  if (project.website) {
    const siteLink = document.createElement('a');
    siteLink.href = project.website;
    siteLink.target = '_blank';
    siteLink.rel = 'noopener';
    siteLink.textContent = 'View Site';
    links.appendChild(siteLink);
  }

  if (project.github) {
    const githubLink = document.createElement('a');
    githubLink.href = project.github;
    githubLink.target = '_blank';
    githubLink.rel = 'noopener';
    githubLink.textContent = 'View on GitHub';
    links.appendChild(githubLink);
  }

  item.appendChild(title);
  item.appendChild(desc);
  item.appendChild(tags);
  item.appendChild(links);
  container.appendChild(item);
});
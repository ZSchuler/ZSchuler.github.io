const projects = [
    {
    title: "Rasterization Engine",
    description: "Created a rasterization engine which can load, render, and animate obj files. GitHub repo coming soon!",
    image: "imgs/suzanne.gif",
    tags: ["C#", "Graphics", "raylib"],
    },
    {
    title: "Land Grab (Multiplayer Game)",
    description: "Collaborated in a team of 4 to build a real-time competitive game using custom socket programming.",
    image: "imgs/landgrab.gif",
    tags: ["Python", "Pygame", "Socket Programming", "Git"],
    github: "https://github.com/Hooopla/Land-Grab"
  },
  {
    title: "Virtual Closet Web App",
    description: "Developed a React web app with a fashion chatbot assistant that recommends outfits based on weather and clothing data.",
    image: "imgs/fitcheck.png",
    tags: ["React", "Chatbot", "AI"],
    website: "https://project-01-sky.vercel.app/"
  },
];

const container = document.getElementById('projectContainer');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;

  const title = document.createElement('h3');
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.textContent = project.description;

  const tagList = document.createElement('div');
  tagList.className = 'tags';

  project.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tag';
    tagEl.textContent = tag;
    tagList.appendChild(tagEl);
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(tagList);

  // if website exists
  if (project.website) {
    const siteBtn = document.createElement('a');
    siteBtn.className = 'website-btn';
    siteBtn.href = project.website;
    siteBtn.target = '_blank';
    siteBtn.textContent = 'View Site';
    card.appendChild(siteBtn);
  }

  // if github exists
  if (project.github) {
    const githubBtn = document.createElement('a');
    githubBtn.className = 'github-btn';
    githubBtn.href = project.github;
    githubBtn.target = '_blank';
    githubBtn.textContent = 'View on GitHub';
    card.appendChild(githubBtn);
  }

  container.appendChild(card);
});
// Add a new project by copying one object below. The portfolio will render it automatically.
const projects = [
  { title: 'Sunlit Hotpot Bangkok', type: 'Restaurant platform', role: 'Full-stack developer', description: 'A premium restaurant platform that unites the customer journey, reservations, content, and operations in one refined experience.', stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Gmail API'], url: 'https://www.sunlit-hotpot-bkk.com/', image: 'assets/sunlit-hotpot.png', accent: 'sunlit' },
  { title: 'Notivo AI Note Taker', type: 'AI meeting workspace', role: 'Product engineer', description: 'Live meeting intelligence that turns conversations into structured transcripts, decisions, risks, and follow-up actions.', stack: ['Vite', 'Supabase', 'Edge Functions', 'AI'], url: 'https://www.notivoaii.help/', image: 'assets/notivo-preview.png', accent: 'notivo' },
  { title: 'Employee Accommodation System', type: 'Enterprise operations platform', role: 'Full-stack developer', description: 'A role-based workspace for employee housing, maintenance, approvals, reporting, and audit activity.', stack: ['Next.js', 'Prisma', 'Neon PostgreSQL', 'RBAC'], url: 'https://employee-accommodation-system.vercel.app/login', image: 'assets/accommodation-preview.png', accent: 'housing' },
  { title: 'Data Automation Workflows', type: 'Internal systems', role: 'Data developer', description: 'Reliable scripts and scheduled workflows for extraction, validation, auditing, and data tracking.', stack: ['Python', 'SQL', 'MySQL', 'Automation'], accent: 'data' }
];

const visual = (project) => project.image
  ? `<img src="${project.image}" alt="${project.title} project preview">`
  : `<div class="project-symbol ${project.accent}"><span>${project.type.split(' ')[0]}</span><b>${project.title.split(' ').slice(0, 2).join('<br>')}</b></div>`;

const projectUrl = (project) => project.url
  ? `<a class="project-open" href="${project.url}" target="_blank" rel="noreferrer">Open project <span>↗</span></a>`
  : `<span class="project-open muted">Private project</span>`;

document.querySelector('#project-library').innerHTML = projects.map((project, index) => `
  <article class="library-card ${project.accent}">
    <div class="project-visual">${project.url ? `<a href="${project.url}" target="_blank" rel="noreferrer" aria-label="Open ${project.title}">${visual(project)}</a>` : visual(project)}</div>
    <div class="project-content">
      <div class="project-index">${String(index + 1).padStart(2, '0')} <span>${project.type}</span></div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-bottom"><div class="project-stack">${project.stack.map(item => `<span>${item}</span>`).join('')}</div>${projectUrl(project)}</div>
    </div>
  </article>`).join('');

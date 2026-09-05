// Add an entry to this list to extend the portfolio.
const projects = [
  {
    "title": "Sunlit Hotpot Bangkok",
    "category": "Full-stack · Client project",
    "role": "Full-stack developer",
    "description": "A restaurant website and management platform that connects guest reservations with day-to-day operations.",
    "image": "assets/sunlit-hotpot.png",
    "stack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Gmail API"
    ],
    "details": [
      "Built the responsive restaurant website, online reservations, and automated confirmation emails.",
      "Created a content management system, reservation dashboard, and SEO-focused blog.",
      "Implemented administrator authentication with two-factor verification."
    ],
    "links": [
      {
        "label": "Live website",
        "url": "https://www.sunlit-hotpot-bkk.com/"
      }
    ],
    "featured": true
  },
  {
    "title": "Notivo AI Note Taker",
    "category": "AI · Personal project",
    "role": "Application developer",
    "description": "A live meeting workspace that turns conversations into searchable notes, decisions, risks, and follow-up actions.",
    "image": "assets/notivo-preview.png",
    "stack": [
      "JavaScript",
      "Vite",
      "Supabase",
      "Edge Functions"
    ],
    "details": [
      "Built a Chrome capture workflow with live transcription and speaker-separated notes.",
      "Organized summaries, decisions, owners, deadlines, and action items into searchable collections.",
      "Added PDF, DOCX, and Markdown exports. The live workflow processes a temporary audio buffer without retaining original recordings in the workspace."
    ],
    "links": [
      {
        "label": "Live app",
        "url": "https://www.notivoaii.help/"
      }
    ],
    "featured": true
  },
  {
    "title": "Employee Accommodation System",
    "category": "Full-stack · Personal project",
    "role": "Full-stack developer",
    "description": "An operations platform for employee housing, from room applications and assignments to maintenance and reporting.",
    "image": "assets/accommodation-preview.png",
    "stack": [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL"
    ],
    "details": [
      "Implemented Admin, HR, Manager, and Employee roles with employee self-service.",
      "Built building and room tracking, check-in/out, contract reminders, and maintenance workflows.",
      "Added notifications, audit logs, occupancy analytics, CSV reports, multilingual UI, and light/dark modes.",
      "Used React Query, Zustand, React Hook Form, Zod, and Recharts; deployed with Vercel and Neon PostgreSQL."
    ],
    "links": [
      {
        "label": "Live app",
        "url": "https://employee-accommodation-system.vercel.app/login"
      }
    ],
    "featured": true
  },
  {
    "title": "Enterprise AI Knowledge Assistant",
    "category": "AI · Knowledge systems",
    "role": "Software development",
    "description": "A RAG application for answering questions using company knowledge, with separate front-end and retrieval services.",
    "image": "assets/legacy-Ai_Rag.jpg",
    "stack": [
      "Next.js",
      "Typescript",
      "Python",
      "LangChain",
      "FAISS",
      "FastAPI"
    ],
    "details": [
      "A RAG application for answering questions using company knowledge, with separate front-end and retrieval services.",
      "Front end: Next.js and TypeScript. Back end: Python, LangChain, FAISS, and FastAPI."
    ],
    "links": [
      {
        "label": "Live demo",
        "url": "https://rag-ai-frontend-two.vercel.app/"
      },
      {
        "label": "Front-end code",
        "url": "https://github.com/JunHaoyell/rag-ai-frontend"
      },
      {
        "label": "Back-end code",
        "url": "https://github.com/JunHaoyell/Rag_ai_backend"
      }
    ]
  },
  {
    "title": "Data Extraction & Automation",
    "category": "Data · Professional work",
    "role": "Data developer",
    "description": "Python and MySQL workflows that retrieve requested data, prepare it for analysis, and deliver processed results to stakeholders.",
    "image": "assets/legacy-jump_server.jpg",
    "stack": [
      "Python",
      "Mysql"
    ],
    "details": [
      "Python and MySQL workflows that retrieve requested data, prepare it for analysis, and deliver processed results to stakeholders."
    ],
    "links": []
  },
  {
    "title": "Sinisana Website Redesign",
    "category": "Design · UI/UX",
    "role": "UI/UX design",
    "description": "A Figma redesign focused on making Sinisana’s services and products easier to discover.",
    "image": "assets/legacy-sinisana-design.jpg",
    "stack": [
      "Figma"
    ],
    "details": [
      "A Figma redesign focused on making Sinisana’s services and products easier to discover."
    ],
    "links": [
      {
        "label": "Figma design",
        "url": "https://www.figma.com/design/HCHwXkPiA5k3KAlsTbKUzl/SINISANA?node-id=0-1&t=PhvWooNRJ36OP1VY-1"
      }
    ]
  },
  {
    "title": "Sinisana Website",
    "category": "Development · Professional work",
    "role": "Front-end development",
    "description": "A responsive Astro website presenting Sinisana’s supply-chain transparency and food-safety services.",
    "image": "assets/legacy-sinisana-project.jpeg",
    "stack": [
      "Astro"
    ],
    "details": [
      "A responsive Astro website presenting Sinisana’s supply-chain transparency and food-safety services."
    ],
    "links": [
      {
        "label": "Live demo",
        "url": "https://sinisana-cpc6.vercel.app/"
      },
      {
        "label": "Source code",
        "url": "https://github.com/JunHaoyell/Sinisana"
      }
    ]
  },
  {
    "title": "MyKad Verification Flow",
    "category": "Design · UI/UX",
    "role": "UI/UX design",
    "description": "An identity-verification design covering MyKad uploads, image-quality feedback, and face scanning.",
    "image": "assets/legacy-KYC-process.jpg",
    "stack": [
      "Figma"
    ],
    "details": [
      "An identity-verification design covering MyKad uploads, image-quality feedback, and face scanning."
    ],
    "links": [
      {
        "label": "Figma design",
        "url": "https://www.figma.com/design/e1iCVATT3iHIRZJoqu9IfL/KYC---MyKad?node-id=0-1&t=saRpZdJdKjIUR4M5-1"
      }
    ]
  },
  {
    "title": "Loan Application UX",
    "category": "Design · UI/UX",
    "role": "UI/UX design",
    "description": "A loan-application interface designed to make the process easier to use, including for older users.",
    "image": "assets/legacy-Loan-web.jpg",
    "stack": [
      "Figma"
    ],
    "details": [
      "A loan-application interface designed to make the process easier to use, including for older users."
    ],
    "links": [
      {
        "label": "Figma design",
        "url": "https://www.figma.com/design/BLyhE5NQYYt8rFMnjJKFCe/Loan-Web?node-id=9-3&t=JKdRTIecGdTR39BA-1"
      }
    ]
  },
  {
    "title": "ID Card Auto-detection",
    "category": "Development · Professional work",
    "role": "Mobile development",
    "description": "A React Native application using a document-scanning plugin to automatically detect and crop ID cards.",
    "image": "assets/legacy-document-scanner.jpg",
    "stack": [
      "React Native",
      "Document-Scanner-Plugin"
    ],
    "details": [
      "A React Native application using a document-scanning plugin to automatically detect and crop ID cards."
    ],
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/JunHaoyell/document-scanner?tab=readme-ov-file"
      }
    ]
  },
  {
    "title": "SARAF Analytics Dashboard",
    "category": "Design · UI/UX",
    "role": "UI/UX design",
    "description": "An agricultural analytics interface presenting production data through charts, graphs, and tables.",
    "image": "assets/legacy-analysis-website.jpg",
    "stack": [
      "Figma"
    ],
    "details": [
      "An agricultural analytics interface presenting production data through charts, graphs, and tables."
    ],
    "links": [
      {
        "label": "Figma design",
        "url": "https://www.figma.com/design/3fP8dHNzmXmmto6DYOydqV/SARAF-Web?node-id=15-3&t=rCbgWNSVycFuCcbH-1"
      }
    ]
  },
  {
    "title": "SARAF Mobile App",
    "category": "Design · UI/UX",
    "role": "UI/UX design",
    "description": "Mobile interface designs for agricultural production management, including login and registration.",
    "image": "assets/legacy-mobile-app.jpg",
    "stack": [
      "Figma"
    ],
    "details": [
      "Mobile interface designs for agricultural production management, including login and registration."
    ],
    "links": [
      {
        "label": "Figma design",
        "url": "https://www.figma.com/design/zO8BxUg9GD8d9lCcYTDdTb/SARAF-APP?node-id=0-1&t=aPxt7m5UaXXWuoEl-1"
      }
    ]
  },
  {
    "title": "Meals on Wheels",
    "category": "Full-stack · Earlier project",
    "role": "Software development",
    "description": "A meal-delivery platform for MerryMeal, supporting its mission to serve adults who face difficulty preparing their own meals.",
    "image": "assets/legacy-meal-on-wheel.png",
    "stack": [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Spring Boot",
      "REST APIs"
    ],
    "details": [
      "A meal-delivery platform for MerryMeal, supporting its mission to serve adults who face difficulty preparing their own meals.",
      "Built the React front end and a separate Java / Spring Boot service exposing RESTful APIs."
    ],
    "links": [
      {
        "label": "Live demo",
        "url": "https://meals-on-wheel-project.vercel.app/"
      },
      {
        "label": "Front-end code",
        "url": "https://github.com/JunHaoyell/meals-on-wheel-project"
      },
      {
        "label": "Back-end code",
        "url": "https://github.com/JunHaoyell/Meal-On-Wheel-Backend-"
      }
    ]
  },
  {
    "title": "Car Sale Portal",
    "category": "Full-stack · Earlier project",
    "role": "Software development",
    "description": "A used-car portal for publishing listings and bidding on vehicle prices.",
    "image": "assets/legacy-car-sale-portal.png",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Spring Boot",
      "Java"
    ],
    "details": [
      "A used-car portal for publishing listings and bidding on vehicle prices."
    ],
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/JunHaoyell/Car-Sale-Portal"
      },
      {
        "label": "Project post",
        "url": "https://www.linkedin.com/posts/thu-yell-min-1298a0232_lithan-educlaas-singapore-activity-7151836386747105282-vys3?utm_source=share&utm_medium=member_ios"
      }
    ]
  },
  {
    "title": "Know Your Neighbourhood",
    "category": "Full-stack · Earlier project",
    "role": "Software development",
    "description": "A neighbourhood application with Gmail and Facebook sign-in flows.",
    "image": "assets/legacy-kyn-app.png",
    "stack": [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "RESTful API",
      "Spring Boot",
      "Java"
    ],
    "details": [
      "A neighbourhood application with Gmail and Facebook sign-in flows."
    ],
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/JunHaoyell/know-your-neighbourhook"
      },
      {
        "label": "Project post",
        "url": "https://www.linkedin.com/posts/thu-yell-min-1298a0232_lithan-educlaas-singapore-activity-7151843149168955392-l1Sz?utm_source=share&utm_medium=member_ios"
      }
    ]
  },
  {
    "title": "Enomy Finance",
    "category": "Full-stack · Earlier project",
    "role": "Software development",
    "description": "A full-stack finance application built with Spring MVC and a web front end.",
    "image": "assets/legacy-enomy-finance.png",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Spring MVC"
    ],
    "details": [
      "A full-stack finance application built with Spring MVC and a web front end.",
      "The original portfolio lists HTML, CSS, JavaScript, and Spring MVC. Source code is available for review."
    ],
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/JunHaoyell/Spring-MVC-ENomy-finance"
      }
    ]
  }
];

function renderProjects() {
  document.querySelector('#featured-projects').replaceChildren();
  document.querySelector('#more-projects').replaceChildren();
  const archiveCount = projects.filter(p => !p.featured).length;
  document.querySelector('[data-project-count]').textContent = `${archiveCount} ${archiveCount === 1 ? 'project' : 'projects'}`;
  const el = (tag, cls, text) => { const n = document.createElement(tag); n.className = cls; if (text) n.textContent = text; return n; };
  for (const p of projects) {
    const card = el('article', 'project-card');
    const preview = el('div','project-preview');
    const img = el('img',''); img.src = p.image; img.alt = p.title + ' — project screenshot'; img.loading = 'lazy'; img.decoding = 'async'; preview.append(img); card.append(preview);
    const body=el('div','project-body'); body.append(el('p','eyebrow',p.category),el('h3','',p.title),el('p','project-summary',p.description));
    const tags=el('ul','tags'); for(const t of p.stack) tags.append(el('li','',t)); body.append(tags);
    const details=el('details','project-details');details.append(el('summary','','My contribution & details'));
    details.append(el('p','role','Role: '+p.role));const list=el('ul','contributions');for(const t of p.details)list.append(el('li','',t));details.append(list);body.append(details);
    const actions=el('div','project-actions');for(const link of p.links){const a=el('a','text-link',link.label+' ↗'); a.href=link.url;a.target='_blank';a.rel='noopener noreferrer';actions.append(a);}
    if(!p.links.length)actions.append(el('span','private-note','Internal work · no public repository'));body.append(actions);card.append(body);
    document.querySelector(p.featured?'#featured-projects':'#more-projects').append(card);
  }
}
renderProjects();
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu(){ menu.setAttribute('aria-expanded','false'); navigation.classList.remove('is-open'); }
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('is-open',open);});
navigation.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const open=menu.getAttribute('aria-expanded')==='true';closeMenu();if(open)menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});

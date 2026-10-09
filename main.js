/* ===================================================================
   PAULINE LU — interactions
   =================================================================== */
document.body.classList.add('js');

/* ---------- DATA ---------- */
const projectData = {
  python:{name:'Python',projects:[
    {title:'Agentic AI Workflow (Patent Pending)',description:'Built a multi-agent AI pipeline at Bank of America that synthesizes Jira tickets, documentation, and source code into a centralized knowledge base, generating system-accurate user stories and cutting creation time by 60%+.'},
    {title:'IT Systems Automation',description:'Streamlined data management for 100+ schools by automating critical daily processes using Python and SQL to automate data transfers between Oracle and OnBase at National Heritage Academies.'},
    {title:'Cybersecurity & Cryptography',description:'Completed a comprehensive course series in Cybersecurity and Cryptography using Python as part of the Girls Who Code Self-Paced Program.'},
    {title:'Data Science For Good',description:'Utilized Python in data science projects focused on social impact, covering data analysis, visualization, and modeling with Girls Who Code.'}]},
  sql:{name:'SQL',projects:[
    {title:'Executive Financial Dashboard',description:'Connected a production dashboard at Bank of America to an Oracle database aggregating 3 data sources via REST APIs to track $5M+ in funding.'},
    {title:'Enterprise Database Management',description:'Utilized SQL to perform database management and streamline data processes with Oracle and OnBase systems during an IT & ERP Systems internship at National Heritage Academies.'}]},
  javascript:{name:'JavaScript',projects:[
    {title:'Executive Financial Dashboard',description:'Built and deployed the front end of an executive project planning dashboard at Bank of America in HTML, CSS, and JavaScript through the full Agile SDLC.'},
    {title:'Interactive Web Development',description:'Learned and implemented web development with HTML, CSS, and JavaScript in the Girls Who Code Summer Immersion Program.'},
    {title:'Web Project Portfolio',description:'Designed and coded a personal website, a digital interactive quiz, and an advocacy website using modern web technologies.'}]},
  html_css:{name:'HTML/CSS',projects:[
    {title:'Executive Financial Dashboard',description:'Designed and built the front end of a production executive dashboard at Bank of America tracking $5M+ in funding for senior stakeholders.'},
    {title:'User-Friendly OnBase Forms',description:'Converted and created 5+ user-friendly HTML forms for the OnBase enterprise information platform at National Heritage Academies.'},
    {title:'Web Development Foundations',description:'Built multiple websites and web applications, focusing on structure (HTML) and styling (CSS) with Girls Who Code.'}]},
  matlab:{name:'MATLAB',projects:[
    {title:'The Science Behind Sunsets',description:'Received the Outstanding Junior Project Award for a project that studied and simulated the effects of atmospheric particles on the colorization of sunsets. Coded a MATLAB simulator with a location-based sun-position graph.'}]},
  java:{name:'Java',projects:[
    {title:'Programming Languages Coursework',description:'Completed 12 labs and 11 projects in Java, Ruby, Ada, and Clojure for the CS214: Programming Languages course, focusing on different programming paradigms.'}]},
  ruby:{name:'Ruby',projects:[
    {title:'Programming Languages Coursework',description:'Completed 12 labs and 11 projects in Java, Ruby, Ada, and Clojure for the CS214: Programming Languages course, focusing on different programming paradigms.'}]},
  ada:{name:'Ada',projects:[
    {title:'Programming Languages Coursework',description:'Completed 12 labs and 11 projects in Java, Ruby, Ada, and Clojure for the CS214: Programming Languages course, focusing on different programming paradigms.'}]},
  clojure:{name:'Clojure',projects:[
    {title:'Programming Languages Coursework',description:'Completed 12 labs and 11 projects in Java, Ruby, Ada, and Clojure for the CS214: Programming Languages course, focusing on different programming paradigms.'}]},
  cplusplus:{name:'C++',projects:[
    {title:'University Coursework',description:'Developed foundational and advanced programming skills through various C++ projects and assignments in university computer science courses.'}]},
  csharp:{name:'C#',projects:[
    {title:'University Coursework',description:'Developed foundational and advanced programming skills through various C# projects and assignments in university computer science courses.'}]},
  photography:{name:'Photography',projects:[
    {title:'Published Hobbyist Photographer',description:'Published hobby photographer with over 600,000 views on Unsplash, specializing in landscape and travel photography.'}]},
  digital_design:{name:'Digital Design',projects:[
    {title:'Yearbook Editor in Chief',description:'Led the design and creation of complex graphic elements, layouts, and cover art for the yearbook using tools like Adobe Photoshop.'},
    {title:'VP of Marketing & Communication',description:'Designed digital graphics, posters, and social media content to promote senate events and initiatives using Canva and the Adobe Suite.'}]},
  lightroom:{name:'Adobe Lightroom',projects:[
    {title:'Yearbook Editor in Chief',description:'Utilized Adobe Lightroom for professional-grade photo editing and color correction for all images in the annual yearbook.'},
    {title:'VP of Marketing & Communication',description:'Edited and enhanced photos for social media campaigns and promotional materials for the Student Senate.'}]},
  photoshop:{name:'Adobe Photoshop',projects:[
    {title:'Yearbook Editor in Chief',description:'Led the design and creation of complex graphic elements, layouts, and cover art for the yearbook using Adobe Photoshop.'},
    {title:'VP of Marketing & Communication',description:'Designed digital graphics, posters, and social media content to promote senate events and initiatives.'}]},
  canva:{name:'Canva',projects:[
    {title:'VP of Marketing & Communication',description:'Created accessible and engaging marketing materials, presentations, and social media graphics for the Student Senate using Canva.'},
    {title:'Yearbook Editor in Chief',description:'Used Canva for quick-turnaround graphics, promotional materials for the yearbook, and collaborative design tasks.'}]}
};

const roleData = {
  innovator:{n:'01',title:'Innovator',glyph:'squares',desc:'Building new solutions, initiating ventures, and founding communities',exp:[
    {org:'Bank of America',steps:[
      {title:'Agentic AI Workflow — Patent Pending',date:'Summer 2026',desc:'Built a patent-pending agentic AI workflow and automated multi-agent pipeline that synthesizes Jira tickets, documentation, and source code into a centralized knowledge base, generating system-accurate user stories and reducing creation time by 60%+.'}
    ]},
    {org:'Girls Who Code College Loop',steps:[
      {title:'Founder & President',date:'2023 – 2026',desc:'Founded and led a 50+ member community to close the gender gap in computing through resources, technical programming, and an empowering community for women pursuing careers in technology. Mentored underclassmen in technical interview prep and course planning, and organized networking sessions with alumni and industry professionals.'}
    ]},
    {org:'LeadTheWay Summer Program',steps:[
      {title:'Co-founder & Instructor',date:'Summer 2024',desc:'Created a summer program for middle schoolers to develop public speaking, critical thinking, leadership, debate and writing skills through STEM exploration.'}
    ]},
    {org:'Reading For Fun Organization',steps:[
      {title:'Co-Founder, Chapter Leader',date:'2020 – Present',desc:'Grew to 20 chapters globally with 100+ students. Created, implemented, and led lesson plans for a chapter of 30+ international students through 40+ books to develop creativity, critical thinking, communication, and collaboration skills.'}
    ]}
  ]},
  leader:{n:'02',title:'Leader',glyph:'rings',desc:'Guiding teams and driving mission-driven initiatives',exp:[
    {org:'Calvin University Student Senate',steps:[
      {title:'Senator',date:'2023 – 2025',desc:'Represented and advocated for the student body to achieve positive change. Worked closely with university administration on Governance Committees to tackle concerns and enhance the student experience.'},
      {title:'VP of Marketing & Communication',date:'2025 – 2026',desc:'Created 50+ social media posts and promotional materials reaching 40,000+ accounts and increasing engagement by 185.71%.'},
      {title:'Student Body President',date:'2026 – 2027',desc:'Work closely with university administration to advocate for a 3,500+ student body, setting strategic priorities and leading a cross-functional executive cabinet of vice presidents and advisors.'}
    ]},
    {org:'Calvin University Residence Hall',steps:[
      {title:'Residential Hall President',date:'2024 – 2025',desc:'Led a cross-functional executive team to plan and execute 20+ events, programs, and services that fostered community and belonging for 450+ residents. Oversaw a $900+ budget, marketing, and event logistics while collaborating with campus organizations and administrative departments.'}
    ]}
  ]},
  learner:{n:'03',title:'Learner',glyph:'tri',desc:'Continuously growing through diverse experiences',exp:[
    {org:'Bank of America',steps:[
      {title:'GWC × BofA Work Prep Participant',date:'July 2024',desc:'Participated in a three-week Girls Who Code career readiness program focused on technical roles in consulting, gaining insights into transferable skills, project approaches, and growth mindset.'},
      {title:'Global Technology Summer Analyst',date:'Summer 2026',desc:'Led an executive project planning financial dashboard through the full Agile SDLC — conducting stakeholder interviews, building the front end in HTML/JavaScript/CSS, and deploying to production. Connected it to an Oracle database aggregating 3 data sources via REST APIs to track $5M+ in funding for senior business stakeholders.'}
    ]},
    {org:'Calvin University AI Research',steps:[
      {title:'Lead Researcher, Undergraduate AI Use Study',date:'2026 – Present',desc:'Leading an IRB-approved, mixed-methods study on undergraduate AI use with 300+ survey responses and 15 qualitative interviews. Presented Phase 1 findings to the university AI Steering Committee and selected to present at the Wisdom in the Age of AI conference (October 2026).'}
    ]},
    {org:'National Heritage Academies',steps:[
      {title:'IT ERP & Business Systems Intern',date:'Summer 2025',desc:'Built SQL and Python scripts to securely automate daily batch data transfers between Oracle and OnBase across 100+ schools. Translated C# logic to pseudocode and improved OnBase forms and digital records on Azure through HTML conversions and design enhancements.'},
      {title:'Enterprise Application Engineer',date:'2025 – 2026',desc:'Led the strategic integration of LLMs and AI across 8+ IT teams using Agile project management, and developed custom AI tools and prompt engineering to automate manual processes — bridging technical developers and business units across the full project lifecycle.'}
    ]},
    {org:'Nowhere Collective',steps:[
      {title:'Outreach Coordinator',date:'2025',desc:'Developed and executed community engagement strategies, cultivating 50+ strategic partnerships that expanded the mission-driven startup\'s reach and impact.'},
      {title:'Lead Software Developer & Project Manager',date:'2025 – 2026',desc:'Transformed the application codebase by resolving critical functionality gaps and restructuring core systems for performance, scalability, and intuitive design, while managing two teams of 10+ developers and UI/UX designers.'}
    ]}
  ]},
  connector:{n:'04',title:'Connector',glyph:'link',desc:'Building bridges between people and opportunities',exp:[
    {org:'Calvin University Admissions',steps:[
      {title:'Student Caller',date:'2023 – 2026',desc:'Initiated contact with prospective students, shared key information about the university, and logged valuable data in the admissions database.'},
      {title:'University Tour Guide',date:'2023 – 2026',desc:'Represented the institution by connecting with 500+ prospective students and families, leading engaging campus tours that present academic programs and student life while adapting to diverse audiences and coordinating events.'}
    ]},
    {org:'Carnegie Assisted Living',steps:[
      {title:'Activities Coordinator',date:'Summer 2023, 2024',desc:'Created engaging and stimulating activities for people with memory loss, patiently practicing adaptability and building relationships to foster a positive atmosphere.'}
    ]}
  ]}
};

/* ---------- GEOMETRIC LINE GLYPHS ---------- */
const GLYPHS = {
  squares:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="8" width="34" height="34"/><rect x="22" y="22" width="34" height="34"/></svg>',
  rings:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="8"/><circle cx="32" cy="32" r="16"/><circle cx="32" cy="32" r="24"/></svg>',
  tri:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="20" r="13"/><circle cx="20" cy="42" r="13"/><circle cx="44" cy="42" r="13"/></svg>',
  link:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="32" r="17"/><circle cx="40" cy="32" r="17"/></svg>',
  code:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 20 L8 32 L22 44"/><path d="M42 20 L56 32 L42 44"/><line x1="36" y1="14" x2="28" y2="50"/></svg>',
  design:'<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="15"/><rect x="28" y="28" width="28" height="28"/></svg>'
};

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  cursor();
  nav();
  mobileMenu();
  counters();
  roles();
  skills();
  modal();
  document.getElementById('year').textContent = new Date().getFullYear();
  // inject category glyphs
  document.querySelectorAll('[data-glyph]').forEach(el => el.innerHTML = GLYPHS[el.dataset.glyph] || '');
});

/* ---------- CURSOR ---------- */
function cursor(){
  const c = document.querySelector('.cursor');
  if (!c || window.matchMedia('(max-width:820px)').matches) return;
  let x=innerWidth/2, y=innerHeight/2, cx=x, cy=y;
  addEventListener('mousemove', e => { x=e.clientX; y=e.clientY; });
  (function loop(){ cx+=(x-cx)*0.2; cy+=(y-cy)*0.2; c.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  const hov = 'a,button,.skill,.role-tab,.article,.side-photo,.btn';
  document.querySelectorAll(hov).forEach(el=>{
    el.addEventListener('mouseenter',()=>c.classList.add('ring'));
    el.addEventListener('mouseleave',()=>c.classList.remove('ring'));
  });
  addEventListener('mousedown',()=>c.classList.add('click'));
  addEventListener('mouseup',()=>c.classList.remove('click'));
  document.addEventListener('mouseleave',()=>c.style.opacity='0');
  document.addEventListener('mouseenter',()=>c.style.opacity='1');
}

/* ---------- NAV ---------- */
function nav(){
  const links=[...document.querySelectorAll('.nav-link')];
  const secs=[...document.querySelectorAll('section[id]')];
  addEventListener('scroll',()=>{
    const y=scrollY+120;
    let cur=secs[0]?.id;
    secs.forEach(s=>{ if(y>=s.offsetTop) cur=s.id; });
    links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+cur));
  },{passive:true});
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href').slice(1); const t=document.getElementById(id);
      if(t){ e.preventDefault(); window.scrollTo({top:t.offsetTop-(id==='home'?0:10),behavior:'smooth'}); }
    });
  });
}

/* ---------- MOBILE MENU ---------- */
function mobileMenu(){
  const tog=document.querySelector('.nav-toggle'), menu=document.querySelector('.mobile-menu');
  if(!tog) return;
  tog.addEventListener('click',()=>{ menu.classList.toggle('active'); tog.classList.toggle('open'); });
  menu.querySelectorAll('.m-link').forEach(l=>l.addEventListener('click',()=>{ menu.classList.remove('active'); }));
}

/* ---------- COUNTERS (self-contained, setInterval-based) ---------- */
function counters(){
  const fmt=n=>n.toLocaleString('en-US');
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els=[...document.querySelectorAll('.num[data-target]')];
  const run=el=>{
    if(el._counted) return; el._counted=true;
    const target=+el.dataset.target, suf=el.dataset.suffix||'';
    if(reduce){ el.textContent=fmt(target)+suf; return; }
    const dur=1500, t0=performance.now();
    const id=setInterval(()=>{
      const p=Math.min((performance.now()-t0)/dur,1), e=1-Math.pow(1-p,3);
      el.textContent=fmt(Math.round(target*e))+suf;
      if(p>=1) clearInterval(id);
    },16);
  };
  const check=()=>{
    const vh=window.innerHeight||document.documentElement.clientHeight;
    els.forEach(el=>{ if(el.getBoundingClientRect().top < vh-60) run(el); });
  };
  window.addEventListener('scroll', check, {passive:true});
  window.addEventListener('resize', check, {passive:true});
  check();
  [120,400,900,1600].forEach(d=>setTimeout(check,d));
}

/* ---------- ROLES ---------- */
function roles(){
  const tabs=[...document.querySelectorAll('.role-tab')];
  const disp=document.getElementById('roleDisplay');
  const glyph=document.getElementById('roleGlyph');
  if(!disp) return;
  let current=null;
  const hoverWord = matchMedia('(hover: hover)').matches ? 'hover' : 'tap';
  if(hoverWord==='tap'){ const note=document.querySelector('#roles .note'); if(note) note.textContent='Tap a role to see my progression'; }
  const render=key=>{
    const r=roleData[key];
    if(!r || key===current) return;
    current=key;
    tabs.forEach(t=>t.classList.toggle('active',t.dataset.role===key));
    glyph.innerHTML=GLYPHS[r.glyph]||'';
    const exp=(r.exp||[]).map(e=>{
      const steps=e.steps||[];
      const now=steps[steps.length-1] || {title:'',date:'',desc:''};
      const prev=steps.slice(0,-1).reverse();   // most-recent previous role first
      const hasPrev=prev.length>0;
      const pop = hasPrev ? (
        `<div class="prev-pop">`+
          `<button class="pp-close" aria-label="Close">&times;</button>`+
          `<div class="pp-head">Previously${e.org?` at ${e.org}`:''}</div>`+
          prev.map(s=>(
            `<div class="pp-step">`+
              `<div class="pp-top"><span class="pp-title">${s.title}</span><span class="pp-date">${s.date}</span></div>`+
              `<div class="pp-desc">${s.desc}</div>`+
            `</div>`
          )).join('')+
        `</div>`
      ) : '';
      return `<div class="x${hasPrev?' has-prev':''}"${hasPrev?' tabindex="0"':''}>`+
        `<div class="xtop"><span class="org">${e.org}</span><span class="date">${now.date}</span></div>`+
        `<div class="role-now"><span class="rn-title">${now.title}</span>${hasPrev?'<span class="rn-tag">↑ now</span>':''}</div>`+
        `<div class="xd">${now.desc}</div>`+
        (hasPrev?`<span class="prev-hint mono"><span class="ph-dot"></span>${prev.length} earlier role${prev.length>1?'s':''} — ${hoverWord} to see progression</span>`:'')+
        pop+
      `</div>`;
    }).join('');
    disp.innerHTML=
      `<div class="pre">Role ${r.n} / 04 — Progression</div>`+
      `<h3>${r.title}</h3>`+
      `<p class="desc">${r.desc}</p>`+
      `<div class="role-exp">${exp}</div>`;
    // touch / keyboard: tap or Enter toggles the progression popup open
    disp.querySelectorAll('.x.has-prev').forEach(x=>{
      const closeBtn = x.querySelector('.pp-close');
      // .dismissed hides the popup even while :hover / :focus-within still match (sticky on touch)
      const setOpen = on => { x.classList.toggle('open', on); x.classList.toggle('dismissed', !on); if(!on) x.blur(); };
      closeBtn?.addEventListener('mousedown', e => { e.stopPropagation(); e.preventDefault(); });
      closeBtn?.addEventListener('click', e => { e.stopPropagation(); e.preventDefault(); setOpen(false); });
      x.addEventListener('click', () => setOpen(!x.classList.contains('open')));
      x.addEventListener('keydown', ev => { if(ev.key==='Enter'||ev.key===' '){ ev.preventDefault(); setOpen(!x.classList.contains('open')); } else if(ev.key==='Escape') setOpen(false); });
      x.addEventListener('mouseleave', () => x.classList.remove('dismissed'));
      x.addEventListener('focusout', e => { if(!x.contains(e.relatedTarget)) x.classList.remove('open','dismissed'); });
    });
  };
  tabs.forEach(t=>{
    const go=()=>render(t.dataset.role);
    t.addEventListener('click',go);
    t.addEventListener('mouseenter',go);
    t.addEventListener('pointerenter',go);
    t.addEventListener('focus',go);
  });
  render('innovator');
}

/* ---------- SKILLS ---------- */
function skills(){
  document.querySelectorAll('.skill').forEach(s=>{
    s.addEventListener('click',()=>openModal(s.dataset.skill));
  });
}

/* ---------- MODAL ---------- */
function modal(){
  const m=document.getElementById('projectModal');
  const close=()=>{ m.classList.remove('active'); document.body.style.overflow=''; };
  m.querySelector('.modal-close').addEventListener('click',close);
  m.querySelector('.modal-overlay').addEventListener('click',close);
  addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
}
function openModal(skill){
  const d=projectData[skill]; if(!d) return;
  const m=document.getElementById('projectModal');
  document.getElementById('modalTitle').textContent=`${d.name} — Projects`;
  const body=document.getElementById('modalBody');
  body.innerHTML=d.projects.map(p=>`<div class="proj"><h4>${p.title}</h4><p>${p.description}</p></div>`).join('');
  m.classList.add('active'); document.body.style.overflow='hidden';
}

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const s=".about-section{margin:0;background-color:var(--color-secondary);padding:40px 0}.about-content{margin:0 auto;max-width:var(--content-max-width);padding:0 20px}.about-me{margin-bottom:40px}.about-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;align-items:stretch}",l=`<section class="about-section">\r
    <div class="about-content">\r
        <div class="about-me">\r
            <h4 class="code-comment">// about me</h4>\r
            <h1 class="gradient-text">Crafting Backend Solutions</h1>\r
            <div class="main-content">\r
                <p>\r
                    I am a Software Engineer with a passion for building software with Java (aka Spring Boot). I aim to\r
                    solve real-world problems without compromising on quality and performance. Also, I tend to focus on\r
                    the solution rather than the technology. Each technology is just a tool, and I love to learn new\r
                    ones and solve real-world problems with them.\r
                </p>\r
                <p>\r
                    I believe that clean code and best practices are the key to building software that is\r
                    straightforward to maintain and extend. I am also a fan of TDD, and I try to write tests for every\r
                    new feature I add. When designing software, I follow OpenAPI specifications to create\r
                    well-documented APIs.\r
                </p>\r
                <p>\r
                    My favorite thing about software development is the challenges it presents and the opportunity to\r
                    learn new things every day.\r
                </p>\r
            </div>\r
        </div>\r
        <div class="about-cards">\r
            <app-card icon="terminal" title="Clean code advocate">\r
                <p>Writing maintainable, readable code that stands the test of time.</p>\r
            </app-card>\r
            <app-card icon="zap" title="Performance focused">\r
                <p>Optimizing performance and scalability of backend systems.</p>\r
            </app-card>\r
            <app-card icon="users" title="Team player">\r
                <p>Collaborating with other engineers to build great software.</p>\r
            </app-card>\r
            <app-card icon="book-open" title="Continuous learner">\r
                <p>Always learning new things and trying to apply them in my work.</p>\r
            </app-card>\r
        </div>\r
    </div>\r
</section>`;class c extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${s}</style>${l}`}}customElements.define("app-about",c);const d=".btn{display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 12px;border:none;border-radius:8px;cursor:pointer;background-color:var(--color-surface);color:var(--color-primary);font-family:sans-serif;height:40px;box-sizing:border-box}.btn:hover{background-color:var(--color-primary);color:var(--color-surface)}.btn .icon{display:flex;align-items:center;justify-content:center}.btn .icon svg{stroke:var(--color-primary);fill:transparent}.btn .icon svg path{fill:transparent}.btn .label ::slotted(*){text-decoration:none;color:inherit}app-button[shape=circle] .btn{border-radius:9999px}app-button[variant=outlined] .btn{background-color:var(--color-surface);color:var(--color-primary);border:1px solid var(--color-primary)}app-button[variant=outlined]:hover .btn{background-color:var(--color-primary);color:var(--color-surface);border:1px solid var(--color-surface)}app-button[variant=outlined]:hover .btn .icon svg{stroke:var(--color-surface)}app-button[variant=filled] .btn{background-color:var(--color-primary);color:var(--color-surface)}app-button[variant=filled] .btn .icon svg{stroke:var(--color-surface)}app-button[raised]:hover .btn{transform:translateY(-2px);transition:transform .2s ease,box-shadow .2s ease;box-shadow:color-mix(in srgb,var(--color-primary),transparent 85%) 0 20px 25px -5px,color-mix(in srgb,var(--color-primary),transparent 95%) 0 8px 10px -6px}",p=`<div class="btn">\r
  <span class="icon">\r
  </span>\r
  <span class="label"></span>\r
</div>\r
`;class h extends HTMLElement{connectedCallback(){this.innerHTML=`<style>${d}</style>${p}`,this.#e(),this.#t(),this.#r()}#e(){const e=this.querySelector(".icon"),t=this.getAttribute("icon");if(!t){e.remove();return}const a=document.createElement("i");a.setAttribute("data-feather",t),e.appendChild(a)}#t(){const e=this.getAttribute("label");if(!e)return;const t=this.querySelector(".label");t.innerHTML=e}#r(){const e=this.getAttribute("href");e&&this.addEventListener("click",()=>{window.location.href=e})}}customElements.define("app-button",h);const g=":host{display:flex;width:100%;box-sizing:border-box;height:100%}.card{display:flex;flex-direction:column;flex:1;gap:12px;padding:16px;box-shadow:0 2px 4px #0003;border:1px solid var(--border-color-transparent);border-radius:12px;background-color:var(--color-card-background)}.card:hover{box-shadow:0 8px 16px #0003;border:1px solid var(--border-color-secondary-transparent)}.card svg{stroke:var(--color-primary);fill:transparent}.card svg path{fill:transparent}.card:hover svg{stroke:var(--color-secondary)}.card-icon-wrapper{padding:12px;background-color:var(--color-secondary);width:fit-content;border-radius:12px;transition:background-color .2s ease-in-out;display:flex;align-items:center;justify-content:center}.card:hover .card-icon-wrapper{background-color:var(--color-primary)}#title-card{color:var(--color-text-secondary);margin:0}::slotted(*){margin:0}",m=`<div class="card">\r
    <div class="card-icon-wrapper">\r
        <i id="icon-card"></i>\r
    </div>\r
    <h3 id="title-card"></h3>\r
    <slot></slot>\r
</div>\r
`;class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
            <style>${g}</style>
            ${m}
        `,this.#e(),this.#t(),window.feather&&window.feather.replace({root:this.shadowRoot})}#e(){const e=this.shadowRoot.querySelector("#icon-card"),t=this.getAttribute("icon");if(!t){e?.remove();return}e.innerHTML=window.feather.icons[t].toSvg()}#t(){const e=this.shadowRoot.querySelector("#title-card"),t=this.getAttribute("title");if(!t){e.remove();return}e.innerHTML=t}}customElements.define("app-card",u);const f=".contact-section{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px;padding:0 40px}.contact-comment{margin-top:40px}.contact-header,.contact-subheader{margin:0;text-align:center}.contact-container{width:100%;max-width:var(--content-max-width);background-color:var(--color-secondary);padding:20px;margin:20px;border:1px solid var(--border-color-transparent);border-radius:12px}.contact-details-wrapper{max-width:var(--content-max-width)}.contact-details{display:flex;flex-direction:row;gap:16px;align-items:center;justify-content:center;width:100%;border-radius:12px;padding:8px 16px;margin-bottom:16px;word-break:break-word}.contact-details-subtitle{margin:0}.contact-details-title{margin:0;color:var(--color-text-secondary)}.contact-details-icon{display:flex;justify-content:center;align-items:center;height:100%}.contact-details-icon svg{stroke:var(--color-text-secondary);fill:transparent}.contact-details-icon svg path{fill:transparent}.social-media-card{margin:30px;display:flex;flex-direction:column;gap:10px;align-items:center}.social-media-card p{color:var(--color-text-secondary)}.social-media-icons{display:flex;flex-direction:row;gap:10px;margin:0 auto;justify-content:center;align-items:center}.social-media-icons a{border:2px solid var(--color-text-primary);border-radius:5px;padding:8px;display:flex;justify-content:center;align-items:center}.social-media-icons a svg{stroke:var(--color-text-secondary);fill:transparent}.social-media-icons a svg path{fill:transparent}",b=`<section class="contact-section">\r
    <h4 class="code-comment contact-comment">// getInTouch()</h4>\r
    <h1 class="contact-header">Let's <span class="gradient-text">Connect</span></h1>\r
    <p class="contact-subheader">I'm always open to discussing new opportunities, interesting projects, or just having a chat.</p>\r
\r
    <div class="contact-container">\r
        <div class="contact-details-wrapper">\r
            <div class="contact-details">\r
                <div class="contact-details-icon">\r
                    <i data-feather="map-pin"></i>\r
                </div>\r
                    <p class="contact-details-title">Athens, Greece</p>\r
            </div>\r
            <div class="contact-details">\r
                <div class="contact-details-icon">\r
                    <i data-feather="mail"></i>\r
                </div>\r
                    <p class="contact-details-title">george.karampelas.26@gmail.com</p>\r
            </div>\r
        </div>\r
\r
        <div class="social-media-card">\r
            <p>Find me on</p>\r
            <div class="social-media-icons">\r
                <a href="https://www.linkedin.com/in/george-karampelas/" target="_blank">\r
                    <i data-feather="linkedin"></i>\r
                </a>\r
                <a href="https://github.com/gkarampelas" target="_blank">\r
                    <i data-feather="github"></i>\r
                </a>\r
            </div>\r
        </div>\r
\r
        <app-button\r
                icon="send"\r
                variant="filled"\r
                raised\r
                href="mailto:george.karampelas.26@gmail.com"\r
                label="Send me a message"\r
        ></app-button>\r
    </div>\r
</section>`;class v extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${f}</style>${b}`}}customElements.define("app-contact",v);const x="footer{width:100%;border-top:1px solid var(--border-color-transparent)}.footer-content{margin:0 auto;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:16px;max-width:var(--max-width)}.footer-logo{color:var(--color-text-secondary)}.footer-copyright{color:var(--color-text-primary)}@media(max-width:768px){.footer-content{flex-direction:column}}",y=`<footer>\r
    <div class="footer-content">\r
        <a href="#" class="anchor-unstyled logo footer-logo">\r
            <span class="tag"><</span>gkarampelas<span class="tag">/></span>\r
        </a>\r
        <p class="footer-copyright">&copy; 2026 gkarampelas.gr</p>\r
        <p class="footer-skills">Software Engineer &bull; Java &bull; Spring Boot</p>\r
    </div>\r
</footer>`;class k extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${x}</style>${y}`}}customElements.define("app-footer",k);const w=".header{position:sticky;top:0;width:100%;background-color:var(--color-header)}.scrolled{border-bottom:1px solid var(--border-color-transparent)}.header .container{max-width:var(--max-width);margin:0 auto;padding:16px;display:flex;justify-content:space-between;align-items:center}.header .nav a{margin-left:16px;text-decoration:none;color:var(--color-text-primary);font-weight:500;transition:color .3s ease}.header .nav a:hover{color:var(--color-text-secondary)}.menu-btn{display:none;background:none;border:none;color:var(--color-text-primary);cursor:pointer;margin:0;padding:0}.icon{width:1.8rem;height:1.8rem;stroke:currentColor;stroke-width:2;fill:none}svg path{fill:var(--color-text-primary)}.icon-close,.menu-btn.active .icon-menu{display:none}.menu-btn.active .icon-close{display:block}@media(max-width:768px){.menu-btn{display:block}.nav{position:absolute;top:100%;right:0;width:100%;padding:16px;background:var(--color-surface);display:none;flex-direction:column;box-shadow:0 8px 20px #0000001a}.nav-inner{padding-left:16px;display:flex;flex-direction:column}.nav a{margin:8px 0}.nav.active{display:flex}}",S=`<header class="header">\r
    <div class="container">\r
        <div class="logo">\r
            <a href="#" class="anchor-unstyled">\r
                <span class="tag"><</span>gkarampelas<span class="tag">/></span>\r
            </a>\r
        </div>\r
\r
        <button class="menu-btn" aria-label="Toggle menu">\r
            <i class="icon icon-menu" data-feather="menu"></i>\r
            <i class="icon icon-close" data-feather="x"></i>\r
        </button>\r
        <nav class="nav">\r
            <div class="nav-inner">\r
                <a href="#about">About</a>\r
                <a href="#skills">Skills</a>\r
                <a href="#contact">Contact</a>\r
            </div>\r
        </nav>\r
    </div>\r
</header>\r
\r
\r
`;class L extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${w}</style>${S}`}connectedCallback(){const e=this.querySelector(".menu-btn"),t=this.querySelector(".nav"),a=this.querySelector(".header");!e||!t||(e.addEventListener("click",()=>{const r=t.classList.toggle("active");e.classList.toggle("active",r)}),this._onScroll=()=>{a.classList.toggle("scrolled",window.scrollY>0)},window.addEventListener("scroll",this._onScroll),feather.replace())}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll)}}customElements.define("app-header",L);const T=".hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,#1e2b4a 0%,var(--color-bg) 100%);padding:0 20px;box-sizing:border-box}.hero{max-width:var(--content-max-width);text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}.terminal-path{font-family:Fira Code,JetBrains Mono,Source Code Pro,monospace;display:inline-block;width:fit-content;margin:0 auto;background-color:var(--color-surface);padding:8px 16px;border-radius:12px}.prompt{color:var(--color-primary)}.path{color:#90ee90;margin-right:5px}.command{color:#f8f8f2}.hero h1{margin:0}.hero h2{font-size:clamp(1rem,3vw,2rem)}.chips{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center;padding:0;margin:0}.chips .chip{display:inline;background-color:color-mix(in srgb,var(--color-bg),transparent 70%);padding:10px 20px;border-radius:75px;margin:5px;border:1px solid var(--border-color-transparent)}.hero-button{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:center;width:100%}.arrow-down{align-self:center;margin-top:50px;opacity:0}.bounce{animation:bounceIn 2s infinite 2s}@keyframes bounceIn{0%,20%,50%,80%,to{transform:translateY(0);opacity:1}40%{transform:translateY(-20px)}60%{transform:translateY(-15px)}}",E=`<section class="hero-section">\r
    <div class="hero">\r
        <div class="terminal-path">\r
            <span class="prompt">visitor@web-server:~$</span>\r
            <span class="path">~</span>\r
            <span class="command">/home</span>\r
        </div>\r
        <h1>Hi, I'm <span class="gradient-text">George</span></h1>\r
        <h2>Backend Software Engineer</h2>\r
        <div class="chips">\r
            <div class="chip">Java</div>\r
            <div class="chip">Spring Boot</div>\r
            <div class="chip">Docker</div>\r
            <div class="chip">REST APIs</div>\r
        </div>\r
        <p class="description">\r
            Building robust, scalable backend systems with clean code and best practices. Loving to learn new\r
            technologies.\r
            Passionate about crafting software that solves real-world problems.\r
        </p>\r
        <div class="hero-button">\r
            <app-button icon="mail" label="Get in touch" href="#contact"\r
                        variant="filled" shape="square" raised>\r
            </app-button>\r
            <app-button shape="square" raised href="#about" label="Learn more" variant="outlined">\r
            </app-button>\r
        </div>\r
        <i class="arrow-down bounce" data-feather="arrow-down" width="32" height="32"></i>\r
    </div>\r
</section>`;class $ extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${T}</style>${E}`}connectedCallback(){feather.replace()}}customElements.define("app-hero",$);const M=".skill-container{width:100%;display:flex;flex-direction:column;gap:8px}.skill-wrapper{width:100%;display:flex;flex-direction:row;gap:10px;justify-content:space-between}.skill-progress{width:100%;border-radius:8px;background-color:var(--color-surface)}.skill-progress-bar{background:linear-gradient(to right,var(--color-primary),#7209b7);height:10px;border-radius:8px}",A=`<div class="skill-container">\r
    <div class="skill-wrapper">\r
        <span class="skill-name"></span>\r
        <span class="skill-percentage"></span>\r
    </div>\r
    <div class="skill-progress">\r
        <div class="skill-progress-bar"></div>\r
    </div>\r
</div>`;class H extends HTMLElement{connectedCallback(){this.innerHTML=`<style>${M}</style>${A}`,this.#e()}#e(){const e=this.getAttribute("skill"),t=this.getAttribute("percentage");!e||!t||(this.querySelector(".skill-name").innerHTML=e,this.querySelector(".skill-percentage").innerHTML=`${t}%`,this.querySelector(".skill-progress-bar").style.width=`${t}%`)}}customElements.define("app-skill",H);const C=".skills-section{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;box-sizing:border-box;word-break:break-word}.skills-content{width:var(--content-max-width);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}.skills-header{margin:0;font-size:clamp(2rem,8vw,4rem);line-height:1.2;max-width:100%;text-align:center}.skills-subheader{margin:0;max-width:600px;width:100%;line-height:1.6;text-align:center}.skills-wrapper{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;align-items:stretch}",I=`<section class="skills-section">\r
    <div class="skills-content">\r
        <h4 class="code-comment"><span>&lt;skills&gt;</span></h4>\r
        <h1 class="skills-header">Technical\r
            <span class="gradient-text">Skills</span>\r
        </h1>\r
        <p class="skills-subheader">Specialized in building enterprise-grade backend systems with the Spring ecosystem,\r
            following best practices and\r
            clean architecture principles.</p>\r
\r
            <div class="skills-wrapper">\r
            </div>\r
        <h4 class="code-comment"><span>&lt;skills/&gt;</span></h4>\r
    </div>\r
</section>`,j=[{icon:"server",title:"Backend Development",skills:[{skill:"Java",percentage:90},{skill:"Spring Boot",percentage:85},{skill:"Spring Security",percentage:80},{skill:"Spring JPA",percentage:85},{skill:"Spring Batch",percentage:65}]},{icon:"layers",title:"API Design",skills:[{skill:"REST APIs",percentage:90},{skill:"OpenAPI/Swagger",percentage:90},{skill:"API Documentation",percentage:70},{skill:"Postman",percentage:80}]},{icon:"check-circle",title:"Testing",skills:[{skill:"Test-Driver Development",percentage:80},{skill:"JUnit",percentage:85},{skill:"Mockito",percentage:80},{skill:"Test Containers",percentage:50},{skill:"Integration Testing",percentage:40}]},{icon:"git-branch",title:"DevOps & Tools",skills:[{skill:"Docker",percentage:80},{skill:"Git",percentage:70},{skill:"Gitlab CI/CD",percentage:40},{skill:"Maven",percentage:75},{skill:"npm",percentage:65}]},{icon:"layout",title:"Frontend Development",skills:[{skill:"Angular",percentage:60},{skill:"HTML",percentage:80},{skill:"CSS",percentage:60},{skill:"Javascript",percentage:60},{skill:"Typescript",percentage:70}]},{icon:"database",title:"Databases",skills:[{skill:"PostgreSQL",percentage:85},{skill:"MySql",percentage:65},{skill:"Hibernate",percentage:75}]}];class P extends HTMLElement{connectedCallback(){this.innerHTML=`<style>${C}</style>${I}`,this.#e()}#e(){const e=this.querySelector(".skills-wrapper");j.forEach(t=>{const a=document.createElement("app-card");a.setAttribute("icon",t.icon),a.setAttribute("title",t.title),t.skills.forEach(r=>{const n=document.createElement("app-skill");n.setAttribute("skill",r.skill),n.setAttribute("percentage",r.percentage),a.appendChild(n)}),e.appendChild(a)})}}customElements.define("app-skills",P);

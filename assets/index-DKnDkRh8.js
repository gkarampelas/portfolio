(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const c=".btn{display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 12px;border:none;border-radius:8px;cursor:pointer;background-color:var(--color-surface);color:var(--color-primary);font-family:sans-serif;height:40px;box-sizing:border-box}.btn:hover{background-color:var(--color-primary);color:var(--color-surface)}.btn .icon{display:flex;align-items:center;justify-content:center}.btn .icon svg{stroke:var(--color-primary);fill:transparent}.btn .icon svg path{fill:transparent}.btn .label ::slotted(*){text-decoration:none;color:inherit}app-button[shape=circle] .btn{border-radius:9999px}app-button[variant=outlined] .btn{background-color:var(--color-surface);color:var(--color-primary);border:1px solid var(--color-primary)}app-button[variant=outlined]:hover .btn{background-color:var(--color-primary);color:var(--color-surface);border:1px solid var(--color-surface)}app-button[variant=outlined]:hover .btn .icon svg{stroke:var(--color-surface)}app-button[variant=filled] .btn{background-color:var(--color-primary);color:var(--color-surface)}app-button[variant=filled] .btn .icon svg{stroke:var(--color-surface)}app-button[raised]:hover .btn{transform:translateY(-2px);transition:transform .2s ease,box-shadow .2s ease;box-shadow:color-mix(in srgb,var(--color-primary),transparent 85%) 0 20px 25px -5px,color-mix(in srgb,var(--color-primary),transparent 95%) 0 8px 10px -6px}",l=`<div class="btn">\r
  <span class="icon">\r
  </span>\r
  <span class="label"></span>\r
</div>\r
`;class d extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`<style>${c}</style>${l}`,this.#e(),this.#r(),this.#n(),feather.replace({root:this})}disconnectedCallback(){}#e(){const r=this.querySelector(".icon"),t=this.getAttribute("icon");if(!t){r.remove();return}const o=document.createElement("i");o.setAttribute("data-feather",t),r.appendChild(o)}#r(){const r=this.getAttribute("label");if(!r)return;const t=this.querySelector(".label");t.innerHTML=r}#n(){const r=this.getAttribute("href");r&&this.addEventListener("click",()=>{window.location.href=r})}}customElements.define("app-button",d);const p=".card{width:100%;display:flex;flex-direction:column;gap:8px;padding:16px;box-shadow:0 2px 4px #0003;border-radius:12px}.card-title{font-size:1.2rem}.card-sub{color:#666;font-size:.9rem}.card-action ::slotted(a){color:inherit;text-decoration:none;cursor:pointer;font-weight:500}.card-action ::slotted(a:hover){text-decoration:underline}.card-action ::slotted(a:visited){color:inherit;text-decoration:none}",u=`<div class="card">\r
    <div class="card-title">\r
        <slot name="title"></slot>\r
    </div>\r
    <div class="card-sub">\r
        <slot name="subtitle"></slot>\r
    </div>\r
    <div class="card-body">\r
        <slot name="body"></slot>\r
    </div>\r
    <div class="card-sub">\r
        <slot name="footer"></slot>\r
    </div>\r
    <div class="card-action">\r
        <slot name="action"></slot>\r
    </div>\r
</div>\r
`,s=new CSSStyleSheet;s.replaceSync(p);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[s],this.shadowRoot.innerHTML=String(u)}}customElements.define("app-card",h);const b=".header{position:sticky;top:0;width:100%;background-color:var(--color-header);font-size:1.2rem}.scrolled{border-bottom:1px solid var(--border-color-transparent)}.header .container{max-width:var(--max-width);margin:0 auto;padding:16px;display:flex;justify-content:space-between;align-items:center}.header .nav a{margin-left:16px;text-decoration:none;color:var(--color-text-primary);font-weight:500;transition:color .3s ease}.header .nav a:hover,.logo{color:var(--color-text-secondary)}.tag{color:var(--color-primary)}.menu-btn{display:none;background:none;border:none;color:var(--color-text-primary);cursor:pointer;margin:0;padding:0}.icon{width:1.8rem;height:1.8rem;stroke:currentColor;stroke-width:2;fill:none}svg path{fill:var(--color-text-primary)}.icon-close,.menu-btn.active .icon-menu{display:none}.menu-btn.active .icon-close{display:block}@media(max-width:768px){.menu-btn{display:block}.nav{position:absolute;top:100%;right:0;width:100%;padding:16px;background:var(--color-surface);display:none;flex-direction:column;box-shadow:0 8px 20px #0000001a}.nav-inner{padding-left:16px;display:flex;flex-direction:column}.nav a{margin:8px 0}.nav.active{display:flex}}",m=`<header class="header">\r
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
                <a href="/about">About</a>\r
                <a href="/skills">Skills</a>\r
                <a href="/contact">Contact</a>\r
            </div>\r
        </nav>\r
    </div>\r
</header>\r
\r
\r
`;class f extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${b}</style>${m}`}connectedCallback(){const r=this.querySelector(".menu-btn"),t=this.querySelector(".nav"),o=this.querySelector(".header");!r||!t||(r.addEventListener("click",()=>{const e=t.classList.toggle("active");r.classList.toggle("active",e)}),this._onScroll=()=>{o.classList.toggle("scrolled",window.scrollY>0)},window.addEventListener("scroll",this._onScroll),feather.replace())}disconnectedCallback(){window.removeEventListener("scroll",this._onScroll)}}customElements.define("app-header",f);const v=".hero-section{min-height:100vh;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,#1e2b4a 0%,var(--color-bg) 100%);padding:0 20px}.hero{max-width:var(--content-max-width);text-align:center;display:flex;flex-direction:column;gap:16px}.hero h1{font-size:5rem;margin:0}.name{-webkit-background-clip:text;background-clip:text;color:transparent;background-image:linear-gradient(to right,var(--color-primary),#7209b7)}ul{list-style-type:none;padding:0;margin:0}ul li{display:inline;background-color:color-mix(in srgb,var(--color-bg),transparent 70%);padding:10px 20px;border-radius:75px;margin:0 5px;border:1px solid var(--border-color-transparent)}.description{font-size:1.2rem}.hero-button{display:flex;flex-direction:row;gap:10px;align-items:center;justify-content:center;width:100%}.arrow-down{align-self:center;margin-top:50px;opacity:0}.bounce{animation:bounceIn 2s infinite 2s}@keyframes bounceIn{0%,20%,50%,80%,to{transform:translateY(0);opacity:1}40%{transform:translateY(-20px)}60%{transform:translateY(-15px)}}",g=`<section class="hero-section">\r
    <div class="hero">\r
        <h1>Hi, I'm <span class="name">George</span></h1>\r
        <h2>Backend Software Engineer</h2>\r
        <ul>\r
            <li>Java</li>\r
            <li>Spring Boot</li>\r
            <li>Docker</li>\r
            <li>REST APIs</li>\r
        </ul>\r
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
</section>`;class x extends HTMLElement{constructor(){super(),this.innerHTML=`<style>${v}</style>${g}`}connectedCallback(){feather.replace()}disconnectedCallback(){}}customElements.define("app-hero",x);

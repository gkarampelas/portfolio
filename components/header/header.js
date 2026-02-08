import sheet from './header.css?inline';
import html from './header.html?raw';

class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }

    connectedCallback() {
        const menuBtn = this.querySelector('.menu-btn');
        const navMenu = this.querySelector('.nav');
        const header = this.querySelector('.header');

        if (!menuBtn || !navMenu) return;

        menuBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active', isOpen);
        });

        this._onScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 0);
        };

        window.addEventListener('scroll', this._onScroll);
        feather.replace();
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this._onScroll);
    }
}

customElements.define('app-header', AppHeader);

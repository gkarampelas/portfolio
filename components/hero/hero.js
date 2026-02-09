import sheet from './hero.css?inline';
import html from './hero.html?raw';

class Hero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }

    connectedCallback() {
        feather.replace();
    }
}

customElements.define('app-hero', Hero);
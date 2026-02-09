import sheet from './skills.css?inline';
import html from './skills.html?raw';

class Skills extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }
}

customElements.define('app-skills', Skills);
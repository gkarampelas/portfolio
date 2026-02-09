import sheet from './about.css?inline';
import html from './about.html?raw';

class About extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }
}

customElements.define('app-about', About);
import sheet from './footer.css?inline';
import html from './footer.html?raw';

class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }
}

customElements.define('app-footer', Footer);
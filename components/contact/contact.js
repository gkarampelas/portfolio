import sheet from './contact.css?inline';
import html from './contact.html?raw';

class Contact extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }
}

customElements.define('app-contact', Contact);
import sheet from './education.css?inline';
import html from './education.html?raw';

class Education extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<style>${sheet}</style>${html}`;
    }
}

customElements.define('app-education', Education);
import sheet from "./card.css?inline";
import html from "./card.html?raw";

class AppCard extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>${sheet}</style>
            ${html}
        `;
        this.#renderIcon();
        this.#renderTitle();
        if (window.feather) {
            window.feather.replace({root: this.shadowRoot});
        }
    }


    #renderIcon() {
        const iconElement = this.shadowRoot.querySelector('#icon-card');
        const icon = this.getAttribute('icon');

        if (!icon) {
            iconElement?.remove();
            return;
        }

        iconElement.innerHTML = window.feather.icons[icon].toSvg();
    }

    #renderTitle() {
        const hElement = this.shadowRoot.querySelector('#title-card');
        const title = this.getAttribute('title');

        if (!title) {
            hElement.remove();
            return;
        }
        hElement.innerHTML = title;
    }
}


customElements.define('app-card', AppCard);

import sheet from "./card.css?inline";
import html from "./card.html?raw";

class AppCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style>${sheet}</style>${html}`;
        this.#renderIcon();
        this.#renderTitle();
        this.#renderBody();
    }

    #renderIcon() {
        const iconElement = this.querySelector('#icon-card');
        const icon = this.getAttribute('icon');

        if (!icon) {
            iconElement.remove();
            return;
        }

        iconElement.setAttribute('data-feather', icon);
    }

    #renderTitle() {
        const hElement = this.querySelector('#title-card');
        const title = this.getAttribute('title');

        if (!title) {
            hElement.remove();
            return;
        }
        hElement.innerHTML = title;
    }

    #renderBody() {
        const pElement = this.querySelector('#body-card');
        const body = this.getAttribute('body');

        if (!body) {
            pElement.remove();
            return;
        }
        pElement.innerHTML = body;
    }
}


customElements.define('app-card', AppCard);

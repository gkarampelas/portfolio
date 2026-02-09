import sheet from './button.css?inline';
import html from './button.html?raw';

class AppButton extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<style>${sheet}</style>${html}`;
        this.#renderIcon();
        this.#renderLabel();
        this.#renderHref();
    }

    #renderIcon() {
        const iconContainer = this.querySelector('.icon');
        const icon = this.getAttribute('icon');

        if (!icon) {
            iconContainer.remove();
            return;
        }

        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-feather', icon);
        iconContainer.appendChild(iconElement);
    }

    #renderLabel() {
        const text = this.getAttribute('label');
        if (!text) return;

        const label = this.querySelector('.label');
        label.innerHTML = text;
    }

    #renderHref() {
        const href = this.getAttribute('href');
        if (!href) return;

        this.addEventListener('click', () => {
            window.location.href = href;
        })
    }

}

customElements.define('app-button', AppButton);
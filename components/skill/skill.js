import sheet from './skill.css?inline';
import html from './skill.html?raw';

class Skill extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<style>${sheet}</style>${html}`;
        this.#renderSkill();
    }

    #renderSkill() {
        const skill = this.getAttribute('skill');
        const percentage = this.getAttribute('percentage');
        if (!skill || !percentage) return;

        this.querySelector('.skill-name').innerHTML = skill;
        this.querySelector('.skill-percentage').innerHTML = `${percentage}%`;
        this.querySelector('.skill-progress-bar').style.width = `${percentage}%`;
    }
}

customElements.define('app-skill', Skill);
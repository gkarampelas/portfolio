import sheet from './skills.css?inline';
import html from './skills.html?raw';


const skills = [
    {
        icon: "server",
        title: "Backend Development",
        skills: [
            {skill: "Java", percentage: 90},
            {skill: "Spring Boot", percentage: 85},
            {skill: "Spring Security", percentage: 80},
            {skill: "Spring JPA", percentage: 85},
            {skill: "Spring Batch", percentage: 65},
        ]
    },
    {
        icon: "layers",
        title: "API Design",
        skills: [
            {skill: "REST APIs", percentage: 90},
            {skill: "OpenAPI/Swagger", percentage: 90},
            {skill: "API Documentation", percentage: 70},
            {skill: "Postman", percentage: 80}
        ]
    },
    {
        icon: "check-circle",
        title: "Testing",
        skills: [
            {skill: "Test-Driver Development", percentage: 80},
            {skill: "JUnit", percentage: 85},
            {skill: "Mockito", percentage: 80},
            {skill: "Test Containers", percentage: 50},
            {skill: "Integration Testing", percentage: 40},
        ]
    },
    {
        icon: "git-branch",
        title: "DevOps & Tools",
        skills: [
            {skill: "Docker", percentage: 80},
            {skill: "Git", percentage: 70},
            {skill: "Gitlab CI/CD", percentage: 40},
            {skill: "Maven", percentage: 75},
            {skill: "npm", percentage: 65},
        ]
    },
    {
        icon: "layout",
        title: "Frontend Development",
        skills: [
            {skill: "Angular", percentage: 60},
            {skill: "HTML", percentage: 80},
            {skill: "CSS", percentage: 60},
            {skill: "Javascript", percentage: 60},
            {skill: "Typescript", percentage: 70},
        ]
    },
    {
        icon: "database",
        title: "Databases",
        skills: [
            {skill: "PostgreSQL", percentage: 85},
            {skill: "MySql", percentage: 65},
            {skill: "Hibernate", percentage: 75},
        ]
    }
]

class Skills extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<style>${sheet}</style>${html}`;
        this.#renderSkills();
    }

    #renderSkills() {
        const skillsContainer = this.querySelector('.skills-wrapper');
        skills.forEach(skill => {
            const card = document.createElement('app-card');
            card.setAttribute('icon', skill.icon);
            card.setAttribute('title', skill.title);
            skill.skills.forEach(skill => {
                const skillCard = document.createElement('app-skill');
                skillCard.setAttribute('skill', skill.skill);
                skillCard.setAttribute('percentage', skill.percentage);
                card.appendChild(skillCard);
            })
            skillsContainer.appendChild(card);
        })
    }
}

customElements.define('app-skills', Skills);
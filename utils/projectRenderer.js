import projectsData from '../data/projects.js';

class ProjectRenderer {
    constructor() {
        this.projects = projectsData;
    }

    
    renderProjectCard(project) {
        const badgeHTML = project.badge ? 
            `<div class="project-badge">${project.badge}</div>` : '';
        
        const technologiesHTML = project.technologies.map(tech => 
            `<span>${tech}</span>`
        ).join('');
        
        return `
            <div class="project-card project-hover" data-id="${project.id}">
                <div class="project-img">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.liveUrl}" target = "_blank" class="project-link">
                                <i class="fas fa-external-link-alt"></i> Live Preview
                            </a>
                            <a href="${project.codeUrl}" target = "_blank" class="project-link">
                                <i class="fab fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                    ${badgeHTML}
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${technologiesHTML}
                    </div>
                    <button class="read-more-btn" data-project="${project.id}">
                        Read More <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

   
    renderFeaturedProjects() {
        const featuredProjects = this.projects.slice(0, 3);
        const container = document.querySelector('.projects-grid');
        
        if (!container) return;
        
        container.innerHTML = featuredProjects.map(project => 
            this.renderProjectCard(project)
        ).join('');
        
        this.attachReadMoreListeners();
    }

    
    renderAllProjects() {
        const container = document.querySelector('.projects-grid');

        if(!container) return;

        container.innerHTML = this.projects.map(project => 
            this.renderProjectCard(project)
        ).join('');

        this.attachReadMoreListeners();
    }

    
    attachReadMoreListeners() {
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = e.target.closest('.read-more-btn').dataset.project;
                this.showProjectDetails(projectId);
            });
        });
    }

    
    showProjectDetails(projectId) {
        const project = this.projects.find(p => p.id == projectId);
        if (!project) return;

        
        console.log('Showing details for:', project.title);
        alert(`Details for ${project.title}\n\n${project.description}`);
    }
}

export default ProjectRenderer;
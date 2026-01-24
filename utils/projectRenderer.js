import projectsData from '../data/projects.js';

class ProjectRenderer {
    constructor() {
        this.projects = projectsData;
        window.addEventListener('themeChanged', () => {
            this.updateProjectImages();
        });
    }

    updateProjectImages() {
    document.querySelectorAll('.project-card').forEach(card => {
        const projectId = card.dataset.id;
        const project = this.projects.find(p => p.id == projectId);
        if (!project) return;

        const imgDiv = card.querySelector('.project-img');
        const newBg = this.getProjectBg(project);

        if (!newBg) return;

        imgDiv.style.opacity = '0';

        setTimeout(() => {
            imgDiv.style.backgroundImage = `url('${newBg}')`;
            imgDiv.style.opacity = '1';
        }, 150);
    });
}

    getProjectBg(project) {
        const isLight = document.body.classList.contains("light-mode");

        if (project.images) {
            const selectedImage = isLight ? project.images.dark : project.images.light;

            return selectedImage;
        }
        
        return project.image || '';
    }
    
    renderProjectCard(project) {
        const badgeHTML = project.badge ? 
            `<div class="project-badge">${project.badge}</div>` : '';
        
        const technologiesHTML = project.technologies.map(tech => 
            `<span>${tech}</span>`
        ).join('');

        const bgImage = this.getProjectBg(project);
        const bgStyle = bgImage ? `background-image: url('${bgImage}')` : '';
        
        return `
            <div class="project-card project-hover" data-id="${project.id}">
                <div class="project-img" style="${bgStyle}">
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

    document.body.style.overflow = 'hidden';

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay project-detail-overlay';

    const image = this.getProjectBg(project);

    const badgeHTML = project.badge ? 
        `<div class="project-detail-badge">${project.badge}</div>` : '';

    const featuresHTML = project.features ? `
        <div class="project-features">
            <h3>Key Features</h3>
            <div class="features-list">
                ${project.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
        </div>
    ` : '';

    overlay.innerHTML = `
        <div class="modal project-detail-modal">
            <button class="modal-close">&times;</button>
            
            <div class="project-detail-image"
                style="background-image: url('${image}')">
                ${badgeHTML}
            </div>
            
            <div class="project-detail-content">
                <h2>${project.title}</h2>
                <p class="project-card-description">${project.description}</p>
                
                <div class="project-detailed-description">
                    <h3>Project Overview</h3>
                    <p>${project.detailedDescription}</p>
                </div>
                
                ${featuresHTML}
                
                <div class="project-tech-details">
                    <h3>Technologies Used</h3>
                    <div class="project-tech">
                        ${project.technologies.map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-detail-actions">
                    ${project.liveUrl && project.liveUrl !== '#' ? `
                    <a href="${project.liveUrl}" target="_blank" class="btn">
                        <i class="fas fa-external-link-alt"></i> Live Preview
                    </a>` : ''}

                    ${project.codeUrl && project.codeUrl !== '#' ? `
                    <a href="${project.codeUrl}" target="_blank" class="btn outline">
                        <i class="fab fa-github"></i> View Code
                    </a>` : ''}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('.modal-close').addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            overlay.remove();
            document.body.style.overflow = '';
        }
    });
}
}

export default ProjectRenderer;
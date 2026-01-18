import ProjectRenderer from '../utils/projectRenderer.js';

const modalModule = {
    projectRenderer: null,
    
    init() {
        this.projectRenderer = new ProjectRenderer();
        this.projectRenderer.renderFeaturedProjects();
        this.initProjectsModal();
    },
    
    initProjectsModal() {
        const seeAllBtn = document.getElementById('seeAllBtn');
        if (!seeAllBtn) return;

        seeAllBtn.addEventListener('click', () => {
            this.createProjectsModal();
        });
    },
    
    createProjectsModal() {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        modalOverlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2>All Projects</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="projects-grid modal-projects">
                    ${this.projectRenderer.projects.map(project => 
                        this.projectRenderer.renderProjectCard(project)
                    ).join('')}
                </div>
            </div>
        `;
        
        document.body.appendChild(modalOverlay);
        
        this.setupModalClose(modalOverlay);
        
        setTimeout(() => {
            this.projectRenderer.attachReadMoreListeners();
        }, 100);
    },
    
    setupModalClose(modalOverlay) {
        const closeBtn = modalOverlay.querySelector('.modal-close');
        
        const closeModal = () => {
            modalOverlay.style.opacity = '0';
            setTimeout(() => {
                modalOverlay.remove();
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeModal);
        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
        
        const escHandler = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', escHandler);
        
        modalOverlay._escHandler = escHandler;
    }
};

export default modalModule;
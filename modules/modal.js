import ProjectRenderer from '../utils/projectRenderer.js';

const modalModule = {
    projectRenderer: null,
    scrollPosition: 0,
    
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

        this.scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
        document.body.style.top = `-${this.scrollPosition}px`;

        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';

        const available = this.projectRenderer.projects.filter(project => !project.comingSoon).length;
        
        modalOverlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h2>All Projects (${available})</h2>
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

                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.height = '';
                document.body.style.top = '';

                document.body.getBoundingClientRect();

                window.scrollTo({
                top: this.scrollPosition,
                behavior: 'instant'
            });

                document.removeEventListener('keydown', modalOverlay._escHandler);
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
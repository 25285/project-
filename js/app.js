/**
 * Main Application Logic
 * Modern, Interactive, Dynamic Portfolio Engine
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize State (Load saved profile or fallback to defaults)
    let currentData = JSON.parse(localStorage.getItem("customPortfolioData")) || portfolioData;
    
    // Theme & Accent State
    const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
    const savedAccent = localStorage.getItem("portfolioAccent") || "emerald";

    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("data-accent", savedAccent);

    updateThemeToggleIcon(savedTheme);
    updateAccentDotActive(savedAccent);

    // 2. Render Page Content
    renderAllSections(currentData);

    // 3. Setup Event Listeners
    setupNavigation();
    setupThemeAndAccentControls();
    setupFilters();
    setupContactForm();
    setupProfileEditorModal(currentData);
    setupScrollAnimations();
    initTypingEffect(currentData.profile.role);
});

/* ==========================================================================
   Section Renderers
   ========================================================================== */

function renderAllSections(data) {
    renderHeaderAndHero(data.profile);
    renderAbout(data.profile);
    renderSkills(data.skills);
    renderExperience(data.experience);
    renderProjects(data.projects);
    renderEducation(data.education);
    renderCertifications(data.certifications);
    renderAchievements(data.achievements);
    renderContactInfo(data.profile);
}

function renderHeaderAndHero(profile) {
    // Header Logo & Title
    const logoName = document.getElementById("logo-name");
    const logoBadge = document.getElementById("logo-badge");
    if (logoName) logoName.textContent = profile.name;
    if (logoBadge) logoBadge.textContent = profile.name.charAt(0);

    // Hero Text & Links
    const heroName = document.getElementById("hero-name");
    const heroTagline = document.getElementById("hero-tagline");
    const heroStatus = document.getElementById("hero-status");
    const heroAvatar = document.getElementById("hero-avatar");
    
    if (heroName) heroName.textContent = profile.name;
    if (heroTagline) heroTagline.textContent = profile.tagline;
    if (heroStatus) heroStatus.textContent = profile.status || "Available for work";
    if (heroAvatar) heroAvatar.src = profile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";

    // Social Links
    const socialGithub = document.getElementById("social-github");
    const socialLinkedin = document.getElementById("social-linkedin");
    const socialTwitter = document.getElementById("social-twitter");

    if (socialGithub) socialGithub.href = profile.links.github || "#";
    if (socialLinkedin) socialLinkedin.href = profile.links.linkedin || "#";
    if (socialTwitter) socialTwitter.href = profile.links.twitter || "#";
}

function renderAbout(profile) {
    const aboutTextContainer = document.getElementById("about-text-container");
    const statsContainer = document.getElementById("stats-container");

    if (aboutTextContainer) {
        aboutTextContainer.innerHTML = `<p class="about-text">${escapeHTML(profile.about)}</p>`;
    }

    if (statsContainer && profile.stats) {
        statsContainer.innerHTML = profile.stats.map(stat => `
            <div class="stat-box">
                <div class="stat-number">${escapeHTML(stat.value)}</div>
                <div class="stat-label">${escapeHTML(stat.label)}</div>
            </div>
        `).join("");
    }
}

function renderSkills(skills) {
    const skillsGrid = document.getElementById("skills-grid");
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card" data-category="${escapeHTML(skill.category)}">
            <div class="skill-header">
                <div class="skill-info">
                    <div class="skill-icon-badge">
                        <i class="lucide lucide-${getSkillIcon(skill.icon)}"></i>
                    </div>
                    <span class="skill-name">${escapeHTML(skill.name)}</span>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
                <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join("");
}

function renderExperience(experience) {
    const timelineContainer = document.getElementById("experience-timeline");
    if (!timelineContainer) return;

    timelineContainer.innerHTML = experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3 class="timeline-role">${escapeHTML(exp.role)}</h3>
                    <span class="timeline-duration">${escapeHTML(exp.duration)}</span>
                </div>
                <div class="timeline-company">${escapeHTML(exp.company)} · ${escapeHTML(exp.location || '')}</div>
                <p class="timeline-description">${escapeHTML(exp.description)}</p>
                ${exp.highlights && exp.highlights.length ? `
                    <ul class="timeline-highlights">
                        ${exp.highlights.map(h => `<li>${escapeHTML(h)}</li>`).join("")}
                    </ul>
                ` : ""}
                <div class="timeline-tech">
                    ${(exp.tech || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("")}
                </div>
            </div>
        </div>
    `).join("");
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById("projects-grid");
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(proj => `
        <div class="project-card" data-category="${escapeHTML(proj.category)}">
            <div class="project-img-wrapper">
                <img src="${proj.image}" alt="${escapeHTML(proj.title)}" class="project-img" loading="lazy">
                <span class="project-category-badge">${escapeHTML(proj.category)}</span>
            </div>
            <div class="project-body">
                <h3 class="project-title">${escapeHTML(proj.title)}</h3>
                <p class="project-desc">${escapeHTML(proj.description)}</p>
                <div class="project-tags">
                    ${(proj.tags || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("")}
                </div>
                <div class="project-footer">
                    <button class="btn btn-secondary btn-sm open-project-modal" data-id="${proj.id}">
                        <span>Details</span>
                        <i class="lucide lucide-external-link"></i>
                    </button>
                    <div class="project-links">
                        ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" class="btn-icon" title="View Source"><i class="lucide lucide-github"></i></a>` : ''}
                        ${proj.demoUrl ? `<a href="${proj.demoUrl}" target="_blank" class="btn-icon" title="Live Preview"><i class="lucide lucide-globe"></i></a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    // Attach click handlers for detail modal
    document.querySelectorAll(".open-project-modal").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const projId = e.currentTarget.getAttribute("data-id");
            const project = projects.find(p => p.id === projId);
            if (project) openProjectDetailModal(project);
        });
    });
}

function renderEducation(education) {
    const eduContainer = document.getElementById("education-container");
    if (!eduContainer) return;

    eduContainer.innerHTML = education.map(edu => `
        <div class="edu-card">
            <div class="card-icon">
                <i class="lucide lucide-graduation-cap"></i>
            </div>
            <div class="card-details">
                <h4>${escapeHTML(edu.degree)}</h4>
                <div class="card-subtitle">${escapeHTML(edu.institution)}</div>
                <div class="card-meta">${escapeHTML(edu.duration)} ${edu.honors ? `· ${escapeHTML(edu.honors)}` : ''}</div>
                <p class="card-description">${escapeHTML(edu.description || '')}</p>
            </div>
        </div>
    `).join("");
}

function renderCertifications(certifications) {
    const certContainer = document.getElementById("certifications-container");
    if (!certContainer) return;

    certContainer.innerHTML = certifications.map(cert => `
        <div class="cert-card">
            <div class="card-icon">
                <i class="lucide lucide-shield-check"></i>
            </div>
            <div class="card-details">
                <h4>${escapeHTML(cert.title)}</h4>
                <div class="card-subtitle">${escapeHTML(cert.issuer)}</div>
                <div class="card-meta">${escapeHTML(cert.date)}</div>
                ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" class="nav-link" style="font-size: 0.85rem">Verify Credential →</a>` : ''}
            </div>
        </div>
    `).join("");
}

function renderAchievements(achievements) {
    const achieveContainer = document.getElementById("achievements-grid");
    if (!achieveContainer) return;

    achieveContainer.innerHTML = achievements.map(ach => `
        <div class="achieve-card">
            <div class="card-icon">
                <i class="lucide lucide-trophy"></i>
            </div>
            <div class="card-details">
                <h4>${escapeHTML(ach.title)}</h4>
                <p class="card-description" style="margin-top: 0.4rem;">${escapeHTML(ach.description)}</p>
            </div>
        </div>
    `).join("");
}

function renderContactInfo(profile) {
    const contactEmail = document.getElementById("contact-email");
    const contactPhone = document.getElementById("contact-phone");
    const contactLocation = document.getElementById("contact-location");

    if (contactEmail) contactEmail.textContent = profile.email || "email@example.com";
    if (contactPhone) contactPhone.textContent = profile.phone || "+1 555-000-0000";
    if (contactLocation) contactLocation.textContent = profile.location || "San Francisco, CA";
}

/* ==========================================================================
   Interactive Controls & Listeners
   ========================================================================== */

function setupNavigation() {
    const navbar = document.querySelector(".navbar");
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Scroll Header Style
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile Nav Menu Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }
}

function setupThemeAndAccentControls() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("portfolioTheme", newTheme);
            updateThemeToggleIcon(newTheme);
            showToast(`Switched to ${newTheme.toUpperCase()} mode`);
        });
    }

    // Accent dots
    document.querySelectorAll(".accent-dot").forEach(dot => {
        dot.addEventListener("click", (e) => {
            const accent = e.currentTarget.getAttribute("data-color");
            document.documentElement.setAttribute("data-accent", accent);
            localStorage.setItem("portfolioAccent", accent);
            updateAccentDotActive(accent);
            showToast(`Accent color updated!`);
        });
    });
}

function updateThemeToggleIcon(theme) {
    const icon = document.querySelector("#theme-toggle-btn i");
    if (icon) {
        icon.className = theme === "dark" ? "lucide lucide-sun" : "lucide lucide-moon";
    }
}

function updateAccentDotActive(accent) {
    document.querySelectorAll(".accent-dot").forEach(dot => {
        dot.classList.toggle("active", dot.getAttribute("data-color") === accent);
    });
}

function setupFilters() {
    // Skills Filter
    const skillButtons = document.querySelectorAll(".skills-filter .filter-btn");
    skillButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            skillButtons.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const category = e.currentTarget.getAttribute("data-filter");
            document.querySelectorAll(".skill-card").forEach(card => {
                if (category === "All" || card.getAttribute("data-category") === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Projects Filter
    const projectButtons = document.querySelectorAll(".projects-filter .filter-btn");
    projectButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            projectButtons.forEach(b => b.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const category = e.currentTarget.getAttribute("data-filter");
            document.querySelectorAll(".project-card").forEach(card => {
                if (category === "All" || card.getAttribute("data-category") === category) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email-input").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !message) {
            showToast("Please complete all required fields.", "error");
            return;
        }

        // Simulate successful submission
        showToast("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}

/* ==========================================================================
   Modals & Live Profile Editor
   ========================================================================== */

function openProjectDetailModal(project) {
    const modal = document.getElementById("project-detail-modal");
    const container = document.getElementById("project-detail-content");
    if (!modal || !container) return;

    container.innerHTML = `
        <img src="${project.image}" alt="${escapeHTML(project.title)}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
        <span class="project-category-badge" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${escapeHTML(project.category)}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; margin-bottom: 0.75rem;">${escapeHTML(project.title)}</h2>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${escapeHTML(project.details || project.description)}</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
            ${(project.tags || []).map(t => `<span class="tech-tag">${escapeHTML(t)}</span>`).join("")}
        </div>
        <div style="display: flex; gap: 1rem;">
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" class="btn btn-primary"><i class="lucide lucide-globe"></i> Visit Live Demo</a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary"><i class="lucide lucide-github"></i> View Repository</a>` : ''}
        </div>
    `;

    modal.classList.add("active");
}

function setupProfileEditorModal(currentData) {
    const openBtn = document.getElementById("edit-profile-btn");
    const modal = document.getElementById("editor-modal");
    const closeBtn = document.getElementById("close-editor-modal");
    const saveBtn = document.getElementById("save-profile-data");
    const resetBtn = document.getElementById("reset-profile-data");

    if (!modal) return;

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // Populate form fields with current data
            document.getElementById("edit-name").value = currentData.profile.name || "";
            document.getElementById("edit-role").value = currentData.profile.role || "";
            document.getElementById("edit-tagline").value = currentData.profile.tagline || "";
            document.getElementById("edit-about").value = currentData.profile.about || "";
            document.getElementById("edit-email").value = currentData.profile.email || "";
            document.getElementById("edit-phone").value = currentData.profile.phone || "";
            document.getElementById("edit-location").value = currentData.profile.location || "";
            document.getElementById("edit-github").value = currentData.profile.links.github || "";
            document.getElementById("edit-linkedin").value = currentData.profile.links.linkedin || "";

            modal.classList.add("active");
        });
    }

    // Modal close buttons
    document.querySelectorAll(".modal-close, .close-modal-trigger").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
        });
    });

    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            currentData.profile.name = document.getElementById("edit-name").value.trim() || currentData.profile.name;
            currentData.profile.role = document.getElementById("edit-role").value.trim() || currentData.profile.role;
            currentData.profile.tagline = document.getElementById("edit-tagline").value.trim() || currentData.profile.tagline;
            currentData.profile.about = document.getElementById("edit-about").value.trim() || currentData.profile.about;
            currentData.profile.email = document.getElementById("edit-email").value.trim() || currentData.profile.email;
            currentData.profile.phone = document.getElementById("edit-phone").value.trim() || currentData.profile.phone;
            currentData.profile.location = document.getElementById("edit-location").value.trim() || currentData.profile.location;
            currentData.profile.links.github = document.getElementById("edit-github").value.trim() || currentData.profile.links.github;
            currentData.profile.links.linkedin = document.getElementById("edit-linkedin").value.trim() || currentData.profile.links.linkedin;

            // Save to localStorage
            localStorage.setItem("customPortfolioData", JSON.stringify(currentData));

            // Re-render
            renderAllSections(currentData);
            modal.classList.remove("active");
            showToast("Portfolio data updated successfully!");
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Reset profile data back to default template?")) {
                localStorage.removeItem("customPortfolioData");
                location.reload();
            }
        });
    }
}

/* ==========================================================================
   Utilities & Animations
   ========================================================================== */

function showToast(message, type = "success") {
    let container = document.querySelector(".toast-container");
    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="lucide lucide-${type === 'success' ? 'check-circle' : 'alert-circle'}"></i> <span>${escapeHTML(message)}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function initTypingEffect(text) {
    const target = document.getElementById("typing-role");
    if (!target) return;
    
    target.textContent = text;
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section-header, .stat-box, .project-card, .timeline-content").forEach(el => {
        observer.observe(el);
    });
}

function getSkillIcon(iconName) {
    const map = {
        "code": "code-2",
        "layout": "layout-template",
        "palette": "palette",
        "server": "server",
        "terminal": "terminal",
        "database": "database",
        "container": "box",
        "cloud": "cloud",
        "network": "network",
        "git-branch": "git-branch"
    };
    return map[iconName] || "code-2";
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

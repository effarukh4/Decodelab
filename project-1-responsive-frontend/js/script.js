/* =========================================================
   Nova — Basic UI interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initMobileNav();
    initSmoothAnchorClose();
});

/**
 * Mobile Navigation
 * Toggles the nav-links panel and keeps aria-expanded in sync.
 */
function initMobileNav() {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
}

/**
 * Close the mobile menu automatically after a nav link is clicked,
 * so users aren't left staring at an open panel after navigating.
 */
function initSmoothAnchorClose() {
    const navLinks = document.getElementById("nav-links");
    const menuBtn = document.getElementById("menu-btn");

    if (!navLinks || !menuBtn) return;

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}

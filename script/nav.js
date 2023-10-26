
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.mobile-nav-toggle');
const closeToggle = document.querySelector('.mobile-nav-toggle-close');

function menuToggle() {
    return () => {
        const menuState = menu.getAttribute('data-visible');
        const newState = !(menuState === 'true');
        menu.setAttribute('data-visible', newState);
        toggle.setAttribute("aria-expanded", newState);
        closeToggle.setAttribute("aria-expanded", newState);
    };
}

toggle.addEventListener("click", menuToggle());
closeToggle.addEventListener("click", menuToggle());

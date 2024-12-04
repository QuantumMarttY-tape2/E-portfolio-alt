// Email template ID template_jhdancm
// Service ID service_l8xhkxb
// Public API key Q-vcGmCqfm9q5IH5L

// Send email section

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_l8xhkxb',
            'template_jhdancm',
            event.target,
            'Q-vcGmCqfm9q5IH5L'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavaliable. Please contact me directly on fukunyunqmty@gmail.com"
            )
        })
}

// Open email interface section

let isModalOpen = false;

function toggleModal() {
    // First click to show, second click to hide, and so on.
    isModalOpen = !isModalOpen;
    if (!isModalOpen) {
        return document.body.classList.remove("modal--open")
    }
    document.body.classList += " modal--open"
}

// Light mode and dark mode

let contrastToggle = false;

function toggleContrast() {
    // Default light mode, toggle for dark mode
    contrastToggle = !contrastToggle;
    if (!contrastToggle) {
        return document.body.classList.remove("dark-theme")
    }
    document.body.classList += " dark-theme"
}

// Background Shapes

const scaleFactor = 1/20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");

    // Mouse position
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        // Moving the shapes
        const isOdd = 1 - (i % 2) * 2;
        shapes[i].style.transform = `translate(${x * isOdd}px, ${y * isOdd}px)`
    }
}
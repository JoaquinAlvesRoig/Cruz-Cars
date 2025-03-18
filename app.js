const faqs = document.querySelectorAll(".faq");
const faqs2 = document.querySelectorAll(".faq2");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    });
});

faqs2.forEach((faq2) => {
    faq2.addEventListener("click", () => {
        faq2.classList.toggle("active")
    });
});

function toggleAnswer(answerId, iconId) {
    var answer = document.getElementById(answerId);
    var icon = document.getElementById(iconId);

    // Debugging - Verifica si el ID de respuesta se está accediendo correctamente
    console.log(answerId, iconId);

    // Alternar la visibilidad de la respuesta
    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.style.transform = "rotate(0deg)"; // Volver a la posición original
    } else {
        answer.style.display = "block";
        icon.style.transform = "rotate(180deg)"; // Rotar el ícono hacia abajo
    }
}


// PAGINA AUTOS
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


document.addEventListener("DOMContentLoaded", function () {
    const preBtn = document.querySelector('.pre-btn');
    const nxtBtn = document.querySelector('.nxt-btn');
    const productoContainer = document.querySelector('.producto-container');
    
    // Función para mover el contenedor de productos a la izquierda
    preBtn.addEventListener('click', function() {
        productoContainer.scrollLeft -= 200;  // Mueve el contenedor a la izquierda
    });

    // Función para mover el contenedor de productos a la derecha
    nxtBtn.addEventListener('click', function() {
        productoContainer.scrollLeft += 200;  // Mueve el contenedor a la derecha
    });
});

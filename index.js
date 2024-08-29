document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Pegando os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Simulando o envio do formulário
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        // Limpando o formulário
        form.reset();
    });
});
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Fecha qualquer resposta aberta e reseta a seta
    const openAnswers = document.querySelectorAll('.faq-answer');
    const allArrows = document.querySelectorAll('.arrow');
    openAnswers.forEach(function(ans) {
        if (ans !== answer) {
            ans.style.display = 'none';
        }
    });
    allArrows.forEach(function(arr) {
        if (arr !== arrow) {
            arr.classList.remove('rotate');
        }
    });

    // Alterna a exibição da resposta e a rotação da seta
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.classList.remove('rotate');
    } else {
        answer.style.display = 'block';
        arrow.classList.add('rotate');
    }
}

let slideIndex = 0;
showSlides(slideIndex);

// Função para avançar ou retroceder o slide manualmente
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Função para mostrar o slide atual
function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


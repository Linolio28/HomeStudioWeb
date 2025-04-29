const imagesContainer = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel img');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let index = 0;
        
        function updateCarousel() {
            imagesContainer.style.transform = `translateX(${-index * 100}%)`;
        }
        
        function nextImage() {
            index = (index + 1) % images.length;
            updateCarousel();
        }
        
        function prevImage() {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        }
        
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);
        
        setInterval(nextImage, 3000); // Défilement automatique toutes les 3 secondes

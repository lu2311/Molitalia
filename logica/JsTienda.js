
const buttons = document.querySelectorAll("#add-to-cart"); 

buttons.forEach(function(button) {
    button.onclick = function() {
        
        if (this.style.backgroundColor === 'rgb(1, 98, 60)') {
            this.style.backgroundColor = 'white'; 
            this.style.color = 'black'; 
        } else {
            this.style.backgroundColor = '#01623c'; 
            this.style.color = 'white';
        }
    };
});

const images = document.querySelectorAll('.product-list article figure img');

    images.forEach(image => {
        image.addEventListener('mousemove', (event) => {
            const { width, height } = image.getBoundingClientRect();
            const centerX = width / 1.5;
            const centerY = height / 1.5;
            const offsetX = event.clientX -  centerX;
            const offsetY = event.clientY - centerY;
            const tiltX = (offsetY / centerY) * 7; //inclinación
            const tiltY = -(offsetX / centerX) * 2.5; //inclinación
            image.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'rotateX(0deg) rotateY(0deg)'; 
        });
    });
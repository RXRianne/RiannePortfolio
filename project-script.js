/* project-script.js */

document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.querySelector('.project-blob img');
    const thumbnails = document.querySelectorAll('.image-grid img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            this.src = tempSrc;
            
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const projectBlob = document.querySelector('.project-blob');
    projectBlob.style.animation = "morph 8s ease-in-out infinite";
    
});
function alertButton(){
    alert("you're amazing <3")
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.glitter-container');
    
    // Create and append glitter particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('glitter-particle');
        container.appendChild(particle);
    }

    // Update particle positions on mousemove
    document.addEventListener('mousemove', function(event) {
        const particles = document.querySelectorAll('.glitter-particle');
        particles.forEach(function(particle, index) {
            const delay = index * 50; // Add delay for staggered effect
            setTimeout(function() {
                const x = event.clientX + Math.random() * 20 - 10;
                const y = event.clientY + Math.random() * 20 - 10;
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.opacity = 1; // Show the particle
            }, delay);
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const character = document.getElementById('character');
    let posX = 50;
    let posY = 50;
    const speed = 2; // Speed of the character

    function moveCharacter() {
        character.style.transform = `translate(${posX}%, ${posY}%)`;
    }

    window.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'ArrowUp':
            case 'w':
                posY -= speed;
                break;
            case 'ArrowDown':
            case 's':
                posY += speed;
                break;
            case 'ArrowLeft':
            case 'a':
                posX -= speed;
                break;
            case 'ArrowRight':
            case 'd':
                posX += speed;
                break;
        }
        moveCharacter();
    });
});

const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

//prepare the stars
let stars =[];
const numStars = 200;

//setting the canvass size dynamically
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

//creating stars randomly
for(let i=0 ; i< numStars; i++){
    stars.push({
        x:Math.random() * canvas.width,
        y:math.random() * canvas.height,
        radius:Math.random() * 1.5,
        speed:Math.radom() * 0.5 + 0.2
    });
}

//draw stars on canvas
function drawStars(){
    ctx.clearRect(0 ,0, canvas.width , canvas.height);
    ctx.fillStyle ="white";
    ctx.beginPath();
    for(let i=0 ; i< numStars; i++){
        const star =  stars[i];
        ctx.moveTo(star.x , star.y);
        ctx.arc(star.x, star.y , star.radius , 0 , Math.PI*2);
    }
    ctx.fill();
}
// Move Stars Down
function moveStars() {
    for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        star.y += star.speed;
        if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
        }
    }
}
//Keep Animating
function animate() {
    drawStars();
    moveStars();
    requestAnimationFrame(animate);
    }
animate();

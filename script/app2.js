
const logo = document.querySelector('.logos h1');
logo.addEventListener('click', ()=> animationScroll(window.pageYOffset, - window.pageYOffset, 1250));



const navLink = document.querySelectorAll('.nav-link');
for (const navL of navLink) {
    navL.addEventListener('click', (event)=> {
        event.preventDefault();
        
        const targetEl = document.querySelector(navL.getAttribute('href'));        
        const distance = targetEl.getBoundingClientRect().top - 50;
        console.log(distance)

        animationScroll(window.pageYOffset, distance, 1250)
    });       
}



// FUNCTION
// animation
        function animationScroll(startPosition, distance, duration) {
        let startTime = null;
        function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        let runAnimation = animate(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, runAnimation);

        if(timeElapsed < duration) requestAnimationFrame(animation);
        
        }

        // ease-in-out expo
        let animate = function (t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        

        requestAnimationFrame(animation);

        }
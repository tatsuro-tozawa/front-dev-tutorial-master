document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cd = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            } else {
            }
        });
        // alert('instersecting');
    }
    const options = {
        root: null,
        rootMargin: "-300px 0px",
        threshold: [0, 0.5, 1]
    };

    const io = new IntersectionObserver(cd, options);
    els.forEach(el => io.observe(el));

});
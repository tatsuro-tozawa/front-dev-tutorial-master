class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerview: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerview: 2,
                }
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableOnInteration: false
        }, options);
        this.swiper.params.autoplay = {
            delay: 4000,
            disableOnInteration: false
        }
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}
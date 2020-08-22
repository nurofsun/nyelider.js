class Nyelider {
    constructor({size = 3, direction = 'horizontal', el = '.nyelider', withIndicator = false, autoPlay = false, delay = 3000}) {
        this.size = size;
        this.direction = direction;
        this.el = el;
        this.withIndicator = withIndicator;
        this.autoPlay = autoPlay;
        this.delay = delay;
    }
    init() {
        let mobileScreen = window.matchMedia('(max-width: 640px)');
        if (mobileScreen.matches) {
            this.size = 1;
        }
        let nyelider = document.querySelector(this.el),
            nyeliderGrid = nyelider.querySelector('.nyelider-grid'),
            nyeliderPosition = 0,
            nyeliderItems = nyelider.querySelectorAll('.nyelider-item'),
            nyeliderPerClickMove = 100 / this.size,
            nyeliderLimit = Math.floor((nyeliderPerClickMove * nyeliderItems.length) - (nyeliderPerClickMove * this.size)),
            nyeliderNext = nyelider.querySelector('.nyelider-next'),
            nyeliderPrev = nyelider.querySelector('.nyelider-prev');
        // initialize the size of slider items
        nyeliderItems.forEach((item) => {
            item.style.flexBasis = (100 / this.size) + '%';
        });
        // function to make nyelider indicator icon, and it's clickable
        const enableIndicator = () => {
            let result = '';
            if (result !== '') {
                let result = '';
            } 
            for (let i = 0; i < nyeliderItems.length / this.size; i++) {
                result += `<span class="icon"></span>`;
            }
            return result;
        }
        const itemAutoPlay = () => {
            if (nyeliderPosition >= nyeliderLimit) {
                nyeliderPosition = 0;
            } else {
                nyeliderPosition += nyeliderPerClickMove;
            }
            nyeliderGrid.style.right = nyeliderPosition + '%';
        }
        if (this.autoPlay) {
            setInterval(function() { itemAutoPlay() }, this.delay);
        }
        if (this.withIndicator) {
        nyelider.querySelector('.nyelider-indicator').innerHTML = enableIndicator();
            let nyeliderIndicators = nyelider.querySelectorAll(this.el + ' .nyelider-indicator > .icon');
            nyeliderIndicators.forEach((indicator,index) => {
                indicator.addEventListener('click', (event) => {
                    nyeliderPosition = (nyeliderPerClickMove * this.size) * index;
                    nyeliderGrid.style.right = nyeliderPosition + '%';
                });
            });
        } else {
            nyelider.querySelector('.nyelider-indicator').style.display = 'none';
        }
        nyeliderNext.addEventListener('click', (event) => {
            if (nyeliderPosition >= nyeliderLimit) {
                nyeliderPosition = 0;
            } else {
                nyeliderPosition += nyeliderPerClickMove;
            }
            nyeliderGrid.style.right = nyeliderPosition + '%';
        })
        nyeliderPrev.addEventListener('click', (event) => {
            if (nyeliderPosition <= 0) {
                nyeliderPosition = nyeliderLimit;
            } else {
                nyeliderPosition -= nyeliderPerClickMove;
            }
            nyeliderGrid.style.right = nyeliderPosition + '%';
        });
    }
}

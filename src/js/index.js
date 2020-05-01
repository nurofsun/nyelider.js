class Vlider {
    constructor({size = 3, direction = 'horizontal', el = '.vlider', withIndicator = false, autoPlay = false, delay = 3000}) {
        this.size = size;
        this.direction = direction;
        this.el = el;
        this.withIndicator = withIndicator;
        this.autoPlay = autoPlay;
        this.delay = delay;
    }
    init() {
        let vlider = document.querySelector(this.el),
            vliderGrid = vlider.querySelector('.vlider-grid'),
            vliderPosition = 0,
            vliderItems = vlider.querySelectorAll('.vlider-item'),
            vliderPerClickMove = 100 / this.size,
            vliderLimit = (vliderPerClickMove * vliderItems.length) - (vliderPerClickMove * this.size),
            vliderNext = vlider.querySelector('.vlider-next'),
            vliderPrev = vlider.querySelector('.vlider-prev');
        // initialize the size of slider items
        vliderItems.forEach((item) => {
            item.style.flexBasis = (100 / this.size) + '%';
        });
        // function to make vlider indicator icon, and it's clickable
        const enableIndicator = () => {
            let result = '';
            if (result !== '') {
                let result = '';
            } 
            for (let i = 0; i < vliderItems.length / this.size; i++) {
                result += `<span class="icon"></span>`;
            }
            return result;
        }
        const itemAutoPlay = () => {
            if (vliderPosition >= vliderLimit) {
                vliderPosition = 0;
            } else {
                vliderPosition += vliderPerClickMove;
            }
            vliderGrid.style.right = vliderPosition + '%';
        }
        if (this.autoPlay) {
            setInterval(function() { itemAutoPlay() }, this.delay);
        }
        if (this.withIndicator) {
        vlider.querySelector('.vlider-indicator').innerHTML = enableIndicator();
            let vliderIndicators = vlider.querySelectorAll(this.el + ' .vlider-indicator > .icon');
            vliderIndicators.forEach((indicator,index) => {
                indicator.addEventListener('click', (event) => {
                    vliderPosition = (vliderPerClickMove * this.size) * index;
                    vliderGrid.style.right = vliderPosition + '%';
                });
            });
        }
        // just for debugging
        console.log(`
            element: ${this.el},
            direction: ${this.direction},
            size: ${this.size}
        `)
        vliderNext.addEventListener('click', (event) => {
            if (vliderPosition >= vliderLimit) {
                vliderPosition = 0;
            } else {
                vliderPosition += vliderPerClickMove;
            }
            vliderGrid.style.right = vliderPosition + '%';
        })
        vliderPrev.addEventListener('click', (event) => {
            if (vliderPosition <= 0) {
                vliderPosition = vliderLimit;
            } else {
                vliderPosition -= vliderPerClickMove;
            }
            vliderGrid.style.right = vliderPosition + '%';
        });
    }
}

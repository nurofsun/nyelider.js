class Vlider {
    constructor({size = 3, direction = 'horizontal', el = '.vlider', withIndicator = false}) {
        this.size = size;
        this.direction = direction;
        this.el = el;
        this.withIndicator = withIndicator;
    }
    init() {
        let vlider = document.querySelector(this.el),
            vliderGrid = document.querySelector('.vlider-grid'),
            vliderPosition = 0,
            vliderItems = document.querySelectorAll('.vlider-item'),
            vliderPerClickMove = 100 / this.size,
            vliderLimit = (vliderPerClickMove * vliderItems.length) - (vliderPerClickMove * this.size),
            vliderNext = document.querySelector('.vlider-next'),
            vliderPrev = document.querySelector('.vlider-prev');
        // initialize the size of slider items
        vliderItems.forEach((item) => {
            item.style.flexBasis = (100 / this.size) + '%';
        });
        // function to make vlider indicator icon, and it's clickable
        const enableIndicator = () => {
            let result = '';
            for (let i = 0; i < this.size; i++) {
                result += `<span class="icon"></span>`;
            }
            return result;
        }
        if (this.withIndicator) {
            document.querySelector('.vlider-indicator').innerHTML = enableIndicator();
            let vliderIndicators = document.querySelectorAll('.vlider-indicator > .icon');
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

export function touchSwipeHandler(): void {
    let startX = 0;
    let endX = 0;

    const checkedElement = document.querySelector('input[type="radio"][name="slide"]:checked');

    function checkDirection(): void {
        if (endX < startX) {
            swipeRight();
            console.log('swipe right');
        } else {
            swipeLeft();
            console.log('swipe left');
        }
    }

    function swipeLeft(): void {
        if (checkedElement) {
            const nextElement = checkedElement.nextElementSibling as HTMLInputElement;
            if (nextElement) {
                nextElement.checked = true;
                console.log('checkedLeft');
            }
        }
    }

    function swipeRight(): void {
        if (checkedElement) {
            const previousElement = checkedElement.previousElementSibling as HTMLInputElement;
            if (previousElement) {
                previousElement.checked = true;
                console.log('checkedRight');
            }
        }
    }

    const container = document.getElementById('container');
    if (container) {
        container.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
        });
    }
    if (container) {
        container.addEventListener('touchend', function (e) {
            endX = e.touches[0].clientX;
            checkDirection();
        });
    }
}
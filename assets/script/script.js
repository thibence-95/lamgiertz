function doc() {

    function carousel() {

        let className = "carousel__photo";
        let items = carousel.getElementsByClassName(itemClassName),
            totalItems = items.length,
            slide = 0,
            moving = true;

        function setInitClasses() {

            items[totalItems - 1].classList.add("prev");
            items[0].classList.add("active");
            items[1].classList.add("next");

        }

        function setEventListeners() {

            var next = d.getElementsByClassName('carousel__button--next')[0],
                prev = d.getElementsByClassName('carousel__button--prev')[0];
            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
        }

        function moveNext() {

            //is it moving?
            if (!moving) {

                //reset to first if on last
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide++;
                }

                moveCarouselTo(slide);
            }
        }

        function movePrev() {

            //is it moving?
            if (!moving) {

                //reset to first if on last
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide--;
                }

                moveCarouselTo(slide);
            }
        }

        function disableInteraction() {
            // Set 'moving' to true for the same duration as our transition.
            // (0.5s = 500ms)

            moving = true;
            // setTimeout runs its function once after the given time
            setTimeout(function(){
                moving = false
            }, 500);
        }

        function moveCarouselTo(slide) {

            //is carousel moving?
            if (!moving) {

                disableInteraction()

                //update prev to next
                let newPrevious = slide - 1,
                    newNext = slide + 1,
                    oldPrevious = slide - 2,
                    oldNext = slide + 2;

                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                } else if (newNext >= (totalItems - 1)) {
                    oldNext = 0;
                }

                if (slide === 0) {
                    newPrevious = (totalItems - 1);
                    oldPrevious = (totalItems - 2);
                    oldNext = (slide + 1);
                } else if (slide === (totalItems -1)) {
                    newPrevious = (slide - 1);
                    newNext = 0;
                    oldNext = 1;
                }
                //triggered the transitions by adding/removing the classes
            }
        }
    }
}
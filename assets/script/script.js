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
                }
                else {
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
                }
                else {
                    slide--;
                }

                moveCarouselTo(slide);
        }
    }

}
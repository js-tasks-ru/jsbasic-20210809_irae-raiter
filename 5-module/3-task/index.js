function initCarousel() {
  const listOfPositions = document.querySelector('.carousel__inner');

  let count = 1;

  const prevPosition = document.querySelector('.carousel__arrow_left');
  const nextPosition = document.querySelector('.carousel__arrow_right');

  prevPosition.style.display = 'none';

  const displaySwitches = () => {
    if (count <= 1) {
      prevPosition.style.display = 'none';
    } else {
      prevPosition.style.display = '';
    }

    if (count === 4) {
      nextPosition.style.display = 'none';
    } else {
      nextPosition.style.display = '';
    }
  };

  const switchWidth = document.querySelector('.carousel__slide').offsetWidth;

  nextPosition.addEventListener('click', () => {
    if (count < 4) {
      listOfPositions.style.transform = `translateX(-${switchWidth * count}px)`;
      count++;
    }
    displaySwitches();
  });

  prevPosition.addEventListener('click', () => {
    if (count > 0) {
      count--;
      listOfPositions.style.transform = `translateX(-${switchWidth * (count - 1)}px)`;
    }
    displaySwitches();
  });
}

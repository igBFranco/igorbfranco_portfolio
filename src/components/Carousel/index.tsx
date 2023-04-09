import { useState } from 'react';
import styles from './Carousel.module.scss';
import Next  from '../../assets/next.svg';
import Prev from '../../assets/previous.svg';


function Carousel({ images }: { images: string[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrev() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function handleClickNext() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={handleClickPrev}>
        <img src={Prev} alt=""/>
      </button>
      <img className={styles.carouselImage} src={images[currentIndex]} alt="" />
      <button className={styles.nextButton} onClick={handleClickNext}>
        <img src={Next} alt=""/>
      </button>
    </div>
  );
}

export default Carousel;

import VanessaMarlene from '../assets/vanessa-marlene.jpeg';
import './image.css';

function ImageForHome() {
  return (
    <div>
      <img
        src={VanessaMarlene}
        alt='Vanessa and Marlene'
        className='vanessa-marlene-image'
      />
    </div>
  );
}

export default ImageForHome;

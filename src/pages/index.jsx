import VanessaMarlene from '../assets/vanessa-marlene.jpeg';
import './home.css';

function HomePage() {
  return (
    <div className='homepage-container'>
      <header className='homepage-header'>
        <h1>Welcome to Marlene and Vanessa&apos;s Six-Month Showcase</h1>
        <p>
          We are ready to take you on this exciting journey on this website made
          by the both of us to showcase our skills.
        </p>
        <p>
          We hope you enjoy our presentation and learn a bit more about our
          skills and achievements as interns in IBM iX so far!
        </p>
        <img
          src={VanessaMarlene}
          alt='Vanessa and Marlene'
          className='vanessa-marlene-image'
        />
        <div className='button-container'>
          <button
            className='nav-button'
            onClick={() => (window.location.href = '/Marlene')}
          >
            Marlene&apos;s Page
          </button>
          <button
            className='nav-button'
            onClick={() => (window.location.href = '/Vanessa')}
          >
            Vanessa&apos;s Page
          </button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;

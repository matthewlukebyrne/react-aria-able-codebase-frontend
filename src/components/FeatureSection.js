// import icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const FeatureSection = () => {
  return (
    <div data-testid='featuretest-id' className='services'>
      <div className='description'>
        {/* Title */}
        <h2>
          High <span>quality</span> components
        </h2>

        {/* 4 Cards Replicated */}
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-1' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-2' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-3' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='card'>
            <div className='icon'>
              <FontAwesomeIcon icon={faCoffee} title='icon-4' />
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>

      {/* Side Main Features Image */}
      <div className='image'>
        <img src='#' alt='features_image' />
      </div>
    </div>
  );
};

export default FeatureSection;

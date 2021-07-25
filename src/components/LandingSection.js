const LandingSection = () => {
  return (
    <div data-testid='landingtest-id'>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>Accessible</h2>
          </div>
          <div className='hide'>
            <h2>
              {' '}
              style <span> components </span>
            </h2>
          </div>
          <div className='hide'>
            <h2> made easy...</h2>
          </div>
        </div>
        <p>Download Now</p>
        <button>Find Out More</button>
      </div>
      <img src='#' alt='landing_image' />
    </div>
  );
};
export default LandingSection;

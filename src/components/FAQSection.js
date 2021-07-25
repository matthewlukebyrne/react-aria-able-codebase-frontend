const FAQSection = () => {
  return (
    <div data-testid='faqtest-id' className='faq'>
      <h2>
        Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>What is Aria-Able?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>Where can I access the components?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>Is there a documentation area?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
      </div>
      <div className='question'>
        <h4>Do I have to pay for these? Are they open source?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
            fugit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

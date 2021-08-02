import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { PonentState } from '../ponentState';


const PonentDetails = () => {

    // Using this hook I can find and locate the history
    const history = useHistory();
    
    // here I grab the pathname URL inside PonentDetails of all the components I have
    const url = history.location.pathname;

    // get the state of the ponents
    const [ components ] = useState(PonentState)

    // Extract that specific ponents based on the URL
    const [ ponent, setPonent ] = useState(null);


    // UseEffect (As soon as the component mounts or renders to the page)
    useEffect(() => {
        // Added in a setTimout to delayed the mount component
		setTimeout(() => {
        const currentPonent = components.filter((state) => state.url === url);
        // Go Inside and target the current movie inside the destructured array
        setPonent(currentPonent[0])
        }, 500);
    }, [components, url]);

    return (
      <>
        {/* Deliver the component OR */}
        {ponent && (
          <StyledDetails>
            <StyledHeadline>
              <h2>{ponent.title}</h2>
              <img src={ponent.mainImg} alt='main_img' />
              {/* Mapping out the data from PonentState and passing through */}
              <StyledStats>
                {ponent.features.map((features) => (
                  <Stats
                    usage={features.usage}
                    description={features.description}
                    key={features.title}
                  />
                ))}
              </StyledStats>
            </StyledHeadline>
          </StyledDetails>
        )}
      </>
    );
}

export default PonentDetails;


// Styled Components
const StyledDetails = styled.div`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        text-align: center;
        font-size: 2.5rem;
    }

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
        padding: 0rem 20rem;
    }
`;

const StylePonent = styled.div`
  h3 {
    font-size: 1.5rem;
    text-align: center;
  }
  .line {
    width: 100%;
    background: #f5f5f5;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
    text-align: center;
  }
`;


const StyledStats = styled.div`
  display: block;
  margin: 5rem 5rem;
  align-items: center;
  justify-content: space-around;

  // Inserted some mobile media queries
  @media (max-width: 1300px) {
    min-height: 0vh;
    margin: 5rem 2rem;
    padding: 0;
  }
`;

// Function to pass the stats and map above
const Stats = ({ usage, description }) => {
  return (
    <StylePonent>
      <h3>{usage}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StylePonent>
  );
};
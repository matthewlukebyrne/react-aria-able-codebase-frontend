import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  // Extracting the pathname from the useLocation() object previously logged to the console
  const { pathname } = useLocation();

  useEffect(() => {
    // Given the pathname you tell what you want to scroll to the top of the page
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;

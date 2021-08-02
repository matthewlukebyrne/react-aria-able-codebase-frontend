// Slowfade in and slow fadeout transitions on each page
export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
    // Needs to fade out   
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.3,
    },
  },
};

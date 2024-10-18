// animations.js
export const slideMenu = {
    hidden: { x: '-100%' },
    visible: { x: '0%', transition: { duration: 0.5 } },
  };
  
  export const staggerLinks = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  export const dropdownItem = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  
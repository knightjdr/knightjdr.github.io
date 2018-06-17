const ButtonBg = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (selection === index) {
    className = 'timeline__button_transition-center';
  } else if (selection > index) {
    className = 'timeline__button_transition-right';
  } else {
    className = 'timeline__button_transition-left';
  }

  // Add delay.
  if (selection === index) {
    className += ' timeline__button_transition-end';
  } else if (last === index) {
    className += ' timeline__button_transition-start';
  } else if (index === 1) {
    className += ' timeline__button_transition-inter';
  } else {
    className += ' timeline__button_transition-start';
  }

  return className;
};
export default ButtonBg;

const OuterButtonClass = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (selection === index) {
    className = 'Timeline-button-center-transition';
  } else if (selection > index) {
    className = 'Timeline-button-right-transition';
  } else {
    className = 'Timeline-button-left-transition';
  }

  // Add delay.
  if (selection === index) {
    className += ' Timeline-button-end-transition';
  } else if (last === index) {
    className += ' Timeline-button-start-transition';
  } else if (index === 1) {
    className += ' Timeline-button-inter-transition';
  } else {
    className += ' Timeline-button-start-transition';
  }

  return className;
};
export default OuterButtonClass;

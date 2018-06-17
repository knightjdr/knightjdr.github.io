const Connector = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (
    selection === 0 ||
    (
      selection === 1 &&
      index === 1
    )
  ) {
    className = 'timeline__connector_transition-right';
  } else {
    className = 'timeline__connector_transition-left';
  }

  // Add delay
  if (
    Math.abs(selection - last) === 2 &&
    (
      (
        selection === 0 &&
        index === 0
      ) ||
      (
        selection === 2 &&
        index === 1
      )
    )
  ) {
    className += ' timeline__connector_transition-end';
  } else {
    className += ' timeline__connector_transition-start';
  }
  return className;
};
export default Connector;

const ConnectorClass = (selection, last, index) => {
  let className = '';
  // Add transition.
  if (
    selection === 0 ||
    (
      selection === 1 &&
      index === 1
    )
  ) {
    className = 'Timeline-connector-right-transition';
  } else {
    className = 'Timeline-connector-left-transition';
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
    className += ' Timeline-connector-end-transition';
  } else {
    className += ' Timeline-connector-start-transition';
  }
  return className;
};
export default ConnectorClass;

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './fade-in-scroll.css';

class FadeInSroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      isVisible: false,
      onScrollAdded: null,
    };
  }
  componentDidMount = () => {
    const show = this.showContainer();
    if (!show) {
      window.addEventListener('scroll', this.handleScroll);
    }
    this.setState({
      duration: show ? 0 : this.props.duration,
      isVisible: show,
      onScrollAdded: !show,
    });
  }
  componentWillUnmount = () => {
    if (this.state.onScrollAdded) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  handleScroll = () => {
    if (this.state.onScrollAdded) {
      const show = this.showContainer();
      if (show) {
        window.removeEventListener('scroll', this.handleScroll);
        this.setState({
          isVisible: true,
          onScrollAdded: false,
        });
      }
    }
  }
  showContainer = () => {
    const { top } = this.elem.getBoundingClientRect();
    const bottom = window.innerHeight;
    return bottom > top - this.props.offset;
  }
  render() {
    return (
      <div
        className={`fade-scroll-container ${this.props.className}`}
        ref={(elem) => { this.elem = elem; }}
        style={{
          opacity: this.state.isVisible ? 1 : 0,
          transform: this.state.isVisible ? 'scale(1)' : `scale(${this.props.startingScale})`,
          transitionDuration: `${this.state.duration}s`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

FadeInSroll.defaultProps = {
  children: null,
  className: '',
  duration: 1,
  offset: 0,
  startingScale: 0.95,
};

FadeInSroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  duration: PropTypes.number,
  offset: PropTypes.number,
  startingScale: PropTypes.number,
};

export default FadeInSroll;

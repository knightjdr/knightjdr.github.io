import React from 'react';
import { shallow } from 'enzyme';

import NavbarContainer from './navbar-container';

const links = [
  {
    route: '/analysis',
    text: 'analysis',
  },
  {
    route: '/help',
    text: 'help',
  },
];

describe('NavbarContainer', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <NavbarContainer links={links} />,
    );
  });

  test('Resize listener bound on mount', () => {
    global.addEventListener = jest.fn();
    const mountedWrapper = shallow(
      <NavbarContainer links={links} />,
    );
    expect(global.addEventListener).toHaveBeenCalledWith('resize', mountedWrapper.instance().onResize);
  });

  test('Resize listener unbound on mount', () => {
    global.removeEventListener = jest.fn();
    const mountedWrapper = shallow(
      <NavbarContainer links={links} />,
    );
    const resize = mountedWrapper.instance().onResize;
    mountedWrapper.unmount();
    expect(global.removeEventListener).toHaveBeenCalledWith('resize', resize);
  });

  test('Screen is small when window width <= 680', () => {
    global.innerWidth = 680;
    global.dispatchEvent(new Event('resize'));
    expect(wrapper.instance().smallScreen()).toBeTruthy();
    global.innerWidth = 681;
    global.dispatchEvent(new Event('resize'));
    expect(wrapper.instance().smallScreen()).toBeFalsy();
  });

  test('Resizing window changes state', () => {
    global.innerWidth = 680;
    global.dispatchEvent(new Event('resize'));
    expect(wrapper.state('isSmallScreen')).toBeTruthy();
    global.innerWidth = 681;
    global.dispatchEvent(new Event('resize'));
    expect(wrapper.state('isSmallScreen')).toBeFalsy();
  });
});

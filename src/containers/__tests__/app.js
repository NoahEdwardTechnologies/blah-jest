/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer as App } from '../app';

const dispatch = () => null;

describe('<App />', () => {
  it('renders correctly', () => {
    expect(shallow(<App dispatch={dispatch} loaded />)).toMatchSnapshot();
  });
});

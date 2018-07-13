import React from 'react';
import TestRenderer from 'react-test-renderer';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


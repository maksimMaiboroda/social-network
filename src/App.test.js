import React from 'react';
import ReactDOM from 'react-dom';
import AppSocialNetwork from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppSocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Title from '../components/Title';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import CustomerInput from '../components/CustomerInput';
import TextInput from '../components/TextInput';
import Slider from '../components/Slider';
import Graph from '../components/Graph';
import Totals from '../components/Totals';
import Total from '../components/Total';

// could move these to individual component test files later, or put them all in one describe block so I don't have to repeat the same thing every time

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Title without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Main without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Sidebar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CustomerInput without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders TextInput without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Slider without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Graph without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Graph />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Totals without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Totals />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Total without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Total />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, name),
    React.createElement('h3', {}, animal),
    React.createElement('h3', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Hello from basic React'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havansese',
    }),
    React.createElement(Pet, {
      name: 'Steve',
      animal: 'Bird',
      breed: 'Ancient',
    }),
    React.createElement(Pet, {
      name: 'Harry',
      animal: 'Lizard',
      breed: 'Cool',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

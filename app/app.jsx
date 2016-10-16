
import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

render(<App />, document.getElementById('app'));
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')




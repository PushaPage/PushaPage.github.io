import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/store/Store';
import { rerenderEntireTree } from './components/render/Render';
import './components/sass-utils/fonts.css';

  
		
rerenderEntireTree(store)


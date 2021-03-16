'use strict';
    
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import teamImage from './modules/teamImage';
import calculate from './modules/calculate';
import connect from './modules/connect';
import sendForm from './modules/sendForm';

// Timer
countTimer('18 march 2021');

// Menu
toggleMenu();

// Popup
togglePopup();

// Tabs
tabs();

// Slider
slider();

// Team
teamImage();

// Calculator
calculate(100);

// Connect
connect();

// send-ajax-form   
sendForm();

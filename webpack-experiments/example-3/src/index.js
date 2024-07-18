// src/index.js
import './styles.css';
import { greet } from './greeting';
import logo from './assets/logo.png';

const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

greet();

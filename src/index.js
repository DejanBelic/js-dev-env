import style from "./_scss/main.scss";
import { calculate } from './js/calculate';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

calculate(5, 5);
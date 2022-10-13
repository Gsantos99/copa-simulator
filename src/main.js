
import './assets/css/style.css';
import './modules/gerador'
import { Copa } from './modules/gerador';
import './modules/paginas'

console.log('Main.js ON')

let copa = new Copa;
copa.geraGrupos();
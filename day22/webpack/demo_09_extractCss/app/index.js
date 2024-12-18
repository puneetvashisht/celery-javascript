// require('./styles/globalStyle.css');
const globalStyle = require('./styles/globalStyle.css');

import {add} from './mathStuff';

let newSection = ()=>(
	`
		<p class="${globalStyle.box}">
			${add(2,8)}
		</p>
	`
);
let app = document.getElementById('mount');


app.innerHTML = newSection();
 
if(module.hot){
	module.hot.accept();
} 



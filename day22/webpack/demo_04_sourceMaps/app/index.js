
import Button from './button';

let newBtn = ()=>Button.button;
let app = document.getElementById('mount');


app.innerHTML = newBtn();
Button.attachEl(Button.button);
 
if(module.hot){
	module.hot.accept();
} 



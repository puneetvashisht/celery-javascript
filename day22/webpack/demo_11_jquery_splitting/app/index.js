const globalStyle = require('./styles/globalStyle.css');
const page1 = require('./page1');
import $ from 'jquery';

$(document).ready(function(){
	console.log('ready');
	console.log('a small change');
	console.log(page1.default);
})

var app = document.getElementById('mount');
app.innerHTML = `
	<div id="menu">
		<button id="loadPage1">Load Page 1</button>
		<button id="loadPage2">Load Page 2</button>
	</div>
	<div id="content" class="${globalStyle.box}">
		<h1>Home</h1>
	</div>
`;

document.getElementById('loadPage1').addEventListener('click', ()=>{

		document.getElementById('content').innerHTML = page1.default;

});

$('#loadPage2').click(()=>{
	$('#content').html("page2");

	// System.import('./page2').then(page2=>{
	// 	$('#content').html(page2.default);
	// })
});
 
if(module.hot){
	module.hot.accept();
} 



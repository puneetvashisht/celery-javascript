const Button = {
	button: `<button id="btn">Press Me</button>`,
	attachEl: (element)=>{
        document.getElementById('btn').addEventListener('click', ()=>{
			console.log("Pressed...");
        })
	}
}

export default Button;
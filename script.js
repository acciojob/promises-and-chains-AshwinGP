//your JS code here. If required.
let button=documnet.getElementById("btn");
var name=document.getElementById("name").value;
var age=document.getElemenById("age").value;

function  onClick(){
	return promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Welcome, ${name}. You can vote.`)
			}
		},4000)
	})
}
button.addEventListener('click',onClick().then((res)=>{
	alert(res);
}))

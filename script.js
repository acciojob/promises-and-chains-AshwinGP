//your JS code here. If required.
var button=document.getElementById("btn");
// var name=document.getElementById("name").value;
// var age=document.getElemenById("age").value;

function  onClick(){
	return promise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
            var name=document.getElementById("name").value;
		
            var age=document.getElementById("age").value;

			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Welcome, ${age}. You can vote.`)
			}
		},4000)
	})
}
button.addEventListener('click',onClick.then((res)=>{
	alert(res);
}).catch((res)=>{
  alert(res);
}));

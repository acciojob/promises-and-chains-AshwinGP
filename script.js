//your JS code here. If required.
var button=document.getElementById("btn");
// var name=document.getElementById("name").value;
// var age=document.getElemenById("age").value;

var onclick=new Promise((resolve,reject)=>{
		setTimeout(()=>{
            var name=document.getElementById("name").value;
		
            var age=document.getElementById("age").value;

			if(age>=18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Welcome, ${name}. You aren't old enough.`)
			}
		},4000)
	});
button.addEventListener('click',onClick.then((res)=>{
	alert(res);
}).catch((res)=>{
  alert(res);
}));

let formbutton = document.getElementById("btn");
function promiseApi1(name , age)
{
 return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(age > 18)
            {
                resolve(
                    `Welcome, ${name}. You can vote.`
                    )
                
            }
            else
            {
                 reject(`Oh sorry ${name}. You aren't old enough.`)
            }
        } , 4000)
 })
}
formbutton.addEventListener("click" , (event) => {
    event.preventDefault();
    let nameinput = document.getElementById("name").value;
    let ageinput = document.getElementById("age").value;
    promiseApi1(nameinput,ageinput).then((res)=>alert(res)).catch((err)=>alert(err));
})
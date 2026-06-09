let button = document.getElementById("btn");
button.addEventListener("click",function(){
    let input = document.getElementById("input");
    let value = input.value;

    let li = document.createElement("li");
    li.innerHTML = value;

    document.getElementById("list").appendChild(li);
    input.value="";
});
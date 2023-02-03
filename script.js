window.onload = ()=>{
    alert("Testing something");
    document.body.style.backgroundColor = "green"
    let div = document.createElement("div")
    div.style.width = "400px"
    div.style.height = "400px"
    div.style.backgroundColor = "purple";
    document.body.appendChild(div)
}
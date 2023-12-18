var button=document.createElement("button");
button.setAttribute("type","button");
button.innertext="confirm";
document.body.append(button);
button.addEventListener("click",dabba);
function dabba()
{
    var res=confirm("hey king you dropped this❤");
     console.log(res);
}


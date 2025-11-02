const ul=document.getElementById("lista");
["Uno","Dos","Tres"].forEach(t=>{const li=document.createElement("li");li.textContent=t;ul.appendChild(li);});
const li4=document.createElement("li");li4.textContent="Cuatro";ul.appendChild(li4);
ul.removeChild(ul.children[1]);
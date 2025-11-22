const items = document.querySelectorAll("li");

items.forEach(li => {
    li.classList.add("resaltado");    
    li.classList.remove("oculto");     
});

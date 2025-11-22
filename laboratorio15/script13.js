document.getElementById("btnClonar").addEventListener("click", () => {
    const article = document.querySelector("article");
    const clone = article.cloneNode(true);
    document.querySelector("main").appendChild(clone);
});

document.getElementById("btn").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(res => res.json())
        .then(data => {
            document.getElementById("nombre").textContent = "Nombre: " + data.name;
            document.getElementById("email").textContent = "Email: " + data.email;
            document.getElementById("ciudad").textContent = "Ciudad: " + data.address.city;
        })
        .catch(error => {
            console.log("Error:", error);
        });
});

function Mayor(n1, n2, n3){
    if (n1 >= n2 && n1 >= n3){
        return n1;
    } else if (n2 >= n1 && n2 >= n3){
        return n2;
    } else{
        return n3;
    }
}
console.log("el numero mayor es: " + Mayor(12,19,16));
console.log("el numero mayor es: " + Mayor(20,19,16));
console.log("el numero mayor es: " + Mayor(12,19,35));
document.getElementById("boton").addEventListener("click", function() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número del 1 al 100
    const ruleta = document.getElementById("ruleta");
    const numero = document.getElementById("numero");
    
    ruleta.style.transform = `rotate(${Math.random() * 360}deg)`; // Rota la ruleta
    setTimeout(() => {
        numero.textContent = numeroAleatorio; // Muestra el número después de girar
    }, 500); // Espera medio segundo antes de mostrar el número
});

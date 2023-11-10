
    function changeText() {
        let nuevo_nombre = prompt("Cual es tu Nombre ?");
            const refTitle = document.getElementById("nombre")
            refTitle.innerHTML = `Hola ${nuevo_nombre}`;
        }

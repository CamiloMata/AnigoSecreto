// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
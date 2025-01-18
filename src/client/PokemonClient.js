function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        // arreglo.push(obtenerAleatorio(1, 600));
        arreglo[i] = obtenerAleatorio(1, 600);
    }
    return arreglo;
}

const obtenerArregloPokemons = async (arreglo) => {

    const nom1 = await consumiAPI(arreglo[0]);
    const nom2 = await consumiAPI(arreglo[1]);
    const nom3 = await consumiAPI(arreglo[2]);
    const nom4 = await consumiAPI(arreglo[3]);

    const obj1 = {
        nombre: nom1,
        id: arreglo[0],
    };
    const obj2 = {
        nombre: nom2,
        id: arreglo[1],
    };
    const obj3 = {
        nombre: nom3,
        id: arreglo[2],
    };
    const obj4 = {
        nombre: nom4,
        id: arreglo[3],
    };
    const arregloPokemons = [obj1, obj2, obj3, obj4];

    return arregloPokemons;



}

const consumiAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())

    return data.name;

}


const consultarPokemons = async () => {
    return await obtenerArregloPokemons(obtenerArregloNumerico());
}

//FACHADAS
export const consultarPokemonsFachada = async () => {
    return await consultarPokemons();
}

export function obtenerAleatorioFachada(min, max) {
    return obtenerAleatorio(min, max);
}



//Esto se usa solo para cuando quiero exportar una sola funcion
//export default consultarPokemonsFachada;

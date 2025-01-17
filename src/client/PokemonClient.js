function obtenerAleatorio(min,max){
    return Math.floor(Math.random() * (ma-min+1)+min);
}

const obtenerArregloNumerico=()=>{
    const arreglo=[];
    for(let i=0; i<4;i++){
        arreglo[i] = obtenerAleatorio(1,600);

    }
    return arreglo;

}

const obtenerArregloPokemon = async (arreglo) => {
    const arregloPokemons = [];
    const obj1={

    }

    const obj2={

    }
    const obj3={

    }
    const obj4={

    }
    arregloPokemons[0]=obj1;
    arregloPokemons[1]=obj1;
    arregloPokemons[2]=obj1;
    arregloPokemons[3]=obj1;

}
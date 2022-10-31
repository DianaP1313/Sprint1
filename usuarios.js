const usuarios = [
    {
        nombre: 'Juan',
        numeroDocumento: 11646046,
        clave: 2103,
        tipoUsuario: 'administrador'
    },

    {
        nombre: 'Diana',
        numeroDocumento: 1152202244,
        clave: 1234,
        tipoUsuario: 'cliente'
    },

    {
        nombre: 'Paola',
        numeroDocumento: 1132201262,
        clave: 4321,
        tipoUsuario: 'cliente'
    },
];

// const clave = '1234';
while (true) {
    const docIngresado = Number(prompt('Ingrese documento'));
    const claveIngresada = prompt('Ingrese clave');
    let userFind = usuarios.find((element) => element.numeroDocumento === docIngresado);
    if (userFind) {
        if (claveIngresada === userFind.clave){
            console.log(userFind.tipoUsuario);







            
  /*      }else {
            alert('clave incorrecta');
            ingreseClave = prompt('Ingrese de nuevo su clave');
        }

    }
    break;
}



//while (ingreseClave != clave) {
  //  let preguntoClave = prompt('Vuelva a ingresar la clave');
   // ingreseClave = preguntoClave;
//}

//if (ingreseClave == clave) {
  //  alert('Clave correcta');
//}
//}


//  let print = dates.find(element => element.name.includes('2'));
// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
// const puedeVerPelicula = (edad,tieneAutorizacion) => {
//     return edad>= 15 || tieneAutorizacion
  
// }
// console.log(puedeVerPelicula(12,false));
// console.log(puedeVerPelicula (15,true));
// console.log(puedeVerPelicula(16,false));

// Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor,numeroMinimo,numeroMaximo)=>{
    if( valor>numeroMinimo && valor<numeroMaximo) {
        return true
    }
        else {
            return false
        }
}
console.log (estaEnRango(2,3,8));

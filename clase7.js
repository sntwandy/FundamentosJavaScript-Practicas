var wandy = {
    name: 'Wandy',
    lastName: 'Santana',
    age: 21
}

var megan = {
    name: 'Megan',
    lastName: 'Herrera',
    age: 19
}

function imprimirNombreMayus(n) {
    //Otra manera de destructurar un objeto y acceder a sus atributos.
    //var name = n.name 
    var { name } = n
    console.log(name.toUpperCase())
}

imprimirNombreMayus(megan)
imprimirNombreMayus(wandy)
imprimirNombreMayus({ name: 'Zeus'})

function imprimirNombreYEdad(p) {
    var { name } = p, { age } = p 
    console.log(`Your name is: ${name} and your age is: ${age}`)
}

imprimirNombreYEdad(megan)
imprimirNombreYEdad(wandy)
imprimirNombreYEdad({ name: 'Zeus', age: 6})
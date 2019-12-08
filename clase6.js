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

function imprimirNombreMayus({ name }) {
    console.log(name.toUpperCase())
}

imprimirNombreMayus(megan)
imprimirNombreMayus(wandy)
imprimirNombreMayus({ name: 'Zeus'})
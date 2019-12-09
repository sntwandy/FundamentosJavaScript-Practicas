var wandy = {
    name: 'Wandy',
    lastname: 'Santana',
    gender: 'male',
    age: 21,
    engineer: true,
    chef: false,
    singer: false,
}
var megan = {
    name: 'Megan',
    lastname: 'Herrera',
    gender: 'female',
    age: 19,
    engineer: false,
    chef: true,
    artist: true,
}

function printProfessions(person){
    console.log(`${person.name} is: `)

    if(person.engineer)
    {
        console.log('Engineer.')
    } 
    if(person.chef)
    {
        console.log('Chef')
    }
    if(person.singer)
    {
        console.log('Singer')
    }
    if(person.artist)
    {
        console.log('Artist')
    }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(person)
{
    return person.age >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(person)
{
    if(esMayorDeEdad(person))
    {
        console.log(`${person.name} es mayor de edad`)
    }
    else 
    {
        console.log(`${person.name} es menor de edad`)
    }
}
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

/* CHALLENGE: Escribir la funcion si es mayor de edad. */

function printIfPersonIsAAdult(person)
{
    console.log('Welcome to my program, Hi, my name is: Root!')
    console.log('Let is start with your age.')

    let adultAge = 18
    let mr = 'Mr.'
    let mrs = 'Mrs.'

    if(person.age >= adultAge)
    {
        if(person.gender === 'male')
        {
            console.log(`${mr} ${person.name} you are a adult.`)
        } 
        else
        {
            console.log(`${mrs} ${person.name} you are a adult.`)
        }
    }
    else
    {
        if(person.gender === 'male')
        {
            console.log(`${mr} ${person.name} you are not a adult.`)
        } 
        else
        {
            console.log(`${mrs} ${person.name} you are not a adult.`)
        }
    }
}
//Get the last character of the user name.
function getLastStr(){
    let name = prompt('Enter your name:')
    let quantity = name.length
    alert(`Your name is: ${name} and your last string of your name is: ${name.charAt(quantity - 1)}`)
}

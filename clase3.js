//My Code: Wandy R. Santana.
var age = 21
//Incremento.
//age = age + 1
age += 1 

var weight = 65
//Decremento.
//weight = weight - 2
weight -= 2

var sandwich = 1

//weight = weight + sandwich
weight += sandwich

var playFootball = 3

//weight = weight - playFootball
weight -= playFootball

var priceWine = 35.58

var total = priceWine * 3
//Calculo preciso, cuando se trabaja con decimales.
var total = Math.round(priceWine * 100 * 3) / 100
//Para presentar la cantidad de decimales que deseamos que se muestren.
var totalStr = total.toFixed(2)
//Funcion para pasar de string a float.
var total2 = parseFloat(totalStr)

var pizza = 8 
var people = 2
//Division.
var quantityPizzaToPeople = pizza / people
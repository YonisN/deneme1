function sayiUret(ustlimit){
    return Math.ceil(Math.random() * ustlimit)
}

sayiUret()

var sayi1 = sayiUret(90)
var sayi2 = sayiUret(150)
var sayi3 = sayiUret(900)
var sayi4 = sayiUret(1500)

console.log( 'Kolon1 :' +sayi1)
console.log( 'Kolon2 :' +sayi2)
console.log( 'Kolon3 :' +sayi3)
console.log( 'Kolon4 :' +sayi4)

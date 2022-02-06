//  fahrenheit to celcius
//  [23, 140, 212, 41] => [-5, 60, 100, 5]
//  (32'f - 32) x 5/9 = 0'c

function getCelcius(farenheit) {
    return farenheit.map((value) => ((value - 32) * 5) / 9);
}

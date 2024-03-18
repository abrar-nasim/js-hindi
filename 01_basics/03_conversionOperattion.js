let score = '33abc'
console.log(typeof score)

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber)
console.log(scoreInNumber) // string will get converted by Number but actually the value will be NaN

//Using Number()
//"33" => 33
// false => 0

//Using Boolean()
// 1 => true; 0 => false
// "" => false
// "hitesh" => true
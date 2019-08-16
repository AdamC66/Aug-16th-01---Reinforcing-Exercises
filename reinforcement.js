let testArr = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];
const isUpper = letter => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').includes(letter)
const startsWithUpper = word   => isUpper(word[0])
const isLong = word => word.length > 4;

testArr.forEach(word =>{
    if(isLong(word) & !startsWithUpper(word)){
        console.log(`${word} is long and lowercase`)
    }else if(!startsWithUpper(word)){
        console.log(`${word} is lowercase`)
    }else if(isLong(word)){
        console.log(`${word} is long`)
    }else{
        console.log(`${word}`)
    }
});


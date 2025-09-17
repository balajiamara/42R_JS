// let input = prompt('enter your value:')
// console.log(input)
//   let num = Number(input);   // convert to Number
//   let bool = Boolean(input); // convert to Boolean
//   let str = String(input);   // explicitly String

//   console.log("Original:", input, "→", typeof input);
//   console.log("Number:", num, "→", typeof num);
//   console.log("Boolean:", bool, "→", typeof bool);
//   console.log("String:", str, "→", typeof str);


// let res=Number(input)
// console.log(res+50)
// console.log('5' + 2);
// console.log("5" - 2);
// console.log("5" * "2");
// console.log("10" / true);

// function toBoolean(value) {
//   return !!value;  // double NOT converts to true/false
// }

// console.log(toBoolean(0));        // false
// console.log(toBoolean(1)); 

// console.log(Boolean('0'))

// let a=20
// let b='30'

// console.log(a+b)
// console.log(b+a)

// arr=['subbu','srinu','prem','rammohan','abdul']
// console.log(Math.random(arr)*5)

''

let randomnumber=Math.random()*100;
randomnumber=Math.ceil(randomnumber);
console.log(randomnumber)

function guess(){
    let num= document.getElementById('input').value
    num=parseInt(num);
if(isNaN(num)){
    document.getElementById('msg').textContent='Please enter a valid Number'
}
else if(num>100 || num<1){
    document.getElementById('msg').textContent='Please enter a number between 1 and 100 only'
}
else if(num===randomnumber){
    document.getElementById('msg').textContent='you guess the number correctly'
}
else if(num>randomnumber){
    document.getElementById('msg').textContent='your number is too high'
}
else{
    document.getElementById('msg').textContent='your number is too low'
};
}




// function increment(){
//     let num=document.getElementById(val).textContent
//     num=parseInt(num)

// }
console.log("Operators in JS")
//Arithmetic operators
let a=45;
let b=4;
console.log("a + b=",a+b)
console.log("a - b=",a-b)
console.log("a / b=",a/b)
console.log("a * b=",a*b)
console.log("a % b=",a%b)
console.log("a ** b=",a**b)
console.log("++a=",++a)
console.log("a++=",a++)
console.log("--a=",--a)
console.log("a--=",a--)
console.log("a=",a)
console.log("a--=",a--)
//Assignment operator
let c=8;
c +=5;
console.log(c)
c -=5;
console.log(c)
c *=5;
console.log(c)
c /=5;
console.log(c)

//comparison operators
let comp1 =6;
let comp2 =6;
console.log("comp1 == comp2 is",comp1 == comp2)
console.log("comp1 === comp2 is",comp1 === comp2)
console.log("comp1 != comp2 is",comp1 != comp2)
console.log("comp1 !== comp2 is",comp1 !== comp2)

//logical operators//bolean true and false
let x=5;
let y=6;
console.log(x<y && x==5)
console.log(x>y || x==7)
console.log(!false)
console.log(!true)
//conditional statement 
let r=prompt("Hey whats you age?")//prompt pochy ga
r= Number.parseInt(r)//converting the string to a number //typecasting
//console.log(typeof r)
//if else
/*if(r>0){
    alert("This is a valid age");//alert btay ga
}
else{
    alert("This is invalid age");
}
*///if else if
if(r<0){
    alert("This is an invalid age");//alert btay ga
}
else if(r<9)
{
    alert("You are a kid");
}
else if(r<18 && r>=9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now drive as you are above 18");
}


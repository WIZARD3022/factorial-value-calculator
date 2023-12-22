var num = prompt("Enter the number: ");
a = 1
arr=[]

for (let index = 1; index <= num; index++) {
    arr[(index - 1)]=index;
    a = a*index;
}

b= arr.join("*");
console.log(b+" = "+a);

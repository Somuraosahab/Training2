console.log("--welcome to JS--");

//console.log("-----Starting with Variables------", c);

//const a = 5;
//let b = 6;
 //var c = 7;

//console.log("-a : , b : , c :", a,b, c);
//console.log("---sum---"+ a+b+c);

//console.log("-----If Else Statements---");

//const marks = 80;

//if (marks > 40) {
    //console.log("Pass");
//}else{
   //console.log("fail");
//}

//console.log("largest no:");
const x = 5;
const y = 8;
const z = 67;

//if (x > y) {
    //if (x>z) {
        //console.log(x);
    //}
//} else {
    //if (y>z) {
        //console.log(y);
    //}else{
       // console.log(z);
    //}
//}

console.log("-----For Loop----");

let sum = 0; // 0 1 2 3 4 5 6 7 8 9
for (let i = 0; i < 10; i++) {
    console.log(i++);
    sum = sum + i;
}
console.log(sum);
console.log("---------Array------------");

//indexes: 0,1,2,3,4,5,6,7
const arr = [1,2,3,4,5,6,6,6];

console.log(arr);
console.log("first  value : ", arr[7]);


//for(let i = 0; i < arr.length; i++) {
   // console.log(arr[i]);
//}

//for(let i = arr.length - 1; i>=0; i--){
   // console.log(arr[i]);
//}

console.log("-----add new element at given index:");

arr.splice(4,0,7);
console.log(arr);
console.log("-----remove element from array----");
arr.splice(2,1);
console.log(arr);


const arr2 = [4,7,5,3,1,1];

const myFun = (element) => {
    console.log(element);
};

arr2.forEach(myFun);

console.log("---objects--------:");

const obj= {
    name: "harsh",
    rollno: 9303,
    result: "fail",
};

console.log(obj);
console.log(" name :", obj["name"]);

console.log("---add new key in obj---");
obj.id = 2;

console.log(obj);

console.log("---add new key in onj---");
obj.city = "delhi";

console.log(obj);


    //id: 1,
    //name: "a",
//},
//{
    //id: 2,
    //name: "b",
//},
//{
    //id: 3,
    //name: "c",
//},
//{
    //id: 4,
    //name: "d",
//},
//{
    //id: 5,
    //name: "e",
//}
//];

for(let i=0;i<data.length; i++) {
    const myObj = data[i];
    const mewObjItem = {};
    newObjItem.name = myObj?.name?.commo

    objArr.push(newObjItem);
}
    
    


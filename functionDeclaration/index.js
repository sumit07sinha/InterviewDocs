// const formButton=document.getElementById("form");
// const alertInfo=()=>{
//     alert("form clicked");
// }
// formButton.addEventListener("resize", alertInfo,true);

// const divButton=document.getElementById("div");
// const divAlert=()=>{
//     alert("div clicked");
// }
// divButton.addEventListener("click", divAlert);
// const pButton=document.getElementById("p");
// const pAlert=(e)=>{
//     alert("p clicked");
//     e.preventDefault();
// }
// pButton.addEventListener("click", pAlert,true);
// //function expression
// let a=()=>{
//     console.log("a called");
// }

// a();

//function declaration aka function statement
function b() {
  console.log("b called");
}

b();

//namedFunction expression
let namedFunction = function xyz(params) {
  console.log("namedFunction called");
};
// while calling function passing values are called as arguments
namedFunction(2);
//first class functions- ability to be used as values.

// xyz();

let name = { firstName: "Sumit", lastName: "Sinha" };

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};
printFullName.call(name);

//reduce
const array = [
  { key: 20, name: "sumit" },
  { key: 26, name: "sumit" },
  { key: 28, name: "sinha" },
  { key: 30, name: "sumit" },
];
const reduceFunction = (arr) => {
  let totalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    totalCount += arr[i];
  }
  console.log(totalCount);
};
reduceFunction([2, 4, 6, 8]);
console.log(array.reduce((sum, ele) => sum + ele, 0));

//filter
const filter = (arr) => {
  let totalCount = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4) totalCount.push(arr[i]);
  }
  console.log(totalCount);
};
filter([2, 4, 6, 8]);

console.log(array.filter((ele) => ele > 2));
let count = 0;
const getDebounce = () => {
  console.log("key pressed", count++);
};
const modifiedCodeOne = (fn, del) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), del);
  };
};
const modifiedCode = modifiedCodeOne(getDebounce, 1000);

//map
// const map=(arr)=>
// {
//     let totalCount=[];
//  for (let i=0; i<arr.length;i++){
//   arr[i]=  arr[i].name+ 'is of' + arr[i].key
//      totalCount.push(arr[i])
//  }
//  console.log(totalCount) ;
// }
// map(array);

console.log(array.map((ele) => ele.name + " is of " + ele.key));

let animalInfo = (name) => (size) => (age) =>
  console.log(`animal name is ${name} is ${size} and is of ${age} yrs old`);

animalInfo("elephant")("big")(30);

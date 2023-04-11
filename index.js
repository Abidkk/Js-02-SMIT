console.log("Hello SMIT-Assignment 02");
////        :::::    Task - 01    ::::::
function func(x){
    return function (y){
        console.log(x+y)
    }
};
let func1 =  func(5);
let func2 = func(8);
func1(4);
func2(5)


//       :::::    Task - 02     ::::::

function searchFruit(arr, fruit, index) {
    if (index === arr.length) {
      return -1; // the fruit was not found
    }
    if (arr[index] === fruit) {
      return index; // the fruit was found
    } else {
      return searchFruit(arr, fruit, index + 1); // search the next index
    }
  }
  const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
const fruit = 'orange';
const index = 0;
const result = searchFruit(fruits, fruit, index);
if (result === -1) {
  console.log(`${fruit} not found in array`);
} else {
  console.log(`${fruit} found at index ${result}`);
}



/// :::     Task - 03   :::::: 

function pera(text){
document.getElementById('pera1').innerHTML = text;
}
pera('The Metaverse offers a wide range of possibilities for individuals and businesses alike. From gaming and entertainment to commerce and education, the Metaverse provides a platform for people to connect, create, and engage with one another in new and exciting ways.')
pera('Hello Pakistan');  


//    ::::    Task -04    ::::
function listItem(item){
document.querySelector('li').innerHTML = item;
}
listItem('Apple')
listItem('Banana');




//        :::::  Task -05   :::::
function head(select , bg){
   select = document.querySelector('#head1');
    bg = select.style.backgroundColor = bg;
}
head('select', 'pink');



/////        :::: Task  -6     ::::

function sToLS(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  var myObject = { name: "Abid", age: 23 };
sToLS("my-key", myObject);

const rObject = JSON.parse(localStorage.getItem("my-key"));
console.log(rObject); // { name: "Abid", age: 23 }



////       :::::    Task -7     ::::
function gFLS(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  const rO = gFLS("my-key");
console.log(rO); // 



////        ::::   Task -8  :::
function saveObjectToLocalStorage(obj) {
    // Save  property to localStorage
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        localStorage.setItem(prop, JSON.stringify(obj[prop]));
      }
    }
  
    // Retrieve the object
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
  
    return newObj;
  }
  var myObject = { name: "Abid", age: 23 };
const retrievedObject = saveObjectToLocalStorage(myObject);
console.log(retrievedObject); 


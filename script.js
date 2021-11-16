var myFirstString = 'ez "egy" string';
var mySecondString = "ez is 'egy' string";
var myThirdString = `
ez
"egy" 
'több' 
soros
string
`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 6478999;

var myFirstBoolean = true;
var myFirstBoolean = false;

var myFirstArray = ["1984", "Lord of the rings", "Mester és Margarita", "Galaktikus utikalauz stopposoknak", "Vita Brevis"];
var mySecondArray = [1984, "Lord of the rings", "Mester és Margarita", "Galaktikus utikalauz stopposoknak", "Vita Brevis"];

var myFirstObject = {
    title: "Lord of the rings",
    publicationDate: 1954,
    translations: ["hu", "de", "fr", "jp"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a+b;
console.log(c);

function add(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
} 

add(1,2);
add(17948, 18773);

var subtraction = function (a,b){
    if (a > b) {
        console.log(a - b);
    } else if (a === b) {
        console.log(a - b);
        console.log("A végeredmény nulla lesz.");
    } else {
        console.log(b - a);
    }
}

subtraction(3,6);
subtraction("15", 15);
add("15",15);
add("Nyitva","tartás");
subtraction("Nyitva","tartás");

function ifElseCheck(text){
    if (text === "hello") {
        console.log("text az volt, hogy hello");
    } else if (text === "hello"){
        console.log("text megint az volt, hogy hello");
    } 

    if (text === "hello") {
        console.log("A text már megint hello");
    }
}
ifElseCheck("hello");

function compare(a,b){
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a+b;
    console.log(typeof c);
    console.log(c);
}

compare("1984", 1984);
compare("15", "15");


var myFirstFunctionVariable = function(){
    console.log("Ez egy függvény amit változóban tároltunk el");
}
myFirstFunctionVariable ();

(function(){
    console.log("Azonnal lefutó függvény");
}());

var anotherVar = myFirstFunctionVariable();
console.log(typeof anotherVar); //undefined

var anotherVar2 = myFirstFunctionVariable;

anotherVar2();

console.log(typeof anotherVar2);// function

// függvényt argumentumként is meg tudunk adni

function theLastFunction(obj1, obj2){
    console.log("obj1 típusa", typeof obj1);
    console.log("obj1 értéke", obj1);   // csak kiírja a functiont

    console.log("obj1 típusa", typeof obj2);
    console.log("obj1 értéke", obj2);   // csak kiírja a functiont
    console.log(obj2()); // le is futtatta a functiont
}

theLastFunction("hello", function (){
    return "i'm calling the last function";
});

/*
var window = {
    addEventListener: function (eventName, eventFunction){
        ...
    }
}
*/
window.addEventListener("load", function(){
    console.log("Az oldal betöltődött!");
});
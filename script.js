// Az adott scope-ban minden változót feltesz a code elejére és mindegyiket deklarálja (hoisting) de a var undefined értéket kap, a többi nem kap értéket.

console.log(myFirstGlobalVar);       
var myFirstGlobalVar = 0;
console.log(myFirstGlobalVar);

//console.log(mySecondGlobalVar);   hibára megy
let mySecondGlobalVar = 1;
console.log(mySecondGlobalVar);

//console.log(myThirdGlobalVar);    hibára megy
const myThirdGlobalVar = 2;
console.log(myThirdGlobalVar);

(function (){
    console.log(myFirstGlobalVar,mySecondGlobalVar,myThirdGlobalVar);
}())
console.log(myFirstGlobalVar,mySecondGlobalVar,myThirdGlobalVar);



(function (){
    console.log(myFirstGlobalVar,mySecondGlobalVar,myThirdGlobalVar);

    var myFirstFunctionVar = 3;
    let mySecondFunctionVar = 4;
    const myThirdFunctionVar = 5;
    console.log(myFirstFunctionVar,mySecondFunctionVar,myThirdFunctionVar);

    (function (){
        console.log(myFirstGlobalVar,mySecondGlobalVar,myThirdGlobalVar);
        console.log(myFirstFunctionVar,mySecondFunctionVar,myThirdFunctionVar);

        (function (){
            console.log(myFirstGlobalVar,mySecondGlobalVar,myThirdGlobalVar);
            console.log(myFirstFunctionVar,mySecondFunctionVar,myThirdFunctionVar); 
        }())
    }())
}())
//console.log(myFirstFunctionVar,mySecondFunctionVar,myThirdFunctionVar);

function f1(){
    console.log(a);         //undefined
    var a = undefined;
    console.log(a);         //undefined
    a = 7;
    console.log(a);         //7
}
f1();

function f2(){
    console.log(a);         //undefined
    var a;
    console.log(a);         //undefined
    a = 8;
    console.log(a);         //8
}
f2();

function f3(){
    //console.log(a);         // hibára fut
    let a;                    // itt inicializálódik undefineddel
    console.log(a);
    a = 8;
    console.log(a);
}
f3();

function f4(){
    //console.log(a);         // hibára fut
    const a = 9;                  // hibára fut itt NEM inicializálódik undefineddel              
    console.log(a);           // constnak a létrehozás pillanatában értéket is kell adni!!
    //a = 8;                  Nem módosítható
    console.log(a);
}
f4();

function f5(){
    let b;      
    console.log(b);          // undefined
    console.log(typeof b);   // undefined  egyben típus is
}
f5();

function f6(){
    d = 12;                   //12
    console.log(d);           // undefined
    if (true) {
        (function (){
           var d = 11;
           console.log(d);
       }())
    }
    console.log(d);           //11
}
f6();

function f7(){
    //console.log(e);           // undefined
    if (true) {
        let e = 13;               //csak itt látszik mert block scope-ja van
        console.log(e);
        /* (function (){
           var d = 11;
           console.log(d);
       }()) */
    }
    //console.log(e);              // undefined
}
f7();

function f8(){                                      // var al létrehozott i kiléphet a cikluson kívülre
    const ls = ["a", "b", "c", "d", "e", true];


    for (i = 0; i < ls.length; i++) {
        console.log(ls[i]);   
    }

    for (const item of ls) {
        console.log(item);
    }

    for (const key in ls) {
        console.log(key);        //indexet írja ki
        const item = ls[key];
        console.log(item);       //értéket írja ki

    }
    console.log(f9(ls));
}
f8();


function f9(arrayFromParam){
    console.log(arrayFromParam);

    let abc = "";

    for (const item of arrayFromParam) {
        if (item !== true) {
            abc += item; 
        }
    }
    return abc
}



const f10 = (text)=>{
    return `<div>${text}</div>`
};


const f11 = (text)=> `<div>${text}</div>`;   // ha egysoros nem kell {} és return sem


const f12 = text => `<div>${text}</div>`;   // ha egy paraméter van nem kell (){} és return sem

console.log(f12("wellcome"));

window.addEventListener("load", function(){
    const f9result = f9(["hello", "bye"]);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f9result);
    document.getElementById("root").insertAdjacentHTML("afterbegin", f10("good night"));
    document.getElementById("root").insertAdjacentHTML("afterbegin", f11("good night"));
    document.getElementById("root").insertAdjacentHTML("afterbegin", f12("good night"));
})

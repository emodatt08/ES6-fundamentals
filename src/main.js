// class User{
//     register(){
//         console.log("Im here");
//     }
// }
/**
 * testing "var" scope
 */
function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a);
    }
    console.log(a)
}

/**
 * testing "let" scope
 */
function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
        console.log(a);
}

/**
 * testing "let" scope for loop
 */
function loopLet(){
    for(let a =0; a < 10; a++){
        console.log(a);
    }
        //error
        console.log(a);
}

/**
 * testing "var" scope for loop
 */
function loopVar(){
    for(var a =0; a < 10; a++){
        console.log(a);
    }
        console.log(a);
}

const colors = [];
colors.push("red");
colors.push("blue");
colors.push("green");
colors.push("yellow");

console.log(colors);

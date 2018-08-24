"use  strict"

window.onload = function(){
    let name = "James";
    let templateChar = `<h1>ES6 Template</h1>
                        <p>Powered by ${makeUpperCase('Transflow')}</p>
                        <p>Written by ${name}</p>`;

    document.getElementById('template').innerHTML = templateChar;
}

function makeUpperCase(word){
    return word.toUpperCase();
}
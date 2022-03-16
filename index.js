// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Michi){

cats.push(Michi);

}

function  destructivelyPrependCat(Michi){

    cats.unshift(Michi);
}

function destructivelyRemoveLastCat(Michi){

    cats.pop(Michi)
}

function destructivelyRemoveFirstCat(Michi){

    cats.shift(Michi)
}

function appendCat(Michi){
    
    const catstwo = [...cats,Michi];

    return catstwo;
    
}

function  prependCat(Michi){

    const catsone = [Michi,...cats];

    return catsone;
}

function removeLastCat(){

    const removes = cats.slice(0,-1);

    return removes;
}

function removeFirstCat(){

    const removesfirst = cats.slice(1);

    return removesfirst;
}

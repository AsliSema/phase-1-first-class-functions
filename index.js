function receivesAFunction(coding){
    return coding()
}

function returnsANamedFunction() {
    return toDo
}

const toDo = function (){
    return "Wake up early"
}

function returnsAnAnonymousFunction (){
    return () => {console.log("Hey")}
}

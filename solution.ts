// ? Problem 1
function formatValue(value: number | string | boolean):number | string | boolean{
    if(typeof value === "string"){
        return value.toUpperCase()
    } 
    
    else if( typeof value === "number"){
        return value*10;
    } 

    return !value;
}

console.log(formatValue("Hello"));
console.log(formatValue(5));
console.log(formatValue(true));
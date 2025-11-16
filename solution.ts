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

// console.log(formatValue("Hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

// ? Problem 2
function getLength(data: string | any[]):number{
    
    if(typeof data === "string"){
        return data.length;
    }

    if(Array.isArray(data)){
        return data.length;
    }

    return 0;
}

// console.log(getLength('Hello World'));       // Output: 11
// console.log(getLength([1, 2, 3, 4, 5]));    // Output: 5
// console.log(getLength(''));                  // Output: 0
// console.log(getLength([]));                  // Output: 0
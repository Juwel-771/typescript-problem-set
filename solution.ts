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

// ? Problem 3:
class Person{
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

// const person1 = new Person('Juwel Meherab', 26);
// console.log(person1.getDetails());

// ? Problem 4:
type Items = {
    title: string;
    rating: number;
};

function filterByRating(data: Items[]): Items[]{
    
    const resultValue: Items[] = [];

    for(let item of data){
        if(item.rating >= 4){
            resultValue.push(item);
        }
    }

    return resultValue;

}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

// ? Problem 5:
type User = {
    id: number;
    name: string; 
    email: string;
    isActive: boolean;
}

function filterActiveUsers(userData: User[]):User[]{
    return userData.filter(user=>user.isActive===true)
}


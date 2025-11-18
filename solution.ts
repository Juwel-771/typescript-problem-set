function formatValue(value: number | string | boolean):number | string | boolean{
    if(typeof value === "string"){
        return value.toUpperCase()
    } 
    
    else if( typeof value === "number"){
        return value*10;
    } 

    return !value;
}

function getLength(data: string | any[]):number{
    
    if(typeof data === "string"){
        return data.length;
    }

    if(Array.isArray(data)){
        return data.length;
    }

    return 0;
}

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

type User = {
    id: number;
    name: string; 
    email: string;
    isActive: boolean;
}

function filterActiveUsers(userData: User[]):User[]{
    return userData.filter(user=>user.isActive===true);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
 
function printBookDetails(booksData: Book):void{

    const bookAvailability = booksData.isAvailable ? "Yes" : "No";
    console.log(`Title: ${booksData.title}, Author: ${booksData.author}, Published: ${booksData.publishedYear}, Available: ${bookAvailability}`);
}


function getUniqueValues(valueOne: (number | string)[], valueTwo: (number | string)[]): (number | string)[] {
    
    const uniqueValue: (number | string)[] = [];
    function existsData(data: number | string): boolean {
        for (let i = 0; i < uniqueValue.length; i++) {
            if (uniqueValue[i] === data) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < valueOne.length; i++) {
        if (!existsData(valueOne[i])) {
            uniqueValue[uniqueValue.length] = valueOne[i];
        }
    }

    for (let i = 0; i < valueTwo.length; i++) {
        if (!existsData(valueTwo[i])) {
            uniqueValue[uniqueValue.length] = valueTwo[i];
        }
    }

    return uniqueValue;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const grossValue = product.price * product.quantity;

            if (product.discount !== undefined) {
                const discountPay = grossValue * (product.discount / 100);
                return grossValue - discountPay;
            }

            return grossValue;
        })
        .reduce((total, current) => total + current, 0);
}



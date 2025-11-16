// ? Problem 1
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    return !value;
}
// console.log(formatValue("Hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));
// ? Problem 2
function getLength(data) {
    if (typeof data === "string") {
        return data.length;
    }
    if (Array.isArray(data)) {
        return data.length;
    }
    return 0;
}
// console.log(getLength('Hello World'));       // Output: 11
// console.log(getLength([1, 2, 3, 4, 5]));    // Output: 5
// console.log(getLength(''));                  // Output: 0
// console.log(getLength([]));                  // Output: 0
// ? Problem 3:
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "'Name: ".concat(this.name, ", Age: ").concat(this.age, "'");
    };
    return Person;
}());
function filterByRating(data) {
    var resultValue = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        if (item.rating >= 4) {
            resultValue.push(item);
        }
    }
    return resultValue;
}
function filterActiveUsers(userData) {
    return userData.filter(function (user) { return user.isActive === true; });
}
function printBookDetails(booksData) {
    var bookAvailability = booksData.isAvailable ? "Yes" : "No";
    console.log("Title: ".concat(booksData.title, ", \n                Author: ").concat(booksData.author, ", \n                Published: ").concat(booksData.publishedYear, ", \n                Available: ").concat(bookAvailability));
}
var myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);

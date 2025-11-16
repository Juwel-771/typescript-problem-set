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
function filterByRating(items) {
    var result = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.rating >= 4) {
            result.push(item);
        }
    }
    return result;
}
var books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log(filterByRating(books));

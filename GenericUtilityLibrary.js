// Generic Identity Function
/**
 * A generic identity function that takes an argument of type T and returns a value of type T.
 *
 * @param arg - The argument of type T.
 * @returns The same value of type T.
 */
function identity(arg) {
    return arg;
}
// Generic Array Reversal Function
/**
 * A generic function that reverses an array.
 *
 * @param arr - The array to be reversed.
 * @returns A new array with the elements in reverse order.
 */
function reverseArray(arr) {
    return arr.slice().reverse();
}
// Generic Object Mapper
/**
 * A generic function that maps values of an object to another type.
 *
 * @param obj - The object to be mapped.
 * @param mapper - The mapping function that converts values from type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
function mapObject(obj, mapper) {
    return Object.fromEntries(Object.entries(obj).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, mapper(value)];
    }));
}
// Generic Filtering Function
/**
 * A generic function that filters elements of an array based on a predicate function.
 *
 * @param arr - The array to be filtered.
 * @param predicate - The predicate function that determines whether an element should be included.
 * @returns A new array containing elements that satisfy the predicate.
 */
function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
// Sample test cases
console.log(identity(1)); // Output: 1
console.log(identity("hello")); // Output: "hello"
var array = [1, 2, 3, 4];
console.log(reverseArray(array)); // Output: [4, 3, 2, 1]
var originalObject = { a: 1, b: 2 };
var mappedObject = mapObject(originalObject, function (x) { return x.toString(); });
console.log(mappedObject); // Output: { a: "1", b: "2" }
var filteredArray = filterArray([1, 2, 3, 4], function (x) { return x % 2 === 0; });
console.log(filteredArray); // Output: [2, 4]

// Shallow Comparison (SC)

// * Primitive Types:
// a (SC) b returns true if a and b have the same value and are of the same type 

// eg: string 'Me' (SC) string 'Me' returns true

// * Complex Types:
// a (SC) b returns true if a and b reference the exact same Object. 

// eg 1: 

//     var a = [1,2,3]
//     var b = [1,2,3]
//     var c = a

//     var abEq = (a === b)    // false
//     var acEq = (a === c)    // true 

// eg 2:

//     var a = {x:1, y:2}
//     var b = {x:1, y:2}
//     var c = a

//     var abEq = (a === b)    // false
//     var acEq = (a === c)    // true 

// ================================================================ 
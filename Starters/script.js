let authName = "gh4abhi";
let PI = 3.1415;
let firstName = 'abhi';
let lastName = 'shri';
console.log(firstName + ' ' + lastName);
console.log(authName);
console.log(typeof authName);

function fn(fname) {
    console.log(fname);
}

const ln = function (lname) {
    console.log(lname);
}

const rl = (role) => role;

const obj = {
    fname: "Genius",
    lname: "gh4abhi",
    role: "Devloper"
}

fn(obj.fname);
ln(obj['lname']);
console.log(rl(obj.role));

arr = new Array;

arr.push(obj.fname);

console.log(arr);
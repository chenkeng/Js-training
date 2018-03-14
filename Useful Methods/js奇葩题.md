What is the result of this expression? (or multiple ones)

          
["1", "2", "3"].map(parseInt)
        
["1", "2", "3"]
[1, 2, 3]
[0, 1, 2]
other

What is the result of this expression? (or multiple ones)

          
[typeof null, null instanceof Object]
        
["object", false]
[null, false]
["object", true]
other

What is the result of this expression? (or multiple ones)

          
[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]
        
an error
[9, 0]
[9, NaN]
[9, undefined]

What is the result of this expression? (or multiple ones)

          
var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
        
Value is Something
Value is Nothing
NaN
other

What is the result of this expression? (or multiple ones)

          
var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
})();
        
Goodbye Jack
Hello Jack
Hello undefined
Hello World

What is the result of this expression? (or multiple ones)

          
var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
    count++;
}
console.log(count);
        
0
100
101
other

What is the result of this expression? (or multiple ones)

          
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
        
[undefined × 7]
[0, 1, 2, 10]
[]
[undefined]

What is the result of this expression? (or multiple ones)

          
var two   = 0.2
var one   = 0.1
var eight = 0.8
var six   = 0.6
[two - one == one, eight - six == two]
        
[true, true]
[false, false]
[true, false]
other

What is the result of this expression? (or multiple ones)

          
function showCase(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase(new String('A'));
        
Case A
Case B
Do not know!
undefined

What is the result of this expression? (or multiple ones)

          
function showCase2(value) {
    switch(value) {
    case 'A':
        console.log('Case A');
        break;
    case 'B':
        console.log('Case B');
        break;
    case undefined:
        console.log('undefined');
        break;
    default:
        console.log('Do not know!');
    }
}
showCase2(String('A'));
        
Case A
Case B
Do not know!
undefined

What is the result of this expression? (or multiple ones)

          
function isOdd(num) {
    return num % 2 == 1;
}
function isEven(num) {
    return num % 2 == 0;
}
function isSane(num) {
    return isEven(num) || isOdd(num);
}
var values = [7, 4, '13', -9, Infinity];
values.map(isSane);
        
[true, true, true, true, true]
[true, true, true, true, false]
[true, true, true, false, false]
[true, true, false, false, false]

What is the result of this expression? (or multiple ones)

          
parseInt(3, 8)
parseInt(3, 2)
parseInt(3, 0)
        
3, 3, 3
3, 3, NaN
3, NaN, NaN
other

What is the result of this expression? (or multiple ones)

          
Array.isArray( Array.prototype )
        
true
false
error
other

What is the result of this expression? (or multiple ones)

          
var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
}
        
true
false
"wut"
other

What is the result of this expression? (or multiple ones)

          
[]==[]
        
true
false
error
other

What is the result of this expression? (or multiple ones)

          
'5' + 3
'5' - 3
        
"53", 2
8, 2
error
other

What is the result of this expression? (or multiple ones)

          
1 + - + + + - + 1
        
2
1
error
other

What is the result of this expression? (or multiple ones)

          
var ary = Array(3);
ary[0]=2
ary.map(function(elem) { return '1'; });
        
[2, 1, 1]
["1", "1", "1"]
[2, "1", "1"]
other

What is the result of this expression? (or multiple ones)

          
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a,b,c) {
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)
        
3
12
error
other

What is the result of this expression? (or multiple ones)

          
var a = 111111111111111110000,
    b = 1111;
a + b;
        
111111111111111111111
111111111111111110000
NaN
Infinity

What is the result of this expression? (or multiple ones)

          
var x = [].reverse;
x();
        
[]
undefined
error
window

What is the result of this expression? (or multiple ones)

          
Number.MIN_VALUE > 0
        
false
true
error
other

What is the result of this expression? (or multiple ones)

          
[1 < 2 < 3, 3 < 2 < 1]
        
[true, true]
[true, false]
error
other

What is the result of this expression? (or multiple ones)

          
// the most classic wtf
2 == [[[2]]]
        
true
false
undefined
other

What is the result of this expression? (or multiple ones)

          
3.toString()
3..toString()
3...toString()
        
"3", error, error
"3", "3.0", error
error, "3", error
other

What is the result of this expression? (or multiple ones)

          
(function(){
  var x = y = 1;
})();
console.log(y);
console.log(x);
        
1, 1
error, error
1, error
other

What is the result of this expression? (or multiple ones)

          
var a = /123/,
    b = /123/;
a == b
a === b
        
true, true
true, false
false, false
other

What is the result of this expression? (or multiple ones)

          
var a = [1, 2, 3],
    b = [1, 2, 3],
    c = [1, 2, 4]
a ==  b
a === b
a >   c
a <   c
        
false, false, false, true
false, false, false, false
true, true, false, true
other

What is the result of this expression? (or multiple ones)

          
var a = {}, b = Object.prototype;
[a.prototype === b, Object.getPrototypeOf(a) === b]
        
[false, true]
[true, true]
[false, false]
other


What is the result of this expression? (or multiple ones)

          
function f() {}
var a = f.prototype, b = Object.getPrototypeOf(f);
a === b
        
true
false
null
other

What is the result of this expression? (or multiple ones)

          
function foo() { }
var oldName = foo.name;
foo.name = "bar";
[oldName, foo.name]
        
error
["", ""]
["foo", "foo"]
["foo", "bar"]

What is the result of this expression? (or multiple ones)

          
"1 2 3".replace(/\d/g, parseInt)
        
"1 2 3"
"0 1 2"
"NaN 2 3"
"1 NaN 3"

What is the result of this expression? (or multiple ones)

          
function f() {}
var parent = Object.getPrototypeOf(f);
f.name // ?
parent.name // ?
typeof eval(f.name) // ?
typeof eval(parent.name) //  ?
        
"f", "Empty", "function", "function"
"f", undefined, "function", error
"f", "Empty", "function", error
other

What is the result of this expression? (or multiple ones)

          
var lowerCaseOnly =  /^[a-z]+$/;
[lowerCaseOnly.test(null), lowerCaseOnly.test()]
        
[true, false]
error
[true, true]
[false, true]

What is the result of this expression? (or multiple ones)

          
[,,,].join(", ")
        
", , , "
"undefined, undefined, undefined, undefined"
", , "
""

What is the result of this expression? (or multiple ones)

          
var a = {class: "Animal", name: 'Fido'};
a.class
        
"Animal"
Object
an error
other

What is the result of this expression? (or multiple ones)

          
var a = new Date("epoch")
        
Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
current time
error
other

What is the result of this expression? (or multiple ones)

          
var a = Function.length,
    b = new Function().length
a === b
        
true
false
error
other

What is the result of this expression? (or multiple ones)

          
var a = Date(0);
var b = new Date(0);
var c = new Date();
[a === b, b === c, a === c]
        
[true, true, true]
[false, false, false]
[false, true, false]
[true, false, false]

What is the result of this expression? (or multiple ones)

          
var min = Math.min(), max = Math.max()
min < max
        
true
false
error
other

What is the result of this expression? (or multiple ones)

          
function captureOne(re, str) {
  var match = re.exec(str);
  return match && match[1];
}
var numRe  = /num=(\d+)/ig,
    wordRe = /word=(\w+)/i,
    a1 = captureOne(numRe,  "num=1"),
    a2 = captureOne(wordRe, "word=1"),
    a3 = captureOne(numRe,  "NUM=2"),
    a4 = captureOne(wordRe,  "WORD=2");
[a1 === a2, a3 === a4]
        
[true, true]
[false, false]
[true, false]
[false, true]

What is the result of this expression? (or multiple ones)

          
var a = new Date("2014-03-19"),
    b = new Date(2014, 03, 19);
[a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]
        
[true, true]
[true, false]
[false, true]
[false, false]

What is the result of this expression? (or multiple ones)

          
if ('http://giftwrapped.com/picture.jpg'.match('.gif')) {
  'a gif file'
} else {
  'not a gif file'
}
        
'a gif file'
'not a gif file'
error
other

What is the result of this expression? (or multiple ones)

          
function foo(a) {
    var a;
    return a;
}
function bar(a) {
    var a = 'bye';
    return a;
}
[foo('hello'), bar('hello')]
        
["hello", "hello"]
["hello", "bye"]
["bye", "bye"]
other

Tweet
Proudly sponsored by CircleMe 
Ideas stolen from wtfjs, Charles Bihis and Gary Bernhardt.

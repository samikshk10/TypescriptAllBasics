function foo() {
    let b = 1;
    console.log("hello world");

    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());
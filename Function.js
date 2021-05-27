function javaScript_function() {
    return 'Hello';
}
function name(user,func) {
const message=func();
console.log(`${message} ${user}`);
}
name('Skill',javaScript_function);
name('Santa',javaScript_function);

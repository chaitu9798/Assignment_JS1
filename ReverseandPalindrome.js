function reverse_string(str) {
let name="";
const len=str.length;
for(let i=len-1;i>=0;i--) {
name+=str[i];
}
return name;
}
const string="skillsanta"
const result=reverse_string(string);
console.log(result);

function checkPalindrome() {

    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
const string1 ='skillsanta';
checkPalindrome(string1);
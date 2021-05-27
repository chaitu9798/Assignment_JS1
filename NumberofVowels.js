function FindVowels(str) {
    var vowels='aeiouAEIOU';
    var vcount=0;
    var Acount=0,Ecount=0,Icount=0,Ocount=0,Ucount=0;

    for(var i=0;i<str.length;i++) {
        if(vowels.indexOf(str[i])!=-1) {
            vcount=vcount+1;
        }
        var ch=str.charAt(i);
        if(ch=='a') {
        Acount++;
        }
        else if(ch=='e') {
            Ecount++;
        }
        else if(ch=='i') {
            Icount++;
        }
        else if(ch=='o') {
            Ocount++;
        }
        else if(ch=='u') {
            Ucount++;
        }
    }
    return "A: "+Acount+"\nE: "+Ecount+"\nI: "+Icount+"\nO: "+Ocount+"\nU: "+Ocount;
}
console.log(FindVowels("Hey This is Skillsanta JS Training"));
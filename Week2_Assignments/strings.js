let s = "Hello World"
let string = s.split(' ')
string = string[string.length -1]
console.log(string.length);


let t = " fly me to the moon "
let u = t.trim();
let v = u.split(" ")
console.log(v);
v = v[v.length -1]
console.log(v.length);

function isAnagram(word1, word2){
   word1 = word1.replaceAll(" ","").toLowerCase()
   word1 = word1.split("").sort().join();
   word2 = word2.replaceAll(" ","").toLowerCase()
   word2 = word2.split("").sort().join();
   if(word1 === word2){
    return true;
   } else{
    return false}
}

let word1 = "listen";
let word2 = "silent";
console.log(isAnagram(word1,word2));

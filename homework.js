
/* =====EX 1*/

const obj = {
    nume: 'Jonica',
    age: 30,
    oras: 'Ungheni'
}

const findkey = (objectName, keyName) => {
   let key = Object.keys(objectName).some(key => key === keyName);
   return key
} 

/* console.log(findkey(obj, 'nume'));
 */

/* ===EX2=== */

const str1 = 'salut ma numesc Maria'

let sum = 0 
const funcVoc = (str1, sum) => {
    
    for (let i = 0; i <= str1.length; i++) 
        if (str1[i] == 'a' || str1[i] == 'e' || str1[i] == 'i' || str1[i] == 'o' || str1[i] == 'u')
        sum ++
    return sum
}

/* console.log(funcVoc(str1, sum));   */


/* ====EX3======= */

const Alex = {
    nota1: 6,
    nota2: 8,
    nota3: 7
}
const Ion = {
    nota1: 8,
    nota2: 7,
    nota3: 9
}
const Maria = {
    nota1: 9,
    nota2: 9,
    nota3: 10
}

const mediaNot = (obj) => {
    const Ion = Object.values(obj)
    const Alex = Object.values(obj)
    const Maria = Object.values(obj)
    const sum1 = Ion.reduce((acc, curr) => acc + curr)
    const sum2 = Maria.reduce((acc, curr) => acc + curr)
    const sum3 = Alex.reduce((acc, curr) => acc + curr)
    
    return `media: ${sum1/Ion.length}`
    return `media: ${sum3/Alex.length}`
    return `media: ${sum2/Maria.length}`
}
/* console.log('Alex:', mediaNot(Alex));
console.log('Ion:', mediaNot(Ion));
console.log('Maria:', mediaNot(Maria));
 */


/* ====EX4======= */

const str = 'Hello World!'

const revers = (str) => {
   let result = "" 
   for(let i = str.length - 1; i>=0; i--) {
    result += str[i];
   }
   return result

}
/* console.log(revers(str)); */

/* =====Ex5==== */

const str4 = 'level'

const palindrom = (str4) => {
    let len = str4.length
    for (let i = 0; i < len/2; i++) {
        if(str4[i] !== str4[len -1 -i]) {
        return false
        }
    }
    return true
}


/* console.log(palindrom(str4)); */

const palindrom1 = (str4) => {
    let reversie = ""
    for (let i = str4.length-1; i>=0; i--) {
        reversie+= str4[i]
    }
    if(reversie === str4 ) {
            return true
        } else{
            return false   
        }
}
     
/* console.log(palindrom1(str4)); */


/* ====EX6===== */

const arr7 = ['a', 'b', 'c']
const obj7 = {a: 1, b: 2, c: 3, d: 4} 

let output = FindBestMacth(arr7, obj7)
function FindBestMacth (arr7, obj7) {
    return arr7.reduce(function (acc, key) {
        if (key in obj7) acc[key] = obj7[key];
        return acc
    }, {})
}

console.log(output);

















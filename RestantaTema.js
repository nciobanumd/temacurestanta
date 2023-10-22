/* ==============memtoda PROPERTY si PROPERTIES============ */
const obj = {
    name: 'Ciobanu',
    prenume: 'Nadea',
    patronimic:'Ivan'
    
}

Object.defineProperties (obj, {
    city: {
        value: 'Chisinau',
        writable: true,
        configurable: false,
        enumerable: true,
    },
    
    street: {
        value: 'Tudor Strisca',
        writable: false,
        configurable: true,
        enumerable: false,
    }
})

Object.defineProperty(obj, 'city', {
    writable: false
})

/* console.log(obj.propertyIsEnumerable('city')) */

/* Object.preventExtensions(obj) */

console.log(Object.values(obj));

/* ============metoda SEAL si FREEZE =================*/

const obj2 = {
    name: 'Maria'
}

/* Object.seal(obj2) */
/* Object.isExtensible(obj2)

obj2.surname = 'Ciuperca' */

Object.freeze(obj2)


obj2.name = 'Ion'

/* Object.defineProperty(obj2, 'name', {
    configurable: true
}) */

console.log(Object.values(obj2));


/* =========SORTARE=============== */

const arr = [1, 2, 3, 4, 5, 7, 9, 10]
 
/* console.log(arr.sort((a, b) => a > b ? -1 : 1))
console.log(arr.sort((a, b) => a < b ? -1 : 1)); */

const arr1 =['Ion', 'Maria', 'Traian', 'Nadea', 'Foxy']

/* console.log(arr1.sort((a, b) => a > b ? -1 : 1))
console.log(arr1.sort((a, b) => a < b ? -1 : 1));
 */

const sortobj = [
    {
        nume: 'Nadea',
        shoeSize: 38
    },
    
    {
        nume: 'Traian',
        shoeSize: 42
    },

    {
        nume: 'Gerorgica',
        shoeSize: 48
    },

    {
        nume: 'Marinica',
        shoeSize: 32
    }
]

const sortFunction = (arr, key, order) => {
    switch (order) {
        case 'ASC':
            return sortobj.sort((a, b) => a[key] > b[key] ? -1 : 1)
            
        case 'DSC':
            return sortobj.sort((a, b) => a[key] < b[key] ? -1 : 1)

    
        default:
            return sortobj
    }

}
/* 
console.log(sortFunction(arr, 'nume', 'DSC')); */

/* ==========FOR OF/ IN============== */

const objFOR = {
    nume: 'Ionica',
    age: 20
}

for (let key in objFOR) {
    console.log(objFOR[key])
}

for (let value of sortobj) {
    console.log(value)
}

/* =======JSON======= */

const objJSON = {
    nume: 'Petrescu',
    prenume: 'Petrica',
    adresa: {
        domiciliu: {
            localitatea: 'Petresti',
            strada: 'Petru cel Mare',
            showAdresa: () => console.log('Petresti')
        }
    }
}

const copyObj = JSON.parse(JSON.stringify(objJSON))

objJSON.adresa.domiciliu.localitatea = 'Cahul'
/* console.log(copyObj) */

const deepClone = function (obj) {
    if (obj === null) return null
    const clone = {...obj}
    for (let key in clone) {
        clone[key] = typeof clone[key] === 'object' ? deepClone(clone[key]) : obj[key];
        
    }
    return clone
    
}  

const objCopy = deepClone(objJSON)
console.log(objJSON);
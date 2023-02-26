// 6.1: Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 

const arr1 = ['Vasya', 'Petya', 'Alexey']
const removeUser = (arr, index) => arr.splice(index, 1)
removeUser(arr1, 1)
removeUser(arr1, 0)
console.log(arr1);

// _____________________________________________________________

// 6.2: Создать функцию которая вернет все ключи обьекта переданного параметром

const obj2 = { name: 'Vasya', age: 1}
const getAllKeys = obj => console.log(Object.keys(obj))
getAllKeys(obj2)

// _____________________________________________________________

// 6.3: Создать функцию которая вернет все значения объекта переданного параметром

const obj3 = { name: 'Vasya', age: 1}
const getAllValues = obj => console.log(Object.values(obj))
getAllValues(obj3)

// _____________________________________________________________

// 6.4: Содать функцию,где мы первым параметром передадим объект с новым кандидатом,
//  а вторым параметром - id любого кондидата в массиве condidateArr.
//   Функция должна будет вставить кандидата переданного через первый параметр в массив перед кондидатом у
//    которого id равно тому что передали во-втором параметре

const obj4 = {
    id: 3,
    name: 'Vasya'
}
const secondObj4 = {
    id: 4,
    name: 'Katya'
}
const arr4 = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
    {
        id: 3,
        name: 'Petya1'
    },
    {
        id: 4,
        name: 'Petya2'
    },
    {
        id: 5,
        name: 'Petya3'
    },
    {
        id: 6,
        name: 'Petya4'
    },
    {
        id: 7,
        name: 'Petya5'
    },
];

const insertIntoarr = (obj,id) => {
    const index = arr4.findIndex(el => el.id === id)
    arr4.splice(index, 0, obj)
}
insertIntoarr(obj4, 4)
insertIntoarr(secondObj4, 7)
console.log(arr4)

// _____________________________________________________________

// 6.5: Создайте класс Condidate который будет принимать параметром объект из массива condidateArr.
//  Добавить метод с именем state который вернет шатат в котором живает наш кондидат.
//   Информация о штате находится в свойстве address и это третья запись после запятой.

class Condidate {
    constructor (condidate) {
        Object.entries(condidate).map(el => {
            this[el[0]] = el[1]
        })
    }
    get state () {
        console.log(this.address.split(`,`)[2].trim())
    }
}
const condidate = new Condidate(condidateArr[0])
const condidate2 = new Condidate(condidateArr[16])
condidate.state
condidate2.state

// _____________________________________________________________

// 6.6: Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company.
//  Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr

const getCompanyNames = () => {
    const companyNames = condidateArr.reduce((arr, el) => {
        if (!arr.find(arrEl => arrEl == el.company)) {
            arr.push(el.company)
        }
        return arr
    }, [])
    console.log(companyNames)
}
getCompanyNames()

// _____________________________________________________________

// 6.7: Создать функцию которая выведет мне массив id всех кондидатов,
//  которые были зарагестрированны в том же году что и год указанный в параметре.

const getUsersByYear = (year) => {
    return condidateArr.reduce((arr, el) => {
        if (+el.registered.slice(0,4) == year) {
            arr.push(el._id)
        }
        return arr
    }, [])
}
console.log(getUsersByYear(2017))

// _____________________________________________________________

// 6.8: Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений.
//  Смотрим св-во greeting, там указанно это количество в строке,
//  Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
//  Все так же используем массив candidateArr

const getCondidatesByUnreadMsg = (num) => {
    return condidateArr.filter(el => {
        if (el.greeting.indexOf(`${num}`) >= 0) {
            return el
        }
    })
}
console.log(getCondidatesByUnreadMsg(3))

// _____________________________________________________________

// 6.9: Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr

const getCondidatesByGender = gender => {
    return condidateArr.filter(el => el.gender == gender)
}
console.log(getCondidatesByGender('male'))
console.log(getCondidatesByGender('female'))

// _____________________________________________________________

// 6.10: Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.
// /* reduce */
const arr = [1,2,3,5,5,1]

Array.prototype.myReduce = function(func, ac) {
    let acc = ac
    this.forEach(el => {
        acc = func(acc, el)
    })
    return acc
}

console.log(arr.myReduce((ac, el) => {
    if (el > 1) {
        ac.push(el * 2)
    }
    return ac
}, []))

// /* join */
Array.prototype.myJoin = function(symbol = `,`) {
    let index = 0
    const string = this.myReduce((ac, el) => {
        ++index
        if (index == this.length) {
            return ac + el
        }
        return ac + el + symbol
    }, ``)
    return string
}
console.log(arr.myJoin(`---`))
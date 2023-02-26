// 3.1: Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;
// 3.2: Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя
//  начиная с фамилии в виде строки

const func1But1 = function (arr) {
    const keysArr = arr.reduce((reduceArr, el) => {
        Object.keys(el).forEach(el1 => {
            if ((reduceArr.find(el3 => el3 == el1)) == undefined) {
                reduceArr.push(el1)
            }
        })
        console.log(reduceArr)
        return reduceArr
    }, [])

    return function (...args) {
        class Emp {
            constructor (arg) {
                keysArr.forEach((el, i) => {
                    this[el] = arg[i]
                })
            }
            getFullName() {
                console.log(`${this.surname} ${this.name}`)
            }
        }

        return new Emp(args)
    }
}
const func1But2 = func1But1(emplyeeArr)
const newObj = func1But2(11, `Igor`, `Kushtm`, 300, 1, false, `male`)

console.log(newObj)
newObj.getFullName()

// _____________________________________________________________

//3.3: Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты,
//  но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
// +
// 3.7: Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр
//  от которого он вызывается. И выдавать все свойства, если к нему обратиться,
//  в виде строки <Название свойства> - <значение> через запятую.

const func3 = (emplyeeArr) => {
    return emplyeeArr.reduce((reduceObj, el) => {
        entriesArr = Object.entries(el)
        class NewArr {
            constructor () {
                entriesArr.forEach(el => {
                    this[el[0]] = el[1]
                })
            }
            get fullInfo () {
                console.log(Object.entries(this).reduce((str, el1) => {
                    if (str != ``) {
                        str += `, `
                    }
                    str += `${el1[0]} - ${el1[1]}`
                    return str
                }, ``))
            }
            set fullInfo (obj) {
                Object.entries(obj).forEach(el => {
                    this[el[0]] = el[1]
                })
            }
        }
        reduceObj.arr.push(new NewArr())
        return reduceObj
    }, {
        arr: [],
        entriesArr: []
    }).arr
}
const emplyeeConstructArr = func3(emplyeeArr)
console.log(emplyeeConstructArr)
emplyeeConstructArr[0].fullInfo
emplyeeConstructArr[0].fullInfo = {name: 'Вася', salary: 9000, id: 3}
emplyeeConstructArr[0].fullInfo

// _____________________________________________________________

// 3.4: Создать функцию которая вернет массив со всеми полными именами каждого employee,
//  содержащегося в emplyeeConstructArr;

const func4 = arr => {
    let a = []
    let b
    for (i of arr) {
        b = `${i.name} ${i.surname}`
        a.push(b)
        b = ``
    }
    return a
}
console.log(func4(emplyeeConstructArr));

// _____________________________________________________________

// 3.5: Создать функцию которая вернет среднее значение зарплаты всех employee

const func5 = arr => {
    let a = 0
    let b = 0
    for (i of arr) {
        ++a
        b += i.salary
    }
    console.log(b);
    return b / a
}
console.log(func5(emplyeeConstructArr));

// _____________________________________________________________

// 3.6: Создать функцию которая выберет наугад работника из массива emplyeeConstructArr.
//  Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7,
//  то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random

const func6 = arr => {
    const func2 = (arr) => {
        let a = arr.length
        let b = 0
        for (let i = a; i >= 1;) {
            ++b
            i /= 10
        }
        return b
    }
    let a = 0
    let b = func2(arr)
    for (let i = Infinity; i >= arr.length;) {
        i = Math.random()
        for (let i2 = 1; i2 <= b; i2++) {
            i *= 10
        }
        i = Math.round(i)
        if (i < arr.length) {
            a = i
        }
    }
    console.log(arr[a])
}
func6(emplyeeConstructArr)
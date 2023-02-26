// 4.1:
class Student {
    arrPush () {
        if (!Student.prototype.arr) {
            Student.prototype.arr = []
        }
        this.id = Student.prototype.arr.length + 1;
        Student.prototype.arr.push(this)
    }
    static get listOfStudents () {
        let arrSchoolPoint = []
        let num = 0
        Student.prototype.arr.sort((prev, next) => next.ratingPoint - prev.ratingPoint).forEach((obj, index, arr) => {
            if (index >= 0 && index <= 4 || obj.ratingPoint == arr[4].ratingPoint) {
                arrSchoolPoint.push(obj)
            }
        })
        arrSchoolPoint.forEach((obj, index, arr) => {
            if (obj.ratingPoint > arr[4].ratingPoint) {
                obj.isSelfPayment = false
                delete arr[index]
                ++num
            }
        })
        arrSchoolPoint.sort((prev, next) => next.schoolPoint - prev.schoolPoint)
        for (let i = 0; i < (5 - num); i++) {
            arrSchoolPoint[i].isSelfPayment = false
        }
        console.log(Student.prototype.arr)
    }
    constructor (enrollee) {
        this.name = enrollee.name
        this.surname = enrollee.surname
        this.ratingPoint = enrollee.ratingPoint
        this.schoolPoint = enrollee.schoolPoint
        this.isSelfPayment = true
        this.arrPush()
    }
}
studentArr.forEach(el => new Student(el))
Student.listOfStudents

// ____________________________________________________________________

// 4.2:

class CustomString {
    reverse (str) {
        const arr = str.split(``)
        let str2 = ``
        for (let i of arr) {
            str2 = i + str2
        }
        console.log(str2);
    }
    ucFirst (str) {
        str.trim()
        const arr = str.split(``)
        arr[0] = arr[0].toUpperCase()
        const str2 = arr.join(``)
        console.log(str2);
    }
    ucWords (str) {
        str.trim()
        const arr = str.split(``)
        arr[0] = arr[0].toUpperCase()
        let bool = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ` `) {
                bool = true
                continue
            }
            if (bool) {
                arr[i] = arr[i].toUpperCase()
                bool = false
            }
        }
        const str2 = arr.join(``)
        console.log(str2);
    }
}
const myString = new CustomString()
myString.reverse(`qwerty`)
myString.ucFirst(`qwerty`)
myString.ucWords(`qwerty qwerty qwerty`)

// ____________________________________________________________________

// 4.3

class Validator {
    func (arr,str) {
        for (let i = 1; i < arr.length; i++) {
            if (str.indexOf(`${arr[0]}${arr[i]}`) > -1) {
                console.log(`true`,arr[0] + arr[i]);
                break
            }
            if (arr.length - i == 1) {
                console.log(`false`);
            }
        }
    }
    checkIsEmail (str) {
        const arr = [`@`,`gmail`,`email`]
        this.func(arr,str)
    }
    checkIsDomain (str) {
        const arr = [`.`,`com`,`ru`,`net`]
        this.func(arr,str)
    }

    // checkIsDate в розробці 

    // checkIsDate (str) {
    //     const arr = str.split(`.`)
    //     let arr2 = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if (!!(arr[i] * 1)) {
    //             let num = (arr[i] * 1)
    //             if (arr2.length == 2) {
    //                 if (arr[i].length == 4) {
    //                     arr2.push(num)
    //                 } else {
    //                     arr2 = []
    //                 }
    //             } else if (arr2.length == 1) {
    //                 if (num > 0 && num < 13) {
    //                     arr2.push(num)
    //                 } else {
    //                     arr2 = []
    //                 }
    //             } else if (arr2.length == 0) {
    //                 if (num > 0 && num < 32) {
    //                     arr2.push(num)
    //                 }
    //             }
    //         }
    //     }
    //     if (arr2.length == 3) {
    //         console.log(`true ${arr2[0]}.${arr2[1]}.${arr2[2]}`)
    //     } else {
    //         console.log(`false`);
    //     }
    // }
    checkIsPhone (str) {
        const arr = [`+`,`380`,`1806`,`7`,`1`,`180`,`184`]
        const arr2 = []
        for (let i = 1; i < arr.length; i++) {
            if (str.indexOf(`${arr[0]}${arr[i]}`) > -1) {
                arr2.push(arr[i])
            }
            if (arr.length - i == 1 && arr2.length == 0) {
                console.log(`false`);
            }
        }
        arr2.sort((prev, next) => prev - next)
        console.log(`true +${arr2[arr2.length - 1]}`);
    }
}
const validator = new Validator()
validator.checkIsEmail(`vasya.pupkin@gmail.com`)
validator.checkIsDomain(`google.com`)
// validator.checkIsDate(`31.11.2019`)
validator.checkIsPhone(`+180769379992`)
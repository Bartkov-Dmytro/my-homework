// 1.1: Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz,
// если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

const func1 = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0) {
            console.log(`FizBuz`)
        } else if (i % 2 == 0) {
            console.log(`Fiz`)
        } else {
            console.log(`Buz`)
        }
    }
}
func1(10)

// _______________________________________________

// 1.2: Написать логику нахождения факториала числа 10.

const func2 = num => {
    let a = num
    for (i = --num; i >= 1; i--) {
        a *= i
    }
    console.log(a)
}
func2(10)

// _______________________________________________

// 1.3: В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. Какое наименьшее
//  количество пачек бумаги нужно купить в офис на 8 недель?
// (Запрещавется использовать какое-либо округление (Math.ceil, Math.floor, ~~, parseInt).)

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const func3 = (sheetsInReamPaper, consumptionPerWeek, weeksAmount) => {
    let a = weeksAmount * consumptionPerWeek / sheetsInReamPaper
    let b = 0
    for (i = a; i > 1; i--) {
        b++
    }
    console.log(b)
}
func3(sheetsInReamPaper,consumptionPerWeek,weeksAmount)

// _______________________________________________

// 1.4: Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
//  Этажей у нас 9, квартир на этаже по 3
// (Запрещавется использовать какое-либо округление (Math.ceil, Math.floor, ~~, parseInt))

const roomsOnFloor = 3
const floors = 9
const roomNumber = 457
const porch = 0
const floor = 0

const func4 = (roomsOnFloor,floors,roomNumber) => {
    const func1 = a => {
        let b = 0
        for (i = a; i > 1; i--) {
            b++
        }
        return b  
    }

    let a = roomNumber / (floors * roomsOnFloor)
    let b = func1(a)

    console.log(`porch: ${++b}`)

    b = (roomNumber - ((--b) * (roomsOnFloor * floors))) / roomsOnFloor
    b = func1(b)

    console.log(`floor: ${b}`)
}
func4(roomsOnFloor,floors,roomNumber)

// _______________________________________________

// 1.5: Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида.
//  Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк

const func5 = num => {
    let a = `#`
    
    const func1 = (num, i) => {
        let b = num - i
        let c = ``
        for (let i2 = 0; i2 < b; i2++) {
            c += `-`
        }
        return c
    }

    for (let i = 1; i <= num; i++) {
        let c = func1(num, i)
        console.log(`${c}${a}${c}`)
        a = a + `##`
    }
}
func5(16)

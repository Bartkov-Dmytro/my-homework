// 1: Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz,
// если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

const func = num => {
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
func(10)
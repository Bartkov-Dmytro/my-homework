// 2: Написать логику нахождения факториала числа 10.

const func = num => {
    let a = num
    for (i = --num; i >= 1; i--) {
        a *= i
    }
    console.log(a)
}
func(10)
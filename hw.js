// 5.1: Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает,
//  при втором - суммирует переданый параметр с тем, что передали первый раз и тд.
//   Запрещается использовать глобальные переменные как хранилище результатов счетчика.

let func1 = (number) => {
    const numb = number
    func1 = (num) => {
        console.log(numb + num);
    }
}
func1(10)
func1(5)
func1(20)

// ____________________________________________________

//  5.2: Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы
//  переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится.
//  Запрещается использовать глобальные переменные как хранилище значений.

let func2 = (el) => {
    let arr = [el]
    console.log(arr)
    func2 = (el) => {
        if (el == undefined) {
            arr = []
        } else {
            arr.push(el)
        }
        console.log(arr)
    }
}
func2({
    key: `value`,
})
func2(true)
func2()
func2(`33`)

// ____________________________________________________

// 5.3: Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем
//  когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'.
//   Запрещается использовать глобальные переменные как хранилище значений. 

let getTime = () => {
    let time = new Date().getTime()
    console.log(`Enabled`)
    getTime = () => {
        console.log(Math.round((new Date().getTime() - time) / 1000))
        time = new Date().getTime()
    }
}
getTime()
setTimeout(getTime, 4000)

// ____________________________________________________

// 5.4: Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS.
//  Где MM - количество минут, SS - количество секунд. При этом когда закончится время,
//   нужно вывести в console строку "Timer End".

const timer = (time) => {
    const time1 = new Date().getTime() + (time * 1000)
    let memory = String(new Date(time1 - new Date().getTime())).slice(19,25)
    const interval = setInterval(() => {
        if (String(new Date(time1 - new Date().getTime())).slice(19,25) == String(new Date(0)).slice(19,25)) {
            console.log(`Time End`)
            clearInterval(interval)
        } else if (time >= 3600) {
            console.log(`не больше 3599!`)
            learInterval(interval)
        } else if (String(new Date(time1 - new Date().getTime())).slice(19,25) != memory) {
            memory = String(new Date(time1 - new Date().getTime())).slice(19,25)
            console.log(String(new Date(time1 - new Date().getTime())).slice(19,25))
        }
    }, 490)
}
timer(315)
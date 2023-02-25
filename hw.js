// 4: Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
//  Этажей у нас 9, квартир на этаже по 3
// (Запрещавется использовать какое-либо округление (Math.ceil, Math.floor, ~~, parseInt))

const roomsOnFloor = 3
const floors = 9
const roomNumber = 457
const porch = 0
const floor = 0

const func = (roomsOnFloor,floors,roomNumber) => {
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
func(roomsOnFloor,floors,roomNumber)
// 7.1: Создать поиск кандидатов в массиве candidateArr по номеру телефона.
//  Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = phone => {
    const phoneNumArr = String(phone)
    .trim()
    .split(``)
    .filter(el => +el >= 0 && el != ` `)

    const candidatesByPhoneNumber = condidateArr.filter((el, index, arr) => {
        const stringArr = String(el.phone)
        .trim()
        .split(``)
        .filter(el => +el >= 0 && el != ` `)

        const stringArr2 = stringArr.filter((el, index) => {
            if ((stringArr[index] == phoneNumArr[index]) && index != phoneNumArr.length) {
                return true
            }
        })

        return stringArr2.length == phoneNumArr.length
    })
    console.log(candidatesByPhoneNumber)
}
searchCandidatesByPhoneNumber(`+1 (8)-1 `)

// _______________________________________________________________

// 7.2: Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr
//  c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.

const getCandidateById = id => {
    return [condidateArr.find(el => el._id == id)].map(el => {
        el.registered = `${el.registered.slice(8, 10)}/${el.registered.slice(5, 7)}/${el.registered.slice(0, 4)}`
        return el
    })[0]
}
console.log(getCandidateById("5e216bc9fec2d80d5a9e96c7"))

// _______________________________________________________________

// 7.3: Написать функцию которая будет сортировать массив canidatesArr по количеству денег
//  лежащих на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy.
//  Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = sortBy => {
    return condidateArr.reduce((arr, el) => {
        arr.push([el.balance.trim().split(``).filter(el => +el >= 0 && el != ` `).join(``), el])
        return arr
    },[]).sort((prev, next) => {
        if (sortBy == 'asc') {
           return prev[0] - next[0] 
        } else if (sortBy == 'desc') {
            return next[0] - prev[0] 
        }
    }).map(el => el[1])
}

console.log(sortCandidatesArr('asc'))
console.log(sortCandidatesArr(`desc`))
console.log(sortCandidatesArr())

// _______________________________________________________________

// 7.4:

const getEyeColorMap = () => {
    return Object.fromEntries(condidateArr.reduce((arr, obj) => {
        if (arr.find(el => el[0] == obj.eyeColor) == undefined) {
            arr.push([obj.eyeColor, []])
        }
        arr.find(el => el[0] == obj.eyeColor)[1].push(obj)
        return arr
    }, []))
}

console.log(getEyeColorMap())
// 3: В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. Какое наименьшее
//  количество пачек бумаги нужно купить в офис на 8 недель?
// (Запрещавется использовать какое-либо округление (Math.ceil, Math.floor, ~~, parseInt).)

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

const func = (sheetsInReamPaper, consumptionPerWeek, weeksAmount) => {
    let a = weeksAmount * consumptionPerWeek / sheetsInReamPaper
    let b = 0
    for (i = a; i > 1; i--) {
        b++
    }
    console.log(b)
}
func(sheetsInReamPaper,consumptionPerWeek,weeksAmount)
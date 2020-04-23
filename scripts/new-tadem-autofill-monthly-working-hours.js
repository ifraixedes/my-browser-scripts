/*
 * Auto fill all the working days with my standard start and end times.
 *
 * Site: https://jobs.newtandem.com/
 * Page: "Registro horas"
 */

main()

function main () {
  const dayRowsElems = document.querySelectorAll('.content-row')

  fillWorkDaysWithWorkingHours(dayRowsElems)
  alert('Remember to click in one of day end time and press enter to save them')
}

function fillWorkDaysWithWorkingHours (dayRowsElems) {
  dayRowsElems.forEach((row) => {
    const day = row.firstElementChild.textContent.toLowerCase()
    if (day === 'sabado' || day === 'domingo') {
      return
    }

    fillWorkingHours(row)
  })
}

function fillWorkingHours (dayRowElem) {
  const inputs = dayRowElem.getElementsByTagName('input')

  inputs[0].value = '09:00'
  inputs[1].value = '14:00'
  inputs[2].value = '15:00'
  inputs[3].value = '18:00'
  inputs[6].value = '8,00'
}

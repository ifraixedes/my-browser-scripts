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

  if (inputs[0].value == '') {
    inputs[0].value = '09:00'
  }

  if (inputs[1].value == '') {
    inputs[1].value = '14:00'
  }

  if (inputs[2].value == '') {
    inputs[2].value = '15:00'
  }

  if (inputs[3].value == '') {
    inputs[3].value = '18:00'
  }

  if (inputs[6].value == '') {
    inputs[6].value = '8,00'
  }
}

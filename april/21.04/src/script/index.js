function change(){
    console.log(window.document.getElementById('main'))
    window.document.getElementById('main').outerHTML=
    "<span>hi im from js </span>";
}

const buttonsN = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const buttonsDelete = document.querySelectorAll('[data-delete]')
const currentOperendElement = document.querySelectorAll('[date-current-operend]')



 
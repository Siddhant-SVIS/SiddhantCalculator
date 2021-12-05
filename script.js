/* Declaring variable to "tag" all the list items */
const $lis = document.querySelectorAll("ul li")

/* A loop for every list item */
$lis.forEach((node) => {
    /* A eventListener for everytime we click a buton (insert clicking sound here) */
    node.addEventListener('mousedown', function(event) {
        /* Variable to store value */
        const value = node.innerText.trim()
        /* ANOTHER variable to store the current value of the result */
        const $result = document.querySelector(".result")
        /* ANOTHER X2 variable to store the text inside the result */
        const resultText = $result.innerText.trim()

        if(resultText == '0' || resultText == 'undefined' || resultText == 'infinity') {
            $result.innerText = ''
        }

        if(value == '=') {
            let solution = eval(resultText)
            $result.innerText = solution
            return true
        }

        if(value.toLowerCase() == 'c') {
            $result.innerText = ('')
            return true
         }

         $result.append(value)
    })
})
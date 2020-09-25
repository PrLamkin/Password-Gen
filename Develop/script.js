//LORD THIS WAS A HEADACHE TO DO, Specify asll elements needed prior to designing the actual code. Went for Const instead of var because I didn't need them to change at all
const CharRangeAmount = document.getElementById("CharRange")
const CharNumberAmount = document.getElementById("CharNum")
const form = document.getElementById("passwordgenerator")
const password = document.getElementById("password")
const IncludeUpperCaseElement = document.getElementById("IncludeUpperCase")
const IncludeNumbersElement = document.getElementById("IncludeNumbers")
const IncludeSymbolsElement = document.getElementById("IncludeSymbols")

//Found a neat little website that gave me all of the character codes from javascript pretty handy. Didn't have to type out all of the letters, numbers, and symbols. Though in a future version, I'll have to touch up the symbols.
const LOWERCASE = arrayfromlowtohigh(65, 90)
const UPPERCASE = arrayfromlowtohigh(97, 122)
const NUMBERS = arrayfromlowtohigh(48, 67)
const SYMBOLs = arrayfromlowtohigh(33, 47).concat(arrayfromlowtohigh(58, 64))

//something I didn't know I could do.. combine two elements to sync up with one another. I could honestly 
CharRangeAmount.addEventListener("input", syncCharacterAmount)
CharNumberAmount.addEventListener("input", syncCharacterAmount)

//This evidently prevents to page from refreshing on button press. Another neat trick that I picked up for this.
form.addEventListener("submit", e => {
    e.preventDefault()
    const CharAmount = CharRangeAmount.value
    const IncludeUpperCase = IncludeNumbersElement.checked
    const IncludeNumbers = IncludeNumbersElement.checked
    const IncludeSymbols = IncludeSymbolsElement.checked
    const passwordZ = generate(CharAmount, IncludeUpperCase, IncludeNumbers, IncludeSymbols);
    password.innerText = passwordZ

})

//Okay so this is the meat and potatoes of the whole thing (potato's?) learned that a concat literally means contact or the joining of two arrays
function generate(CharAmount, IncludeUpperCase, IncludeNumbers, IncludeSymbols) {
    let charcodes = LOWERCASE
    if (IncludeUpperCase) charcodes = charcodes.concat(UPPERCASE)
    if (IncludeNumbers) charcodes = charcodes.concat(NUMBERS)
    if (IncludeSymbols) charcodes = charcodes.concat(SYMBOLs)

    const passwordZ = []
    for (let i = 0; i < CharAmount; i++) {
        const charactercode = charcodes[Math.floor(Math.random() * charcodes.length)]
        passwordZ.push(String.fromCharCode(charactercode))
    }
    return passwordZ.join("")
}

//gave meaning and life to the wonder that is CharCodes. Praise our lord and savoir CharCodes.
function arrayfromlowtohigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

//BLACK MAGIC FUCKERY RIGHT HERE
function syncCharacterAmount(e) {
    const value = e.target.value
    CharNumberAmount.value = value
    CharRangeAmount.value = value
}
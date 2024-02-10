// let textBox = document.querySelector("#textBox");
// let answerField = document.querySelector("#answerField");
let n = ""
let jn = ""
let shiftedNum = "";

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
}

function calcSurvivors() {
    if (document.querySelector("#textBox").value == "" || Number(document.querySelector("#textBox").value) == "0") {
        document.querySelector("#answerField").innerText = Number(document.querySelector("#textBox").value)
    } else{
    n = document.querySelector("#textBox").value
    jn = Number(n)
    jn = jn.toString(2)
    jn = jn.replace(jn.charAt(0), "")
    jn = jn.concat("1")
    jn = parseInt(jn, 2)
    document.querySelector("#answerField").innerText = jn
    }

}
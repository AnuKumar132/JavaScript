function calculate(){
    let celcuis=Number(document.getElementById("input").value)
    let fahrenheit=(celcuis*9/5)+32
    let result=document.getElementById("result")
    result.innerHTML=fahrenheit
}
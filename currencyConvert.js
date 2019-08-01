function result() {
    let value1 = document.getElementById("amount").value;
    let value2 = document.getElementById("fromcurrency").value;
    let value3 = document.getElementById("tocurrency").value;
    let result =document.getElementById("ketqua").innerHTML =(value1*value3)/value2;
    console.log(result);

}

function check() {
    var inputNumber= document.getElementById("number").value;
    console.log(typeof inputNumber);

    var i=new RegExp(/^[+-]?[0-9]+$/);
    for ( i =1; i < 10; i++) {
       i=inputNumber;
        if (i % 2 === 0 && i < 11&&i>=1) {
            alert(i + "は偶数です。")
        } else if (i % 2 === 1 && i < 11&&i>=1) {
            alert(i + " は偶数以外です。");
        }
        else {
            alert(i + "は対象外です");
        }

        return (inputNumber);
    }
}





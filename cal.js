function set(o) {

    document.getElementById("result").value += o;

}
function answer() {
    var Exp = document.getElementById("result");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    Exp.value = result;
}
function del(){
    document.getElementById("result").value="0";
}






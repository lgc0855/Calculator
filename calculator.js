/**
 * Created by liguochao on 2017/3/15.
 */
$(document).ready(function () {
    var buttons = document.getElementsByClassName("btn");
    var ac = document.getElementById("ac");
//    alert(buttons.length);
    var len = buttons.length ;
    for(var i=2 ; i < len-2 ; i++ ){
        buttons[i].onclick = clickButton;
    }

    var ans = 0 ;
    var input = document.getElementById("input_text");
    buttons[0].onclick = function () {

        input.value = "";
    }

    buttons[1].onclick = function () {
        input.value = input.value.slice(0,input.value.length-1)
    }
    
    buttons[len-1].onclick = function () {
        try{
            input.value = eval(input.value);
            ans = input.value ;
        }catch (Error){
            console.log("非法操作")
        }
    }
    buttons[len-2].onclick = function () {
        input.value = ans ;
    }

})

function clickButton () {
    var val = this.value ;
    var input = document.getElementById("input_text");
    if(val!="AC"&&val!="CE"&&val!="Ans"){
        input.value = input.value+val ;
    }
}
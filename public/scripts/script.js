let visible = false;
var selectedBraille = false; //true for braille 1
function dropdown_visible(){
    if(visible==true){
        var visibility = "hidden";
    }else{
        var visibility = "visible";
    }
    document.getElementById("language-dropdown").style.visibility = visibility;
    visible = !visible;
}
function dropdown_change(){
    if(selectedBraille==true){
        var text1 = "Braille 2";
        var text2 = "Braille 1";
    }else{
        var text1 = "Braille 1";
        var text2 = "Braille 2";
    }
    document.getElementById("braille-selected").innerHTML = text1;
    document.getElementById("braille-option").innerHTML = text2;
    dropdown_visible()
    selectedBraille = !selectedBraille;
}

var styleButtons = {};
function intiBasicStyle() {
    var elements = document.getElementById("edit-menu").querySelector("#menuBasicCss").querySelectorAll("input");
    elements.forEach((element) => {
        styleButtons[element.id] = element;
        element.onchange = changeBasicStyles;
    })
}
function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    return "#" + r + g + b;
}


function updateMenuStyleBasic() {
    for (var button in styleButtons) {
        if (button != "width" && button != "height") {
            styleButtons[button].checked = false;
        }
        if (styleButtons[button].type == "text") {
            styleButtons[button].value = elementSelected.style[button];
        }
        else if (styleButtons[button].type == "radio") {
            if (elementSelected.style[styleButtons[button].name] == styleButtons[button].value)
                styleButtons[button].checked = true;
        }
        else if (styleButtons[button].type == "color") {
            if (elementSelected.style[button])
                styleButtons[button].value = RGBToHex(elementSelected.style[button]);
            else
                styleButtons[button].value = "#FFFFFF"
        }
    }
}
// name => property 
// value= new value

function changeBasicStyles() {
    if (elementSelected.id != "root") {
        var idStr = this.id;
        var value = this.value;
        var name = this.name;

        if (this.type == "radio") {
            elementSelected.style[name] = value;
        }
        else {
            elementSelected.style[idStr] = value;
        }
    }

}
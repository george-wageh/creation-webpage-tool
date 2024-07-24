let property_name = "align-content";

function show_all_properties() {
    var arr = Object.keys(properties_map);
    var e = document.getElementById("edit-menu").querySelector("#properties");
    for (var i = 0; i < arr.length; i++) {
        var op = document.createElement("option");
        op.setAttribute("value", arr[i]);
        op.innerText = (arr[i]);
        e.appendChild(op);
    }
}
function select_property() {
    var text_css = document.getElementById("edit-menu").querySelector("#text_new_value_css");
    var select_css = document.getElementById("edit-menu").querySelector("#select_new_value_css");
    var color_css = document.getElementById("edit-menu").querySelector("#color_new_value_css");
    var more_inf = document.getElementById("edit-menu").querySelector("#more_inf");
    text_css.value = "";
    select_css.innerHTML = "";

    text_css.hidden = true;
    more_inf.innerText = "";
    select_css.hidden = true;
    color_css.hidden = true;

    property_name = document.getElementById("edit-menu").querySelector("#properties").value;
    var arr = properties_map[property_name];
    if (property_name.includes("color")) {
        color_css.hidden = false;
        color_css.value = elementSelected.style.getPropertyValue(property_name);
    }
    else if (arr.length == 0 || arr[0] == "2") {
        text_css.hidden = false;
        text_css.value = elementSelected.style.getPropertyValue(property_name);
        if (arr[0] == "2") {
            more_inf.innerText = arr.slice(1,).toString();
        }
    }
    else {
        select_css.hidden = false;
        for (var i = 1; i < arr.length; i++) {
            var op = document.createElement("option");
            op.setAttribute("value", arr[i]);
            op.innerText = (arr[i]);
            select_css.appendChild(op);
        }
        select_css.value = elementSelected.style.getPropertyValue(property_name);
    }
}
function saveElementStyle() {
    let new_val;
    if (!document.getElementById("edit-menu").querySelector("#text_new_value_css").hidden) {
        new_val = document.getElementById("edit-menu").querySelector("#text_new_value_css").value;
    }
    else if (!document.getElementById("edit-menu").querySelector("#select_new_value_css").hidden) {
        new_val = document.getElementById("edit-menu").querySelector("#select_new_value_css").value;
    }
    else if (!document.getElementById("edit-menu").querySelector("#color_new_value_css").hidden) {
        new_val = document.getElementById("edit-menu").querySelector("#color_new_value_css").value;
    }
    elementSelected.style.setProperty(property_name, new_val);
}

function clear_all_style() {
    var width = elementSelected.style.width;
    var height = elementSelected.style.height;
    var top = elementSelected.style.top;
    var left = elementSelected.style.left;
    elementSelected.setAttribute("style", "");
    elementSelected.style.width = width;
    elementSelected.style.height = height;
    elementSelected.style.top = top;
    elementSelected.style.left = left;
}
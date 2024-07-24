let attribute_name = "id";

function select_attribute() {
    var text_ = document.getElementById("edit-menu").querySelector("#text_new_value");
    var select_ = document.getElementById("edit-menu").querySelector("#select_new_value_html");
    var InnerText = document.getElementById("edit-menu").querySelector("#innerText");
    InnerText.value = getText(elementSelected);
    text_.value = "";
    select_.innerHTML = "";

    text_.hidden = true;
    select_.hidden = true;

    attribute_name = document.getElementById("edit-menu").querySelector("#attributes").value;
    if (map_global[attribute_name] || attribute_name in map_Special_att_options) {
        select_.hidden = false;
        var arr_s;
        if (map_global[attribute_name])
            arr_s = map_global[attribute_name];
        else
            arr_s = map_Special_att_options[attribute_name];
        for (var i = 0; i < arr_s.length; i++) {
            var op = document.createElement("option");
            op.setAttribute("value", arr_s[i]);
            op.innerText = (arr_s[i]);
            select_.appendChild(op);
        }
        select_.value = elementSelected.getAttribute(attribute_name);
    }
    else {
        text_.hidden = false;
        text_.value = elementSelected.getAttribute(attribute_name);

    }

}

function updateMenuAttributes() {
    var attributes = document.getElementById("edit-menu").querySelector("#attributes");
    attributes.innerHTML = "";
    var val = elementSelected.tagName.toLowerCase();
    var arr = Object.keys(map_global);
    for (var i = 0; i < arr.length; i++) {
        var op = document.createElement("option");
        op.setAttribute("value", arr[i]);
        op.innerText = (arr[i]);
        attributes.appendChild(op);
    }
    if (val in map_Special) {
        var arr = map_Special[val];
        for (var i = 0; i < arr.length; i++) {
            var op = document.createElement("option");
            op.setAttribute("value", arr[i]);
            op.innerText = (arr[i]);
            attributes.appendChild(op);
        }
    }
}
function removeText(e) {
    var nodes = e.childNodes;
    for (var node of nodes) {
        if (node.nodeType == 3) {
            e.removeChild(node);
        }
    }
}
function getText(e) {
    var nodes = e.childNodes;
    var text = "";
    for (var node of nodes) {
        if (node.nodeType == 3) {
            text += node.textContent;
        }
    }
    return text;
}
function saveChangesInAttr(e) {
    let nw_val = e.value;
    if (e.id == "innerText") {
        removeText(elementSelected);
        elementSelected.appendChild(document.createTextNode(nw_val));
    }
    else if (attribute_name == "id") {
        changeID(elementSelected.id, nw_val);
    }
    else if (attribute_name == "type") {
        elementSelected.setAttribute(attribute_name, nw_val);
        updateId(elementSelected.id);
    }
    else {
        elementSelected.setAttribute(attribute_name, nw_val);
    }

}
function addRow() {
    if (elementSelected.tagName.toLowerCase() == "table") {
        var e = createNewElement("tr", "", "", false);
        elementSelected.appendChild(e);
        addId(e);
        selectElementById(e.id);
    }
}
function addCell() {
    if (elementSelected.tagName.toLowerCase() == "tr") {
        var e = createNewElement("td", "", "", false);
        elementSelected.appendChild(e);
        addId(e);
        selectElementById(e.id);
    }
}
function addItem() {
    if (elementSelected.tagName.toLowerCase() == "ol" || elementSelected.tagName.toLowerCase() == "ul") {
        var e = createNewElement("li", "", "", false);
        elementSelected.appendChild(e);
        addId(e);
        selectElementById(e.id);
    }
}
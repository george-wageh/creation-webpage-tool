

let arrElements = {};

let elementSelected;
let idSelected;

let id_cut_element;


function HtmlElementsToArray(arr) {

    if (arr != undefined) {
        for (var i = 0; i < arr.length; i++) {
            var e = createNewElement(arr[i].tagName.toLowerCase(), arr[i].id, arr[i], false);
            addId(e);
            HtmlElementsToArray(e.children);
        }
    }
}



function selectElementById(id) {
    if (elementSelected) {
        elementSelected.classList.remove("select");
        getId(elementSelected.id).classList.remove("select");
    }
    elementSelected = arrElements[id];
    elementSelected.classList.add("select");
    getId(id).classList.add("select");
    updateMenuAttributes();
    select_attribute();
    updateMenuStyleBasic();
}


function deleteElementHtml() {
    if (elementSelected.id != "root") {
        elementSelected.classList.remove("select");
        removeId(elementSelected.id);
        delete arrElements[elementSelected.id];
        elementSelected.remove();
        elementSelected = null;
        selectElementById("root");
    }
}
function textID(e) {
    var text = e.id + " (" + e.tagName.toLowerCase() + (e.getAttribute("type") ? "-" + e.getAttribute("type") : "") + ")";
    return text;
}
function addId(e) {
    var divParent = document.createElement("div");
    divParent.id = "div_" + e.id;
    var button = document.createElement("button");
    divParent.appendChild(button);
    button.classList.add("idInIdsMenu");
    divParent.classList.add("divHasIdChildren");
    button.id = e.id;
    var text = textID(e);
    button.innerText = text;
    button.title = text;
    button.style.marginLeft = "10px";
    divParent.style.marginLeft = "10px";
    if (e.id == "root") {
        document.getElementById("edit-menu").querySelector("#ids").appendChild(divParent);
    }
    else {
        var parent = document.getElementById("edit-menu").querySelector("#ids").querySelector("#div_" + e.parentElement.id);
        parent.appendChild(divParent);
    }
    button.onclick = SelectIdFromMenu;
    return button;
}

function removeId(id) {
    getDivId(id).remove();
}
function getId(id) {
    var element = document.getElementById("edit-menu").querySelector("#ids").querySelector("#" + id);
    return element;
}
function getDivId(id) {
    var element = document.getElementById("edit-menu").querySelector("#ids").querySelector("#div_" + id);
    return element;
}
function changeID(oldId, newId = "") {
    if (newId in arrElements) {
        window.alert("Id is already used")
    }
    else {
        var element = arrElements[oldId];
        delete arrElements[oldId];
        arrElements[newId] = element;
        var idInList = getDivId(oldId);
        idInList.id = "div_" + newId;
        idInList.children[0].id = newId;
        element.id = newId;
        idInList.children[0].innerHTML = textID(element);
    }
}
function updateId(oldId) {
    var element = arrElements[oldId];
    var idInList = getDivId(oldId);
    idInList.children[0].innerHTML = textID(element);
}
function cloneElement() {
    var e_clone = elementSelected.cloneNode(true);
    arrElements["root"].appendChild(e_clone);
    HtmlElementsToArray([e_clone]);
}


function SelectIdFromMenu(e) {
    if (e.ctrlKey)
        id_cut_element = elementSelected.id;
    selectElementById(this.id)
    if (e.ctrlKey)
        moveElement();
}

function moveElement() {
    elementSelected.appendChild(arrElements[id_cut_element]);
    getDivId(elementSelected.id).appendChild(getDivId(id_cut_element));
    setOrigin(arrElements[id_cut_element]);
    selectElementById(id_cut_element);
    id_cut_element = "";
}
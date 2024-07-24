var listElementsToAdd;
function intiaddElemetFromList() {
    listElementsToAdd = document.querySelector("#menuAddElementByList #all_elements");
    var arr = Object.keys(map1);
    for (var i = 0; i < arr.length; i++) {
        var op = document.createElement("option");
        op.setAttribute("value", arr[i]);
        op.innerText = (arr[i]);
        listElementsToAdd.appendChild(op);
    }
}

function add_element_from_select() {
    element_name = listElementsToAdd.value;
    var if_free = document.getElementById("edit-menu").querySelector("#freeAll").checked;
    var e = createNewElement(element_name, "", "", if_free);
    elementSelected.appendChild(e);
    addId(e);
    selectElementById(e.id);
}


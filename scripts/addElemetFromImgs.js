
let elementSelectedToAdd = null;

function intiaddElementFromImgs() {
    var elementsImgs = document.querySelectorAll("#menuAddElementByImg_imgs img");
    elementsImgs.forEach(element => {
        element.onclick = selectElementToAdd;
    });
    elementsImgs[0].classList.add("select");
    elementSelectedToAdd = elementsImgs[0];
}
function addElementFromImg() {
    var element_name;
    var typpe;
    var e;
    var if_free = document.getElementById("edit-menu").querySelector("#free").checked;
    if (elementSelectedToAdd.id.includes("input")) {
        element_name = "input";
        typpe = elementSelectedToAdd.id.slice(elementSelectedToAdd.id.indexOf('-') + 1,);
        e = createNewElement(element_name, "", "", if_free);
        e.setAttribute("type", typpe);
    }
    else {
        element_name = elementSelectedToAdd.id;
        e = createNewElement(element_name, "", "", if_free);
    }
    elementSelected.appendChild(e);
    addId(e);
    selectElementById(e.id);
}

function selectElementToAdd() {
    elementSelectedToAdd.classList.remove("select");
    elementSelectedToAdd = this;
    elementSelectedToAdd.classList.add("select");
}
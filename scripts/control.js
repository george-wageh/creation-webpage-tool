
window.onbeforeunload = function () {
    return "wait";
}

// document.onkeydown = function (e) {
//     if (e.ctrlKey &&
//         (e.keyCode === 67 ||
//             e.keyCode === 86 ||
//             e.keyCode === 68 ||
//             e.keyCode === 85 ||
//             e.keyCode === 117)) {
//         // alert('not allowed');
//         return false;
//     } else {
//         return true;
//     }
// };

var htmlStr = "";




var elementWidth;
var elementHeight;
var elementY;
var elementX;


var mouseX;
var mouseY;
var is_down = false;
var is_ctrl = false;
var is_alt = false;

function main() {
    id_cut_element = "" ;
    
    intiMenus();
    intiaddElementFromImgs();
    intiaddElemetFromList();
    intiBasicStyle();
    
    createRoot();
    show_all_properties();
    select_property();

    document.addEventListener("mousemove", Fmousemove, true);
    document.addEventListener("mouseup", Fmouseup, true);
    document.addEventListener("keydown", Altdown, true);
    document.addEventListener("keyup", Altup, true);
}

function reset(str) {

    arrElements.root.outerHTML = "";
    arrElements = {};
    elementSelected = null;
    id_cut_element = "";
    var element = document.getElementById("edit-menu").querySelector("#ids");
    element.innerHTML = "";
    var root = createRoot();
    root.insertAdjacentHTML("beforeend", str);
    HtmlElementsToArray(root.children);

}
function createNewElement(element_name, id_name, element, free) {
    if (element == "" || element == undefined || element == null) {
        element = document.createElement(element_name);
        if (free == true) {
            element.style.position = "absolute";
            element.style.left = "2px";
            element.style.top = "2px";
            element.style.width = "100px";
            element.style.height = "100px";
        }
    }
    if (id_name == "" || id_name == undefined) {
        do {
            var id, val_id;
            id = map1[element_name];
            val_id = id;
            val_id++;
            map1[element_name] = val_id;
            var id_ = element_name + "_" + id;
            element.setAttribute("id", id_);

        } while (id_ in arrElements);
        arrElements[element.getAttribute("id")] = element;
    }
    else {
        while (id_name in arrElements) {
            id_name = id_name + "_Copy";
        }
        element.setAttribute("id", id_name);
        arrElements[id_name] = element;
    }
    element.addEventListener("mousedown", Fmousedown, true);
    element.classList.add("anyElement");
    return element;
}

function createRoot() {
    var root = createNewElement("div", "root");
    document.getElementById('main').appendChild(root);
    elementSelected = root;
    addId(root);
    selectElementById(root.id);
    return root;
}

function setOrigin(element) {
    element.style.left = "0px";
    element.style.top = "0px";
}

function Fmousedown(e) {
    selectElementById(this.id);
    if (this.id != "root") {
        elementY = Number(this.style.top.slice(0, this.style.top.indexOf('px')));
        elementX = Number(this.style.left.slice(0, this.style.left.indexOf('px')));

        elementWidth = Number(this.style.width.slice(0, this.style.width.indexOf('px')));
        elementHeight = Number(this.style.height.slice(0, this.style.height.indexOf('px')));

        mouseX = e.clientX;
        mouseY = e.clientY;
        is_down = true;
        if (e.ctrlKey) {
            is_ctrl = true;
        }
    }
}

function Altdown(e) {
    if (e.keyCode == 18) is_alt = true;
    if (elementSelected.id != "root") {
        if (e.keyCode == 46) {
            //delete
            deleteElementHtml();
        }
        if (e.keyCode == 38) {
            //up
            var elementY = Number(elementSelected.style.getPropertyValue("top").slice(0, elementSelected.style.getPropertyValue("top").indexOf('px')));
            elementSelected.style.setProperty("top", (elementY - 2) + 'px');
        }
        if (e.keyCode == 40) {
            //down
            var elementY = Number(elementSelected.style.getPropertyValue("top").slice(0, elementSelected.style.getPropertyValue("top").indexOf('px')));
            elementSelected.style.setProperty("top", (elementY + 2) + 'px');
        }
        if (e.keyCode == 37) {
            //left
            var elementX = Number(elementSelected.style.getPropertyValue("left").slice(0, elementSelected.style.getPropertyValue("left").indexOf('px')));
            elementSelected.style.setProperty("left", (elementX - 2) + 'px');
        }
        if (e.keyCode == 39) {
            //right
            var elementX = Number(elementSelected.style.getPropertyValue("left").slice(0, elementSelected.style.getPropertyValue("left").indexOf('px')));
            elementSelected.style.setProperty("left", (elementX + 2) + 'px');
        }
        if (is_alt && e.keyCode == 68) {
            //D
            cloneElement();
            selectElementById("root");
        }
        if (is_alt && e.keyCode == 88) {
            //x
            id_cut_element = elementSelected.id;
        }
    }
    if (is_alt && e.keyCode == 86) {
        //v
        if (id_cut_element != "") {
            moveElement();
        }
    }


}
function Altup(e) {
    is_alt = false;
}
function Fmouseup(e) {
    is_down = false;
    is_ctrl = false;
}
function Fmousemove(e) {
    if (is_down) {
        if (is_ctrl) {
            elementSelected.style.setProperty("height", ((-mouseY + e.clientY) + elementHeight) + 'px');
            elementSelected.style.setProperty("width", ((-mouseX + e.clientX) + elementWidth) + 'px');
            updateMenuStyleBasic();
        }
        else {
            var position = elementSelected.style.position;
            if (position != "" && position != "static") {
                elementSelected.style.setProperty("top", ((-mouseY + e.clientY) + elementY) + 'px');
                elementSelected.style.setProperty("left", ((-mouseX + e.clientX) + elementX) + 'px');
            }
        }
    }
}

function downloadPage() {
    var fileName = document.getElementById('fileName').value;
    if (fileName == "") {
        fileName = "document";
    }
    var element = document.createElement('a');
    elementSelected.classList.remove("select");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(arrElements["root"].innerHTML));
    element.setAttribute('download', fileName + ".html");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function uploadFile() {
    var fr = new FileReader();
    fr.onload = function () {
        htmlStr = fr.result;
        reset(htmlStr);
    }
    fr.readAsText(this.event.target.files[0]);
}
function createNew() {
    reset("");
}
function resetClick() {
    reset(htmlStr);
}

var layout={
    dfdf:()=>{
        return 5;
    }
}

var menus = {};

function intiMenus() {
    var menuAddElementByImg = document.getElementById("edit-menu").querySelector("#menuAddElementByImg");
    var menuAddElementByList = document.getElementById("edit-menu").querySelector("#menuAddElementByList");
    var menuSelectElement = document.getElementById("edit-menu").querySelector("#menuSelectElement");
    var menuAttributes = document.getElementById("edit-menu").querySelector("#menuAttributes");
    var menuCss = document.getElementById("edit-menu").querySelector("#menuCss");
    var menuBasicCss = document.getElementById("edit-menu").querySelector("#menuBasicCss");

    menus["label_menuAddElementByImg"] = menuAddElementByImg;
    menus["label_menuAddElementByList"] = menuAddElementByList;
    menus["label_menuSelectElement"] = menuSelectElement;
    menus["label_menuAttributes"] = menuAttributes;
    menus["label_menuCss"] = menuCss;
    menus["label_menuBasicCss"] = menuBasicCss;

}




function Show_hide_menu(element) {
    if (menus[element.id].style.getPropertyValue("display") == "none") {
        element.style.width = "50px";
        menus[element.id].style.setProperty("display", "block");
    }
    else {
        element.style.width = "40px";
        menus[element.id].style.setProperty("display", "none");
    }
}

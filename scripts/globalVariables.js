const map1 = {};
map1['div'] = 0;
map1['span'] = 0;
map1['h1'] = 0;
map1['h2'] = 0;
map1['h3'] = 0;
map1['h4'] = 0;
map1['h5'] = 0;
map1['h6'] = 0;
map1['pre'] = 0;
map1['address'] = 0;
map1['aside'] = 0;
map1['audio'] = 0;

map1['b'] = 0;
map1['strong'] = 0;
map1['i'] = 0;
map1['mark'] = 0;
map1['small'] = 0;
map1['del'] = 0;
map1['ins'] = 0;
map1['sub'] = 0;
map1['sup'] = 0;
map1['a'] = 0;
map1['table'] = 0;
map1['tr'] = 0;
map1['th'] = 0;
map1['td'] = 0;
map1['code'] = 0;
map1['form'] = 0;
map1['input'] = 0;
map1['label'] = 0;
map1['button'] = 0;
map1['textarea'] = 0;

map1['p'] = 0;
map1['br'] = 0;
map1['hr'] = 0;
map1['img'] = 0;
map1['iframe'] = 0;
map1['select'] = 0;
map1['option'] = 0;
map1['ol'] = 0;
map1['ul'] = 0;
map1['dl'] = 0;
map1['li'] = 0;
map1['abbr'] = 0;
map1['video'] = 0;
map1['embed'] = 0;
map1['figure'] = 0;
map1['figcaption'] = 0;




var properties_map = {};
properties_map["font"] = ["2"
    , "font-style"
    , "font-family"
    , "font-size"
    , "font-weight"
    , "font-variant"
    , "line-height"
    , "initial"
    , "inherit"];
properties_map["text-align"] = ["1", "left"
    , "right"
    , "center"
    , "justify"
    , "initial"
    , "inherit"];
properties_map["vertical-align"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "baseline"
    , "sub"
    , "super"
    , "top"
    , "text-top"
    , "middle"
    , "bottom"
    , "text-bottom"
    , "initial"
    , "inherit"];
properties_map["word-break"] = ["1", "normal"
    , "break-all"
    , "keep-all"
    , "initial"
    , "inherit"];
properties_map["word-spacing"] = ["2"
    , "length (10px)"
    , "initial"
    , "inherit"];
properties_map["white-space"] = ["1", "normal"
    , "nowrap"
    , "pre"
    , "pre-line"
    , "pre-wrap"
    , "initial"
    , "inherit"];
properties_map["word-wrap"] = ["1", "normal"
    , "break-all"
    , "initial"
    , "inherit"];
properties_map["letter-spacing"] = ["2"
    , "length (10px)"
    , "normal"
    , "initial"
    , "inherit"];
properties_map["line-height"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "number"
    , "normal"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["overflow"] = ["1", "visible"
    , "hidden"
    , "scroll"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["overflow-x"] = ["1", "visible"
    , "hidden"
    , "scroll"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["overflow-y"] = ["1", "visible"
    , "hidden"
    , "scroll"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["text-align-last"] = ["1", "left"
    , "right"
    , "center"
    , "justify"
    , "auto"
    , "start"
    , "end"
    , "initial"
    , "inherit"];
properties_map["text-decoration"] = ["1", "none"
    , "underline"
    , "overline"
    , "line-through"
    , "blink"
    , "inherit"];
properties_map["text-decoration-color"] = "";
properties_map["text-decoration-line"] = ["1", "none"
    , "underline"
    , "overline"
    , "line-through"
    , "blink"
    , "initial"
    , "inherit"];
properties_map["text-decoration-style"] = ["1", "solid"
    , "dotted"
    , "dashed"
    , "double"
    , "wavy"
    , "initial"
    , "inherit"];
properties_map["text-indent"] = "";
properties_map["text-justify"] = ["1", "auto"
    , "none"
    , "inter-word"
    , "distribute"
    , "initial"
    , "inherit"];
properties_map["text-overflow"] = "";
properties_map["text-shadow"] = "";
properties_map["text-transform"] = ["1", "capitalize"
    , "lowercase"
    , "uppercase"
    , "none"
    , "initial"
    , "inherit"];
properties_map["transform"] = "";
properties_map["transform-origin"] = "";
properties_map["transform-style"] = ["1", "flat"
    , "preserve-3d"
    , "initial"
    , "inherit"];
properties_map["font-family"] = "";
properties_map["font-size"] = ["2"
    , "xx-small"
    , "x-small"
    , "small"
    , "medium"
    , "large"
    , "xx-large"
    , "x-large"
    , "smaller"
    , "larger"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["font-size-adjust"] = ["2"
    , "number"
    , "none"
    , "initial"
    , "inherit"];
properties_map["font-stretch"] = ["1", "normal"
    , "ultra-condensed"
    , "extra-condensed"
    , "condensed"
    , "semi-condensed"
    , "semi-expanded"
    , "expanded"
    , "extra-expanded"
    , "ultra-expanded"
    , "initial"
    , "inherit"];
properties_map["font-style"] = ["1", "normal"
    , "italic"
    , "oblique"
    , "inherit"];
properties_map["font-variant"] = ["1", "normal"
    , "small-caps"
    , "initial"
    , "inherit"];
properties_map["font-weight"] = ["1", "100"
    , "200"
    , "300"
    , "400"
    , "500"
    , "600"
    , "700"
    , "800"
    , "900"];
properties_map["direction"] = ["1", "ltr"
    , "rtl"
    , "initial"
    , "inherit"];
properties_map["content"] = ["2"
    , "normal"
    , "none"
    , "counter"
    , "string ('dfdf')"
    , "url(url)"
    , "attr(attribute)"
    , "open-quote"
    , "close-quote"
    , "no-open-quote"
    , "no-close-quote"
    , "initial"
    , "inherit"];





properties_map["top"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["bottom"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["left"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["right"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["position"] = ["1", "static"
    , "relative"
    , "absolute"
    , "fixed"
    , "sticky"
    , "initial"
    , "inherit"];
properties_map["width"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["height"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["max-height"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "none"
    , "initial"
    , "inherit"];
properties_map["max-width"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "none"
    , "initial"
    , "inherit"];
properties_map["min-height"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "none"
    , "initial"
    , "inherit"];;
properties_map["min-width"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "none"
    , "initial"
    , "inherit"];
properties_map["padding"] = "";
properties_map["padding-bottom"] = "";
properties_map["padding-left"] = "";
properties_map["padding-right"] = "";
properties_map["padding-top"] = "";

properties_map["margin"] = "";
properties_map["margin-bottom"] = "";
properties_map["margin-left"] = "";
properties_map["margin-right"] = "";
properties_map["margin-top"] = "";


properties_map["backface-visibility"] = ["1", "visible"
    , "hidden"
    , "initial"
    , "inherit"];







properties_map["background"] = ["2", "background-attachment"
    , "background-attachment"
    , "background-clip"
    , "background-color"
    , "background-image"
    , "background-origin"
    , "background-position"
    , "background-repeat"
    , "background-size"
    , "initial"
    , "inherit"];
properties_map["background-attachment"] = ["1", "scroll"
    , "fixed"
    , "local"
    , "initial"
    , "inherit"];
properties_map["background-clip"] = ["1", "border-box"
    , "padding-box"
    , "content-box"
    , "initial"
    , "inherit"];
properties_map["background-color"] = "";
properties_map["background-image"] = ["2", "url"
    , "none"
    , "initial"
    , "inherit"];
properties_map["background-origin"] = ["1", "border-box"
    , "padding-box"
    , "content-box"
    , "initial"
    , "inherit"];
properties_map["background-position"] = ["2", "bottom"
    , "center"
    , "left"
    , "right"
    , "top"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["background-repeat"] = ["1", "repeat"
    , "repeat-x"
    , "repeat-y"
    , "no-repeat"
    , "initial"
    , "inherit"];
properties_map["background-size"] = ["2", "auto"
    , "cover"
    , "contain"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];

















properties_map["border"] = ["2", "border-width"
    , "border-style"
    , "border-color (2px red solid)"
    , "initial"
    , "inherit"];
properties_map["border-bottom"] = ["2", "border-width"
    , "border-style"
    , "border-color (2px red solid)"
    , "initial"
    , "inherit"];
properties_map["border-bottom-color"] = "";
properties_map["border-bottom-left-radius"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["border-bottom-right-radius"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["border-bottom-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["border-bottom-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["border-collapse"] = ["1", "separate"
    , "collapse"
    , "initial"
    , "inherit"];
properties_map["border-color"] = "";
properties_map["border-image"] = ["2"
    , "border-image-source"
    , "border-image-slice"
    , "border-image-width"
    , "border-image-outset"
    , "border-image-repeat"
    , "initial"
    , "inherit"];
properties_map["border-image-outset"] = ["2"
    , "length (10px)"
    , "number"
    , "initial"
    , "inherit"];
properties_map["border-image-repeat"] = ["1", "stretch"
    , "repeat"
    , "round"
    , "space"
    , "initial"
    , "inherit"];
properties_map["border-image-slice"] = ["2"
    , "percentage (10%)"
    , "number (30)"
    , "fill"
    , "initial"
    , "inherit"];
properties_map["border-image-source"] = ["2", "url"
    , "none"
    , "initial"
    , "inherit"];
properties_map["border-image-width"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "number"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["border-left"] = ["2", "border-width"
    , "border-style"
    , "border-color (2px red solid)"
    , "initial"
    , "inherit"];
properties_map["border-left-color"] = "";
properties_map["border-left-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["border-left-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["border-radius"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["border-right"] = ["2", "border-width"
    , "border-style"
    , "border-color (2px red solid)"
    , "initial"
    , "inherit"];
properties_map["border-right-color"] = "";
properties_map["border-right-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["border-right-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["border-spacing"] = ["2"
    , "length (10px)"
    , "initial"
    , "inherit"];
properties_map["border-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["border-top"] = ["2", "border-width"
    , "border-style"
    , "border-color (2px red solid)"
    , "initial"
    , "inherit"];
properties_map["border-top-color"] = "";
properties_map["border-top-left-radius"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];
properties_map["border-top-right-radius"] = ["2"
    , "length (10px)"
    , "percentage (10%)"
    , "initial"
    , "inherit"];;
properties_map["border-top-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["border-top-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["border-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["outline"] = "";
properties_map["outline-color"] = "";
properties_map["outline-offset"] = "";
properties_map["outline-style"] = ["1", "none"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["outline-width"] = "";







properties_map["box-shadow"] = ["2"
    , "offset-x"
    , "offset-y"
    , "blur-radius"
    , "spread-radius"
    , "color"
    , "inset"
    , "none"
    , "initial"
    , "inherit"];
properties_map["box-sizing"] = ["1", "content-box"
    , "padding-box"
    , "border-box"
    , "initial"
    , "inherit"];
properties_map["caption-side"] = ["1", "top"
    , "bottom"
    , "initial"
    , "inherit"];
properties_map["color"] = "";
properties_map["column-count"] = ["2"
    , "number"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["column-fill"] = ["1", "balance"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["column-gap"] = ["2"
    , "length (10px)"
    , "normal"
    , "initial"
    , "inherit"];
properties_map["column-rule"] = ["2"
    , "column-rule-width"
    , "column-rule-style"
    , "column-rule-color"
    , "initial"
    , "inherit"];
properties_map["column-rule-color"] = "";
properties_map["column-rule-style"] = ["1", "none"
    , "hidden"
    , "dotted"
    , "dashed"
    , "solid"
    , "double"
    , "groove"
    , "ridge"
    , "inset"
    , "outset"
    , "initial"
    , "inherit"];
properties_map["column-rule-width"] = ["2"
    , "length (10px)"
    , "thin"
    , "medium"
    , "thick"
    , "initial"
    , "inherit"];
properties_map["column-span"] = ["1", "none"
    , "all"
    , "initial"
    , "inherit"];
properties_map["column-width"] = ["2"
    , "length (10px)"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["columns"] = ["2"
    , "column-width"
    , "column-count"
    , "initial"
    , "inherit"];

properties_map["counter-increment"] = ["2"
    , "identifier ()"
    , "integer ()"
    , "none"
    , "initial"
    , "inherit"];
properties_map["counter-reset"] = ["2"
    , "identifier ()"
    , "integer ()"
    , "none"
    , "initial"
    , "inherit"];
properties_map["cursor"] = ["1", "auto"
    , "default"
    , "none"
    , "initial"
    , "inherit"
    , "context-menu"
    , "help"
    , "pointer"
    , "progress"
    , "wait"
    , "cell"
    , "crosshair"
    , "text"
    , "vertical-text"
    , "alias"
    , "copy"
    , "move"
    , "no-drop"
    , "not-allowed"
    , "all-scroll"
    , "col-resize"
    , "row-resize"
    , "n-resize"
    , "e-resize"
    , "s-resize"
    , "w-resize"
    , "ne-resize"
    , "nw-resize"
    , "se-resize"
    , "sw-resize"
    , "ew-resize"
    , "ns-resize"
    , "nesw-resize"
    , "nwse-resize"
    , "zoom-in	Zoom-in"
    , "zoom-out"
    , "grab"
    , "grabbing"];

properties_map["display"] = ["1", "inline"
    , "block"
    , "contents"
    , "flex"
    , "flow"
    , "flow-root"
    , "grid"
    , "inline-block"
    , "inline-flex"
    , "inline-grid"
    , "inline-table"
    , "list-item"
    , "run-in"
    , "table"
    , "table-caption"
    , "table-column-group"
    , "table-header-group"
    , "table-footer-group"
    , "table-row-group"
    , "table-cell"
    , "table-column"
    , "table-row"
    , "none"
    , "initial"
    , "inherit"];
properties_map["float"] = ["1", "left"
    , "right"
    , "none"
    , "initial"
    , "inherit"];
properties_map["clear"] = ["1", "left"
    , "right"
    , "both"
    , "auto"
    , "initial"
    , "inherit"];


properties_map["flex"] = ["2"
    , "flex-grow"
    , "flex-shrink"
    , "flex-basis"
    , "none"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["order"] = ["2"
    , "integer"
    , "initial"
    , "inherit"];
properties_map["flex-basis"] = ["2"
    , "width"
    , "auto"
    , "initial"
    , "inherit"];
properties_map["flex-direction"] = ["1", "row"
    , "row-reverse"
    , "column"
    , "column-reverse"
    , "initial"
    , "inherit"];
properties_map["flex-flow"] = ["2"
    , "flex-direction"
    , "flex-wrap"
    , "initial"
    , "inherit"];
properties_map["flex-grow"] = ["2"
    , "number"
    , "initial"
    , "inherit"];
properties_map["flex-shrink"] = ["2"
    , "number"
    , "initial"
    , "inherit"];
properties_map["flex-wrap"] = ["1", "nowrap"
    , "wrap"
    , "wrap-reverse"
    , "initial"
    , "inherit"];
properties_map["justify-content"] = ["1", "flex-start"
    , "flex-end"
    , "center"
    , "space-between"
    , "space-around"
    , "initial"
    , "inherit"];
properties_map["align-content"] = ["1", "center"
    , "flex-start"
    , "flex-end"
    , "space-between"
    , "space-around"
    , "stretch"
    , "initial"
    , "inherit"];
properties_map["align-items"] = ["1", "center"
    , "flex-start"
    , "flex-end"
    , "space-between"
    , "baseline"
    , "stretch"
    , "initial"
    , "inherit"];
properties_map["align-self"] = ["1", "center"
    , "flex-start"
    , "flex-end"
    , "space-between"
    , "baseline"
    , "stretch"
    , "initial"
    , "auto"
    , "inherit"];





properties_map["empty-cells"] = ["1", "show"
    , "hide"
    , "initial"
    , "inherit"];
properties_map["list-style"] = ["2"
    , "list-style-type"
    , "list-style-position"
    , "list-style-position"
    , "initial"
    , "inherit"];
properties_map["list-style-image"] = ["2"
    , "url"
    , "none"
    , "oblique"
    , "initial"
    , "inherit"];
properties_map["list-style-position"] = ["1", "inside"
    , "outside"
    , "initial"
    , "inherit"];
properties_map["list-style-type"] = ["1", "disc"
    , "circle"
    , "square"
    , "decimal"
    , "decimal-leading-zero"
    , "lower-roman"
    , "upper-roman"
    , "lower-greek"
    , "lower-latin"
    , "upper-latin"
    , "armenian"
    , "georgian"
    , "none"
    , "lower-alpha"
    , "upper-alpha"
    , "initial"
    , "inherit"];;









properties_map["opacity"] = ["2"
    , "alphavalue (0-1)"
    , "initial"
    , "inherit"];





properties_map["page-break-after"] = ["1", "auto"
    , "always"
    , "avoid"
    , "left"
    , "right"
    , "initial"
    , "inherit"];
properties_map["page-break-before"] = ["1", "auto"
    , "always"
    , "avoid"
    , "left"
    , "right"
    , "initial"
    , "inherit"];
properties_map["page-break-inside"] = ["1", "auto"
    , "avoid"
    , "initial"
    , "inherit"];
properties_map["perspective"] = ["2"
    , "length (10px)"
    , "none"
    , "initial"
    , "inherit"];
properties_map["perspective-origin"] = ["2"
    , "x-position"
    , "y-position"
    , "initial"
    , "inherit"];

properties_map["quotes"] = "";
properties_map["resize"] = ["1", "none"
    , "both"
    , "horizontal"
    , "vertical"
    , "initial"
    , "inherit"];

properties_map["tab-size"] = "";
properties_map["table-layout"] = ["1", "auto"
    , "fixed"
    , "initial"
    , "inherit"];
properties_map["transition"] = "";
properties_map["transition-delay"] = "";
properties_map["transition-duration"] = "";
properties_map["transition-property"] = "";
properties_map["transition-timing-function"] = ["1", "linear"
    , "ease"
    , "ease-in"
    , "ease-out"
    , "ease-in-out"
    , "initial"
    , "inherit"];

properties_map["visibility"] = ["1", "visible"
    , "hidden"
    , "collapse"
    , "initial"
    , "inherit"];

properties_map["z-index"] = ["2"
    , "number ()"
    , "initial"
    , "inherit"];


/////////////////////////////////////////////////////////////////////////


let map_global = {};
map_global["id"] = "";
map_global["contenteditable"] = ["true", "false"];
map_global["title"] = "";
map_global["action"] = "";
map_global["alt"] = "";
map_global["autocomplete"] = ["on", "off"];
/////////////////////////////////////////////////////////////////////////
const map_Special = {};
map_Special["a"] = ["href", "target"];
map_Special["audio"] = ["src"];
map_Special["video"] = ["src"];
map_Special["img"] = ["src"];
map_Special["embed"] = ["src"];
map_Special["form"] = ["action", "method"];
map_Special["input"] = ["type", "minlength", "maxlength", "src", "value", "step", "min", "max", "name"];
/////////////////////////////////////////////////////////////////////////
let map_Special_att_options = {}
map_Special_att_options["target"] = ["_self", "_blank", "_parent", "_top"];
map_Special_att_options["method"] = ["post", "get", "dialog"];
map_Special_att_options["type"] = ["button", "submit", "checkbox", "color", "date", "datetime-local", "email", "file", "number", "password", "radio", "range", "reset", "search", "text"];
/////////////////////////////////////////////////////////////////////////

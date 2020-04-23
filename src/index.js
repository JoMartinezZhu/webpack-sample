import "./math";
import text from "./demo.text";
var body = document.querySelector("body");

const child = () => {
    const div = document.createElement("div");
    div.style = "width:100px;height:100px;background:red;cursor: pointer;";
    div.innerHTML = text;
    div.onclick = handleClick;
    return div;
};

function handleClick(e) {
    import(/* webpackChunkName:"page1" */ "./page1").then(({ page1 }) => {
        const ele = page1("after click loaded");
        document.querySelector("body").appendChild(ele);
    });
}

body.appendChild(child());

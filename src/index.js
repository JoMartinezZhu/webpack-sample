import "./math";
var body = document.querySelector("body");

const child = () => {
    const div = document.createElement("div");
    div.style = "width:100px;height:100px;background:red;cursor: pointer;";
    // div.innerHTML = add(1, 2);
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

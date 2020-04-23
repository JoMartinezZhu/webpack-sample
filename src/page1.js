export function page1(name) {
    const div = document.createElement("div");
    div.innerHTML = `<span style="color:green;font-size:14px;">hellow ${name}  ,welcome page1</span>`;
    return div;
}

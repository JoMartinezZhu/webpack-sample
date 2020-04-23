const { getOptions } = require("loader-utils");
module.exports = function (content, map, meta) {
    const opts = getOptions(this) || {};
    console.log("opts ", opts);
    const str = JSON.stringify(content);
    const isESM = typeof opts.esModule !== "undefined" ? opts.esModule : true;

    return `${isESM ? "export default " : "module.exports = "} ${str}`;
};

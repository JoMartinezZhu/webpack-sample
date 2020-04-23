module.exports = function (content, map, meta) {
    console.log("enter console loader");
    return `${content}; console.log('loader exec')`;
};

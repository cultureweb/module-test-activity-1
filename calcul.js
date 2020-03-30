const sum = (a, b) => {
    return a + b;
}
const mult = (a, b) => {
    return a * b;
}
const div = (a, b) => {
    return a / b;
}
const sub = (a, b) => {
    return a - b;
}
const date2000 =  () => {
    let entryDate = new Date("2000-01-01T00:00:00");
    let now = Date.now();
    console.log({entryDate})
    console.log({now})

    return ( now - entryDate ) /1000;
};

module.exports = {
    sum,
    mult,
    div,
    sub,
    date2000
};

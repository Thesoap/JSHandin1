

let names = ["Dårlig warlock","BiS frost mage","95%+ druid","bedre end Peter tank"];

let rows = names.map(function(name){
    return "<td>"+name+"</td>";
});

let rowsStr =  rows.join(" ");
console.log(rowsStr);
let table = `<table><tbody> ${rowsStr} </tbody></table>`
console.log(table);
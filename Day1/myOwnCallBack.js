
let names = ["Dårlig warlock","BiS frost mage","95%+ druid","bedre end Peter tank"];

function filter(arr,callback){
    let arrayToReturn = [];
    arr.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude){
            arrayToReturn.push(name);
        }
    })
    return arrayToReturn;
}

let names2 = filter(names,function(name){
    return name.length >=3;
});
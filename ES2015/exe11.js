function* makeNames() {

    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];

    while (true) {
        ranPersons = {};
        ranPersons.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        ranPersons.lastName = lastNames[Math.floor(Math.random() * firstNames.length)];
        yield ranPersons;
    };

};


let index = 0;
for (let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}
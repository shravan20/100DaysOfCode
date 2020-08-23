const fs = require('fs');
const { uuid } = require('uuidv4');


const createTextFile = async(content) => {

    let id = await uuid();

    let fileName = './text/' + id + '.txt'

    fs.writeFile(fileName, content, (err, data) => {
        if (err)
            console.log("Error:", err);

        console.log(data);

    });

}


createTextFile('This is an PoC');
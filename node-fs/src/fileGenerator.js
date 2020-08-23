import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';


exports.createTextFile = async(content) => {

    let fileName = './text/' + uuidv4() + '.txt'

    return await fs.writeFile(fileName, content);

}
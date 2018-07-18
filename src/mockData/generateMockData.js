import jsf from 'json-schema-faker';
import schema from './mockData';
import fs from 'fs-extra';
import chalk from 'chalk';


// Use json-schema data and convert to string using json stringify.
const json = JSON.stringify(jsf(schema));

// Write generated json-schema to a file using module file system extra.
fs.writeFile('../api/db.json', json, function (error) {
    if (error) {
        return console.log(chalk.red(error));
    }
    else {
        console.log(chalk.green("Mock data generated."));
    }
});
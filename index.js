#!/usr/bin/env node
const chalk = require('chalk');

console.log(chalk.blue('\n Hello') + ' World' + chalk.red('!\n'));

const work = chalk.yellow('Developer');
console.log(chalk.green(' Work   : %s'), work);

const github = chalk.yellow.underline('https://github.com/rajithakumara');
console.log(chalk.green(' Github : %s'), github);

const web = chalk.yellow.underline('https://rajithakumara.wordpress.com');
console.log(chalk.green(' Web    : %s'), web);

console.log(
    `${chalk.red('\n Have')}`,
    `${chalk.magenta('a')}`,
    `${chalk.yellow('nice')}`,
    `${chalk.blue('day')}`,
    `${chalk.cyan('!\n')}`
);

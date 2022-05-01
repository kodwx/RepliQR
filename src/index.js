import { program } from 'commander';
import qrcode from 'qrcode-terminal';
import chalk from 'chalk';


console.log(chalk.blueBright.bold(`\nRepliQR v0.0.1`));
console.log(`by Tarun Agarwal\n`);

program
  .name('RepliQR')
  .usage("<command>")
  .helpOption('-h, --help', 'Displays help')
  .addHelpCommand(false)
  .addHelpText('after', ' ') // To create a single new line after help text
  .description('Copy and paste directly from your computer to any phone')
  .version('Installed version : v0.0.1', '-v, --version', 'Outputs the currently installed version');

program.command('text')
  .description('Copy and paste text')
  .argument('<text...>', 'string to copy')
  .option('-s, --small', 'Smaller QR code')
  .action((str, options) => {
    if (options.small)
      qrcode.generate(str.join(" "), {small:true});
    else  
      qrcode.generate(str.join(" "));
  });

program.showSuggestionAfterError();
program.parse();
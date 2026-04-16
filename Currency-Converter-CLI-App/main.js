import fs from "fs"

const RATES = Object.freeze ({ 
    euro: 260.00, 
    dollar: 240.00 
});

const sourceFile = "alltransactions.txt";

const args = process.argv.slice(2);
const command = args[0];
const user = args[1];
const currency = args[2]?.toLowerCase();
const amount = parseFloat(args[3]);


switch (command) {
    case "add":
        if (user && currency && !isNaN(amount)) {
            addTransaction(user, currency, amount);
        } else {
          console.log("Error: Please provide [name] [euro/dollar] [amount]")}
        break;
    default:
          console.log("Command not recognized. Use: node converter.js add [name] [currency] [amount]");    
        break;
}

function addTransaction(username, curr, val) {
    const rate = RATES[curr];
    if (!rate) {
        console.log(" Invalid currency, Use 'euro' or 'dollar'.");
        return;
    }

    const converted = (val * rate);
    const now = new Date();
    const datetime = now.toLocaleString("fr-DZ");
    const logEntry = `${datetime} | User: ${username} | ${val} ${curr.toUpperCase()} = ${converted} DZD\n`;

    fs.appendFileSync(sourceFile, logEntry);

    console.log(`${val} ${curr} converted to ${converted} DZD and saved to ${sourceFile}`);
}


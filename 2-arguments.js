const args = process.argv.slice(3);
if (args.length === 0) {
    console.log('No argument');
} else if (args.length === 1) {
    console.log("Best Argument found");
} else {
    console.log("Best School Arguments found");
}

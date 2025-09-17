const x = parseInt(ProcessingInstruction.argv[2]);
if (isNaN(x)) {
    console.log("Usage: node 7-multi_c.js 2");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");        
    }
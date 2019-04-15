const fs = require('fs');
var readline = require('readline');
var cntr = 0;

const ArgumentParser  = require('argparse').ArgumentParser;
var argsParser = new ArgumentParser({ addHelp:true, description:"Small NodeJS script to peek into text file contents at specified line and column numbers" , debug: true });
argsParser.addArgument(["--InputFile", "-i"], { help:"input file to be peeked. If omitted, stdin stream will be used", required:false, defaultValue:"stdin" })
argsParser.addArgument(["--Line", "-l"], { type:"int", help:"line number counting from 1", required:false, defaultValue:0 })
argsParser.addArgument(["--Column", "-c"], { type:"int", help:"column number counting from 1", required:false, defaultValue:0 })
argsParser.addArgument(["--PeekForward", "-f"], { type:"int", help:"no of characters to peek into starting from specified column", required:false, defaultValue:20 })

var args;
try {
    args = argsParser.parseArgs();
    console.dir(args);
} catch (error) {
    argsParser.error(`Error:${error!=null?error:"Unknown error"}`);
    argsParser.exit();
}

var inputstream;

if (args.InputFile == "stdin")
    inputstream = process.stdin;
else
    inputstream = fs.createReadStream(args.InputFile);

var rl = readline.createInterface({
    input: inputstream,
});

rl.on('line', function(line) {
    if ((++cntr) == args.Line) {
        console.log(line.substr(args.Column-1,args.PeekForward));
        rl.close();
    }
});

rl.on('close', function(){
    console.log("closed file");
});

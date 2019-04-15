# peekfile
Small NodeJS script to peek into text file contents at specified line and column numbers


**usage:** index.js [-h] [--InputFile INPUTFILE] [--Line LINE] [--Column COLUMN] [--PeekForward PEEKFORWARD] <br/>


Small NodeJS script to peek into text file contents at specified line and column numbers <br/>

Optional arguments: <br/>
*  -h, --help           <br /> 
                        Show this help message and exit. <br/>
*  --InputFile INPUTFILE, -i INPUTFILE <br/>
                        input file to be peeked. If omitted, stdin stream will be used <br/>
*  --Line LINE, -l LINE  line number counting from 1 <br/>
*  --Column COLUMN, -c COLUMN <br/>
                        column number counting from 1 <br/>
*  --PeekForward PEEKFORWARD, -f PEEKFORWARD <br/>
                        no of characters to peek into starting from specified column <br/>

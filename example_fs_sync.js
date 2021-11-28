//using the filesystem module in node its represented as fs

//insted of importing the whole filesystem as shown below:
// const fs = requre('fs'), we are goning to destructure it as follows, i.e select what we need

const {readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./Content/first.txt','utf8')
//console.log(first);

//using writefileSync to create a new file that is none existent

writeFileSync('./Content/third.text',`Node is interesting`,
{flag:'a'});


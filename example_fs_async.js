//using the filesystem module in node its represented as fs

//insted of importing the whole filesystem as shown below:
// const fs = requre('fs'), we are goning to destructure it as follows, i.e select what we need

const {readFile, writeFile } = require('fs');

//using the synchronous file system where we use callback functons

readFile('./Content/first.txt', 'utf8',(err, result) => {

    if(err)
    {
        console.log(err);
        return;
        
    }

    const first = result;

    writeFile('./Content/fourth_text_syn.txt', `Here is a fourth text created synchronously`,
    (err, result)=>{
        if(err)
        {
            console.log(err);
            
        }

        console.log(result);
        
    })
})



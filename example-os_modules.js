const os = require('os')

const userInfo = os.userInfo()
//console.log(userInfo);

// To get the uptime that is how long the system has been running, in seconds we use

const upTime = os.uptime();

//console.log(`The system has been running for ${upTime} seconds`);

//geting details about the machine on which node is running on

const currentOs = {

    type:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOs);

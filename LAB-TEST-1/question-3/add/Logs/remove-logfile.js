const fs = require('fs');
const path = require('path');
const logsDir = path.join('C:\\Users\\pc2\\Documents\\College\\5th semester\\comp 3123\\101447984_comp3123_labtest1\\LAB-TEST-1\\question-3\\add\\Logs');

function removeLogFiles() {
    if (fs.existsSync(logsDir)) {
        
        fs.readdirSync(logsDir).forEach((file) => {
            const filePath = path.join(logsDir, file);
            
            console.log(`Deleting file: ${file}`);
            
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logsDir);
        console.log(`Logs directory removed`);
    } else {
        console.log(`Logs directory does not exist at path: ${logsDir}`);
    }
}

removeLogFiles();

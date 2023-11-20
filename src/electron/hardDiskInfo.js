const util = require('util');
const { exec } = require('child_process');
const execPromise = util.promisify(exec);
exports.getHardDiskModel = async () => {
    if(process.platform==="win32"){
        // const diskDriveModelCommand = 'wmic diskdrive get model';
        // try {
        //     const { stdout, stderr } = await execPromise(diskDriveModelCommand);
        //     if (stderr) {
        //         console.error(`Error getting hard disk model: ${stderr}`);
        //         return null;
        //     }
        //     const model = stdout.trim();
        //     return model;
        // } catch (error) {
        //     console.error(`Error getting hard disk model: ${error.message}`);
        //     return null;
        // }
        const response=await getHardDiskModelWin32()
        return response
    }
};
exports.getHardDiskSize = async () => {
    if(process.platform==="win32"){
        const response=await getHardDiskSizeWin32()
        return response
    }
    // const diskDriveSizeCommand = 'wmic diskdrive get size';
    // try {
    //     const { stdout, stderr } = await execPromise(diskDriveSizeCommand);
    //     if (stderr) {
    //         console.error(`Error getting hard disk size: ${stderr}`);
    //         return null;
    //     }
    //     const size = stdout.trim();
    //     return size;
    // } catch (error) {
    //     console.error(`Error getting hard disk size: ${error.message}`);
    //     return null;
    // }
};
exports.getHardDiskFreeSpace=async()=>{
    if(process.platform==="win32"){
        const response=await getHardDiskFreeSpaceWin32() 
        return response
    }
    // const diskDriveFreeSpace='wmic logicaldisk get FreeSpace /format:value'
    // try{
    //     const {stdout, stderr}=await execPromise(diskDriveFreeSpace)
    //     if(stderr){
    //         console.error(`Error getting hard disk free space: ${stderr}`);
    //         return null
    //     }
    //     const freeSpace=stdout.trim()
    //     return freeSpace
    // }catch(error){
    //     console.error(`Error getting hard disk free space: ${error.message}`);
    //     return null
    // }
} 
exports.getHardDiskVolumeName=async()=>{
    const diskDriveVolumeName=`wmic logicaldisk get VolumeName`
    try{
        const {stdout, stderr}=await execPromise(diskDriveVolumeName)
        if(stderr){
            console.error(`Error getting hard disk volume name: ${stderr}`);
            return null
        }
        const freeSpace=stdout.trim()
        return freeSpace
    }catch(error){
        console.error(`Error getting hard disk volume name: ${error.message}`);
        return null
    }
}
exports.getHardDiskSerialNumber=async()=>{
    const diskDriveSerialName=`wmic diskdrive get serialnumber`
    try{
        const {stdout, stderr}=await execPromise(diskDriveSerialName)
        if(stderr){
            console.error(`Error getting hard disk serial number: ${stderr}`);
            return null
        }
        const serialnumber=stdout.trim()
        return serialnumber
    }catch(error){
        console.error(`Error getting hard disk serial number: ${error.message}`);
        return null
    }
}
const getHardDiskModelWin32=async()=>{
    const diskDriveModelCommand = 'wmic diskdrive get model';
    try {
        const { stdout, stderr } = await execPromise(diskDriveModelCommand);
        if (stderr) {
            console.error(`Error getting hard disk model: ${stderr}`);
            return null;
        }
        const model = stdout.trim();
        return model;
    } catch (error) {
        console.error(`Error getting hard disk model: ${error.message}`);
        return null;
    }
}
const getHardDiskSizeWin32=async()=>{
    const diskDriveSizeCommand = 'wmic diskdrive get size';
    try {
        const { stdout, stderr } = await execPromise(diskDriveSizeCommand);
        if (stderr) {
            console.error(`Error getting hard disk size: ${stderr}`);
            return null;
        }
        const size = stdout.trim();
        return size;
    } catch (error) {
        console.error(`Error getting hard disk size: ${error.message}`);
        return null;
    }
}
const getHardDiskFreeSpaceWin32=async()=>{
    const diskDriveFreeSpace='wmic logicaldisk get FreeSpace /format:value'
    try{
        const {stdout, stderr}=await execPromise(diskDriveFreeSpace)
        if(stderr){
            console.error(`Error getting hard disk free space: ${stderr}`);
            return null
        }
        const freeSpace=stdout.trim()
        return freeSpace
    }catch(error){
        console.error(`Error getting hard disk free space: ${error.message}`);
        return null
    }
}
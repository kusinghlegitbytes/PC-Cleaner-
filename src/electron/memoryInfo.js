const os=require("os")
exports.getMemoryInfo=()=>{
    const memoryInfo={
        totalMemory:os.totalmem(),
        freeMemory:os.freemem(),
        usedMemory:(os.totalmem-os.freemem)
    }
    return memoryInfo
}
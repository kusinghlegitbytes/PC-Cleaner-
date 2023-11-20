const os=require("os")
exports.getProcessorInformation=()=>{
    const noOfCores=os.cpus()
    const processorInfo={
        noOfCores
    }
    return processorInfo
}

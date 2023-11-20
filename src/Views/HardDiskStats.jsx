const HardDiskStats = ({stats}) => {    
    console.log(stats)
  return (
    <div>
      <h1 className='primary_heading'>Hard Disk Stats</h1>
      <div className="grid grid-2"><span>Model: </span><span>{stats.model.split("\n")[1]}</span></div>
      <div className="grid grid-2"><span>Freespace: </span><span>{stats.freeSpace.split("=")[1]}</span></div>
      <div className="grid grid-2"><span>Size: </span><span>{stats.size.split("\n")[1]}</span></div>
      <div className="grid grid-2"><span>Volume Name: </span><span>{stats.volumeName.split("\n")[1]}</span></div>
      <div className="grid grid-2"><span>Serial Number: </span><span>{stats.serialNumber.split("\n")[1]}</span></div>
    </div>
  )
}
export default HardDiskStats

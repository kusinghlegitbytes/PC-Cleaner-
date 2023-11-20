const MemoryStats = ({stats}) => {
  console.log(stats)
  return (
    <div>
      <h1 className='primary_heading'>RAM Stats</h1>
      <div className="grid grid-2"><span>Total Memory </span><span>{stats.totalMemory}</span></div>
      <div className="grid grid-2"><span>Used Memory </span><span>{stats.usedMemory}</span></div>
      <div className="grid grid-2"><span>Used Memory </span><span>{stats.freeMemory}</span></div>
    </div>
  )
}
export default MemoryStats

import React from 'react'
const ProcessorStats = ({stats}) => {
    console.log(stats)
  return (
    <div>
      <h1 className='primary_heading'>Processor Stats</h1>
      <div><span>No Of Cors: </span>{stats.noOfCores.length}</div>
      <div><span>Core Stats: </span></div>
      <div className="grid grid-3 table_header"><span>Model</span><span>Speed</span><span>Times</span></div>
      <div className='stats_container'>
          {stats.noOfCores.map(core=>{
            return <div>
              <div className="grid grid-3 gap-2">
                <span>{core.model}</span>
                <span>{core.speed}</span>
                <div>
                  <div className='grid grid-2'><span>Idle</span><span>{core.times.idle}</span></div>
                  <div className='grid grid-2'><span>IRQ</span><span>{core.times.irq}</span></div>
                  <div className='grid grid-2'><span>NICE</span><span>{core.times.nice}</span></div>
                  <div className='grid grid-2'><span>SYS</span><span>{core.times.sys}</span></div>
                  <div className='grid grid-2'><span>USER</span><span>{core.times.user}</span></div>
                </div>
              </div>
            </div>
          })}  
        </div>
    </div>
  )
}
export default ProcessorStats

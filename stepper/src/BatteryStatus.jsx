import React, { useEffect } from 'react'
import {useBattery} from 'react-use'

const BatteryStatus = () => {

    const battery = useBattery();

   const { isSupported, level, chargingTime} = battery;

   if(!isSupported) {
   return (
       <div>
       <h1>Battery Sensor Not Supported</h1> 
       </div>
    )
}

console.log(level)


  return (
    <div>batteryStatus  {(level * 100).toFixed()} %</div>
  )
}

export default BatteryStatus
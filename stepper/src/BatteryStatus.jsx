import React, { useEffect } from 'react'
import {useBattery} from 'react-use'

const BatteryStatus = () => {

    const battery = useBattery();

   const { isSupported, level, chargingTime} = battery;

   if(!isSupported) {
   return (
       <div>
       <h5>Battery Sensor is Not Supported</h5> 
       </div>
    )
}




  return (
    <h2>Battery level is {(level * 100).toFixed()} %</h2>
  )
}

export default BatteryStatus
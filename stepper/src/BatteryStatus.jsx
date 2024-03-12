import React, { useEffect } from 'react'
import {useBattery} from 'react-use'

const BatteryStatus = () => {

    const battery = useBattery();

   const { isSupported, level, charging, dischargingTime, chargingTime} = battery;

   if(!isSupported) {
   return (
       <div>
        Battery sensor not supported
       </div>
    )
}

console.log(level)


  return (
    <div>batteryStatus  {(level * 100).toFixed()} %</div>
  )
}

export default BatteryStatus
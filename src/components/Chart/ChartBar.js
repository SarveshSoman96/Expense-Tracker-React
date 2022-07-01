import React from 'react'
import "./ChartBar.css"

function ChartBar(props) {

    let barFillHeight = "0%";

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) *100) + "0%";
    }

  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner' style={{width: barFillHeight / 2}}>
            <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
        </div>
        <div className='chart-bar__lable'>{props.lable}</div>
    </div>
  )
}

export default ChartBar
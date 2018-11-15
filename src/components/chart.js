import React from 'react'
import _ from "lodash";
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';



function avrage(data) {
    return _.round(_.sum(data)/data.length);
}


export default (props) => {
   
  return (
    <div>
       
      
        <Sparklines height={110} width={150} data={props.data}>
            <SparklinesLine  color={props.color} style={{ fill: "none" }} /><SparklinesSpots />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{avrage(props.data)} avrage by ({props.units})</div>
        
        
    </div>
   
  )
}

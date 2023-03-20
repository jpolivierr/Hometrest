import { useEffect, useRef, useState } from 'react'
import Chart from "chart.js/auto"

const Graphs = (props) =>{

    const {name, type} = props

    const chartElement = useRef(null)

    const [chartType, setCharType] = useState(!type ? 'bar' : type)

    console.log(Chart.defaults.plugins.tooltip.enabled) 

    Chart.defaults.plugins.tooltip.enabled = false
    Chart.defaults.plugins.legend.position = "right"

    const chartConfig = {
                    type: chartType,
                    data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1,
                        backgroundColor: "rgb(255, 9, 101)",
                        borderColor:"white"
                    },
                    {
                        label: 'collor',
                        data: [2, 16, 25, 15, 2, 3],
                        borderWidth: 1,
                        backgroundColor: "blue",
                        borderColor:"white"
                    }
                ]
                    },
                    
                    options: {
                        animation: false,
                        plugins : {
                            legend: {
                                display: true,
                                fontSize: 2
                            }
                        },
                        tooltip: {
                            enabled: false
                        },
                        scales: {
                            y: {
                                 beginAtZero: true
                            }
                        },
                        legend: {
                             labels: {
                                fontColor: "green",
                                size: 25
                             }
                        }
                    }
                }


    useEffect(()=>{

            if(!document.querySelector(`#av-graph-id-${name}`)){

                 const canvas = document.createElement("canvas")
                 canvas.id = `av-graph-id-${name}`
                 chartElement.current.appendChild(canvas)
                  new Chart(canvas, chartConfig);

            }else{
                
            }

            

    }
    ,[])

     


    return(
        <>
        <div style={{width: "400px"}} ref={chartElement}>
       </div>
       {/* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> */}
        </>
         
         
    )
}

export default Graphs
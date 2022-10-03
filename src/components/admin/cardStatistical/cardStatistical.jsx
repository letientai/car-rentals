import React from 'react'
import "./cardStatistical.scss"
export const CardStatistical = (prop) => {
  const item = prop.item
  return (
    <a href="#" style={{textDecoration: "none", color: "inherit"}} className='card  dashboard-card mb-0'>
        <div style={{minHeight: "200px" , borderRadius: "5px"}}>
            <div className="card-body">
              <div className="row">
                <div className="Col">
                  <h4>{item.text}</h4>
                  <span>{item.count}</span>
                </div>
                <div className="col-auto">
                  <div className="icon-shape">
                    {/* <img src={icBf} alt="" /> */}
                  </div>
                </div>
              </div>
              <div className="row1" style={{marginBottom:"20px"}}></div>
            </div>
        </div>
    </a>
  )
}

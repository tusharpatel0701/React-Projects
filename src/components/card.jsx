import React from 'react'

const card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
          <img src={props.image} alt="" />
          <button>Save</button>
        </div>
        <div className="center">
            <h3>{props.company} <span>{props.datePosted}</span></h3>
            <h2>{props.level}</h2>
            <div className='tag'>
              <h4>{props.postTag}</h4>
              <h4>Senior Level</h4>
            </div>
        </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default card
import React from 'react';
import Demo from '../components/Demo';

export const TextSummarizer = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className="row">
              <div className="col-12" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Demo/>
              </div>
            </div>
        </div>
    </div>
  )
}

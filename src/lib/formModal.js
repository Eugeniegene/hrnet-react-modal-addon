import React from 'react'

import './App.css'

const FormModal = ( props ) => {
    const { closeModal } = props
    
    return (
      <div className='modalBackground'>
        <div className="container">
          <div className="icon-text">
              <div className="icon-container" onClick={closeModal} aria-label="cross-icon">
                  <i className="fa fa-lg fa-times" aria-hidden="true"></i>
              </div>
              <p>Employee successfully created !</p>
          </div>
        </div>
      </div>
    )
  }
  export default FormModal
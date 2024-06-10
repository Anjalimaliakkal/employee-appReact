import React from 'react'
import NavBar from './NavBar'

const DeleteEmployee = () => {
  return (
    <div>
        <NavBar />
            <h1><center>EMPLOYEE DELETION</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="control-label">EMPLOYEE NAME</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeleteEmployee
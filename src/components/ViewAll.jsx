import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            {
                "id": 101,
                "name": "Anjali",
                "department": "Computer Applications",
                "designation": "Software developer"
                },
                {
                    "id": 105,
                    "name": "Arun",
                    "department": "Computer Appliactions",
                    "designation": "Team leader"
                    },
                    {
                        "id": 132,
                        "name": "Abhay",
                        "department": "Aeronotics",
                        "designation": "Aeronotical engineer"
                        }
        ]
    )

    return (
        <div>
            <NavBar />
            <h1><center>VIEWALL EMPLOYEES</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DEPARTMENT</th>
                                    <th scope="col">DESIGNATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.id}</th>
                                                <td>{value.name}</td>
                                                <td>{value.department}</td>
                                                <td>{value.designation}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
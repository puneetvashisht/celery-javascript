import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";

const UpdateEmployee = () => {
    const [salary, setSalary] = useState()
    const [name, setName] = useState('')

    let params = useParams();
    let navigate = useNavigate();
    console.log(params.empId); // this will give you the employee id if it is provided in the url

    useEffect(() => {
        if (params.empId) {
            fetch(`http://localhost:3000/api/v1/employees/` + params.empId)
               .then(res => res.json())
               .then(data => {
                    setName(data.name);
                    setSalary(data.salary);
                })
        }
      
    }, [])
    

    // if the employee id is provided, fetch the employee details and populate the form
    
    const updateEmployee = () => {
        console.log(salary);
        const employee = { salary };
        
        fetch("http://localhost:3000/api/v1/employees/" + params.empId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
           .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    console.log("Employee updated successfully");
                    // setEmployee([...products, product]);
                    navigate("/employees")
                } else {
                    console.log("Failed to update employee");
                }
            })
    }

    return (
        <>
        <p>{}</p>
        <div className="input-group mb-3">
        <span className="input-group-text" >Employee Name</span>
        <input disabled id="basic-addon1" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Employee Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" >Employee Salary</span>
            <input id="basic-addon2" type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} className="form-control" placeholder="Enter Employee Salary" aria-label="Username" aria-describedby="basic-addon2" />
        </div>
        <button className="btn btn-secondary" onClick={updateEmployee}>Update Employee</button>
    </>
    )
}

export default UpdateEmployee;
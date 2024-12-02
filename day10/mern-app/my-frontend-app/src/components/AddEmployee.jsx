import { useState } from "react";
import { useParams } from "react-router";

const AddEmployee = () => {
    const [salary, setSalary] = useState()
    const [name, setName] = useState('')

   
    const addEmployee = () => {
        console.log(name, salary);
        const employee = { name, salary };
        
        fetch("http://localhost:3000/api/v1/employees/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
           .then(res => {
                console.log(res.status);
                if (res.status === 201) {
                    console.log("Employee added successfully");
                    // setEmployee([...products, product]);
                } else {
                    console.log("Failed to add employee");
                }
            })
    }

    return (
        <>
        <p>{}</p>
        <div className="input-group mb-3">
        <span className="input-group-text" >Employee Name</span>
        <input id="basic-addon1" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Employee Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" >Employee Price</span>
            <input id="basic-addon2" type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} className="form-control" placeholder="Enter Employee Salary" aria-label="Username" aria-describedby="basic-addon2" />
        </div>
        <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
    </>
    )
}

export default AddEmployee;
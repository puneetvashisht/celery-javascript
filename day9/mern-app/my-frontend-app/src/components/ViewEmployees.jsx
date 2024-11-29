import { useEffect, useState } from "react";

const ViewEmployees = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/employees/')
            .then(res => res.json())
            .then(data => {
                setEmployees(data);
            })
    }, [])

    let listEmployees = employees.map((employee, i) => {
        return (
            <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                <td>@mdo</td>
            </tr>
        )
    })

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {listEmployees}
                </tbody>
            </table>
        </div>
    )

}
export default ViewEmployees;
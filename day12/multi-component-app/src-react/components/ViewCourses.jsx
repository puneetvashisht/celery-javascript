import { useEffect, useState } from "react";

const ViewCourses = () => {


    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/courses')
           .then(response => response.json())
           .then(data => setCourses(data))
    }, [])

    const deleteCourse = (id) => {
        fetch(`http://localhost:3000/courses/${id}`, {
            method: 'DELETE',
        })
       .then(() => {
         const updatedCourses = courses.filter(course => course.id!== id)
         setCourses(updatedCourses)
       })
       .catch(error => console.error('Error:', error))
    }


    let coursesList = courses.map((course, i)=> {
        return (
            <tr key={i}>
                <th scope="row">{i+1}</th>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.votes}</td>
                <td><button className="btn btn-primary">Edit</button> <button onClick={()=>deleteCourse(course.id)} className="btn btn-danger"> X </button></td>
            </tr>
        )
    })
    

    return (
        <>
        <h2>View Courses</h2>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Votes</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {coursesList}
        </tbody>
        </table>
        </>
    )
}
export default ViewCourses;
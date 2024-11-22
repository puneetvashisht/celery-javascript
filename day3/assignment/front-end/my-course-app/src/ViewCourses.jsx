import { useEffect } from "react";
import { useState } from "react";

// function ViewCourses(){
const ViewCourses = () =>{

    const [courses, setCourses] = useState([])
    useEffect(() => {
            fetch('http://localhost:3000/courses')
            .then(response => response.json())
            .then(data => setCourses(data)) 
    }, [])
    
    let coursesList = courses.map((c,i) => <li key={i}>{c.title}</li>)
    console.log(coursesList)
    return (
        <>
            <h2>Display Courses Change</h2>
            <ul>
                {coursesList}
            </ul>
        </>
    )
}
export default ViewCourses;
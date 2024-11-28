import { useState } from "react";
import { useEffect } from "react";

const ViewCourses = () => {

    const [courses, setCourses] = useState([])


    useEffect(() => {
        console.log("Initization here..");
        fetch('http://localhost:3000/courses')
            .then(response => response.json())
            .then(data => {
                setCourses(data);

            })

    }, [])

    let coursesList = courses.map(c=> <li key={c.id}>{c.title}</li>)

    return (
        <ul>
            {coursesList}
        </ul>
    )
}

export default ViewCourses

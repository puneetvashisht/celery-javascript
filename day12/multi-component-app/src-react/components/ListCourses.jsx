import { useEffect, useState } from "react";

const ListCourses = () => {


    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/courses')
           .then(response => response.json())
           .then(data => setCourses(data))
    }, [])

   
    let listSortedCourses = courses.sort((course1, course2)=>course2.votes - course1.votes);
    console.log(listSortedCourses);

    let topThreeCourses = courses.slice(0,3)
    
    let coursesList = topThreeCourses.map((course, i)=> {
        return (
            <li class="list-group-item">{course.title} - {course.votes}</li>
        )
    })
    

    return (
        <>
        <h2>List Courses</h2>
            <ul class="list-group">
                {coursesList}
            </ul>
        </>
    )
}
export default ListCourses;
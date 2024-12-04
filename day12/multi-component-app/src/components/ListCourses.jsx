import { useEffect, useState } from "react";
import { connect } from "react-redux";

const ListCourses = (props) => {


    // const [courses, setCourses] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:3000/courses')
    //        .then(response => response.json())
    //        .then(data => setCourses(data))
    // }, [])

   
    let listSortedCourses = props.courses.sort((course1, course2)=>course2.votes - course1.votes);
    console.log(listSortedCourses);

    let topThreeCourses = listSortedCourses.slice(0,3)
    
    let coursesList = topThreeCourses.map((course, i)=> {
        return (
            <li key={i} className="list-group-item">{course.title} - {course.votes}</li>
        )
    })
    

    return (
        <>
        <h2>List Courses</h2>
            <ul className="list-group">
                {coursesList}
            </ul>
        </>
    )
}


const mapStateToProps = state => ({
    courses: state.courses
})
// export default ListCourses;
// connect
export default connect(mapStateToProps)(ListCourses);
import { useState } from "react";
import { connect } from "react-redux";

const AddCourse = (props) => {
    const [description, setDescription] = useState('')
    const [votes, setVotes] = useState()
    const [title, setTitle] = useState('')
    const addCourse = () => {

        const course = { title, description, votes };
        console.log(course);
        props.addCourse(course)
        setTitle('')
        setDescription('')
        setVotes(0)  // resetting vote count to 0 after adding a course
        
    }

    return (
        <>
        <div className="input-group mb-3">
        <span className="input-group-text" >Course Name</span>
        <input id="basic-addon1" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="Enter Product Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" >Course Description</span>
            <input id="basic-addon2" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter Product Price" aria-label="Username" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" >Course Votes</span>
            <input id="basic-addon2" type="number" value={votes} onChange={(e)=>setVotes(e.target.value)} className="form-control" placeholder="Enter Product Price" aria-label="Username" aria-describedby="basic-addon2" />
        </div>
        <button className="btn btn-primary" onClick={addCourse}>Add Course</button>
    </>
    )
}

const mapDispatchToProps = dispatch => ({
    addCourse: (course) => dispatch({ type: "ADD_COURSE", payload: course })  // dispatching action to add course to the store
})

// export default AddCourse;
export default connect(null, mapDispatchToProps)(AddCourse)
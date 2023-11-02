import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import {useState} from "react";

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses (2/4)</h2>

            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <button onClick={addNewCourse} >
                Add
            </button>
            <button onClick={updateCourse} >
                Update
            </button>

            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <>
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card wd-links width: 25rem">
                            <img src="../images/blue.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="text-secondary">{course.number}</h5>
                                <h5 className="card-muted">
                                    {course.name}
                                </h5>
                                <h8 className="card-muted">
                                    2023-2024 Fall 2023
                                </h8>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
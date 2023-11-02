import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useLocation, useParams}
    from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from 'react-icons/fa';

function Courses({ courses }) {
    const { courseId } = useParams();
    const location = useLocation();

    // Extract the pathname from the location object
    const currentPath = location.pathname.split('/').slice(-1)[0];

    const course = courses.find((course) => course._id === courseId);

    return (
        <div>
            <div className="col-sm-6">
                <div className="p-2 row">
                    <div className="d-flex flex-row flex-wrap">
                        <FaBars className="sidebar-button text-danger" />
                        <nav aria-label="breadcrumb align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#" className="text-danger">{course.name}</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {currentPath}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;

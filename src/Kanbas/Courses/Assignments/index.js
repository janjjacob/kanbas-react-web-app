import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaEllipsisV, FaPlus, FaGripVertical, FaCaretDown } from 'react-icons/fa';
import db from "../../Database";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div>
                <input placeholder="Search for Assignments" />
                <button className="btn float-end">
                    <FaEllipsisV />
                </button>
                <button className="btn float-end bg-danger"><FaPlus />Assignment</button>
                <button className="btn float-end"><FaPlus />Group</button>
            </div>
            <hr />
            <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center" style={{ height: '50px' }}>
                <h4 style={{ paddingLeft: '10px' }}>
                    <FaGripVertical size={20} />
                    <FaCaretDown />
                    Assignments
                </h4>
                <a style={{ paddingRight: '10px' }}>
                    <span className="rounded-pill text-bg-secondary float-end">
                        40% of Total
                    </span>
                    <FaPlus className="float-end" style={{ color: 'gray', paddingRight: '10px' }} />
                    <FaEllipsisV className="float-end" style={{ color: 'gray', paddingRight: '10px' }} />
                </a>
            </li>
            <div className="list-group">
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ height: '150px', backgroundColor: 'white', borderLeft: '10px green solid',}}>
                        <div style={{ textAlign: 'left' }}>
                            <div className="wd-links text-secondary">
                                <h4 className="text-secondary">{assignment.title}</h4>
                            </div>
                            <div>
                                {assignment.title} - {assignment.description}<br /> Week starting on September
                                15th （9/15/2023)<br />
                                Due Sep 27, 2023 at 11:59pm | 100 pts
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;

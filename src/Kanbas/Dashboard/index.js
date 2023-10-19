import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses (2/4)</h2>
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;
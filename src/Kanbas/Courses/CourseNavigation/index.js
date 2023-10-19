import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = [
        "Home",
        "Piazza",
        "Zoom Meetings",
        "Modules",
        "Quizzes",
        "Assignments",
        "Grades",
        "People",
        "Microsoft Teams Meetings",
        "FACT Reporting and Photo Roster",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
    ];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="list-group wd-profile-sidebar" style={{ marginLeft: "15px" }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`text-danger ${pathname.includes(link) && "active text-black"}`}
                    style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
                >
                    <span style={{ marginRight: "10px" }}>{link}</span>
                    {index !== 0 && <i className="fa fa-eye-slash text-secondary"></i>}
                </Link>
            ))}
        </div>
    );
}

export default CourseNavigation;

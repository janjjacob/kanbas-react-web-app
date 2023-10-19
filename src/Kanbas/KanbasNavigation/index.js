import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaQuestionCircle } from 'react-icons/fa';

import './index.css';
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [FaUser, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaQuestionCircle];
    const { pathname } = useLocation();
    return (
        <div className="list-group text-white wd-kanbas-navigator wd-pos-fixed-navigator wd-sidebar-font text-center" style={{ width: 150, backgroundColor: 'black' }}>
            {links.map((link, index) => {
                const Icon = icons[index % icons.length];
                return (
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`list-group-item text-danger ${pathname.includes(link) ? "active" : ""}`}
                    >
                        <div>
                            <Icon />
                        </div>
                        <div>{link}</div>
                    </Link>
                );
            })}
        </div>
    );
}
export default KanbasNavigation;
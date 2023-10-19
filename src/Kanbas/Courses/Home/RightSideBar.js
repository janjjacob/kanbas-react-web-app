import React from "react";
import { FaBan, FaCheckCircle, FaFileImport, FaCircle, FaChartBar, FaBullhorn, FaBell, FaCalendar } from 'react-icons/fa';
import './index.css'

function RightSideBar() {
    return (
        <div style={{ right: 0, width: 350, padding: 20 }}>
            <div>Course Status</div>
            <ul>
                <div>
                    <button className="btn">
                        <FaBan /> Unpublish
                    </button>
                    <button className="btn bg-success">
                        <FaCheckCircle /> Publish
                    </button>
                </div>
                <div style={{ paddingTop: "20px" }}>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaFileImport /> Import Existing Content
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaFileImport /> Import from Commons
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaCircle /> Choose Home Page
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaChartBar /> View Course Stream
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaBullhorn /> New Announcements
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaChartBar /> New Analytics
                    </button>
                    <button className="btn" style={{ width: "100%", textAlign: "left" }}>
                        <FaBell /> View Course Notifications
                    </button>
                </div>
                <h3 style={{ textAlign: "left" }}>To Do</h3>
                <hr />
                <div style={{ display: "flex", textAlign: "left" }}>
                    <FaBan className="fa-1 text-danger" style={{ marginRight: "10px" }} />
                    <div>
                        <span className="text-danger">Grade A1 - ENV + HTML</span>
                        <br />
                        100 points
                    </div>
                </div>

                <div style={{ display: "flex", textAlign: "left" }}>
                    <h3 style={{ textAlign: "left" }}>Coming Up</h3>
                    <a className="wd-links flex-end">
                        <FaCalendar style={{ color: "black" }} />
                        <span className="text-danger">View Calendar</span>
                    </a>
                </div>
                <hr />

                <div style={{ display: "flex", textAlign: "left", paddingBottom: "10px" }}>
                    <FaCalendar style={{ color: "black" }} />
                    <div>
                        <span className="text-danger">Lecture</span>
                        <br />
                        CS4550.12631.202410
                    </div>
                </div>

                <div style={{ display: "flex", textAlign: "left", paddingBottom: "10px" }}>
                    <FaCalendar style={{ color: "black" }} />
                    <div>
                        <span className="text-danger">Web Dev Lecture</span>
                        <br />
                        CS4550.12631.202410
                    </div>
                </div>

                <div style={{ display: "flex", textAlign: "left", paddingBottom: "10px" }}>
                    <FaCalendar style={{ color: "black" }} />
                    <div>
                        <span className="text-danger">Web Dev Lecture</span>
                        <br />
                        CS4550.12631.202410
                    </div>
                </div>

                <span className="text-danger" style={{ textAlign: "left" }}>
          12 more in the next week...
        </span>
            </ul>
        </div>
    );
}

export default RightSideBar;

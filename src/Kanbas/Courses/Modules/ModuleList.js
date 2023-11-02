import React, {useState} from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";


import db from "../../Database";
import { FaPlus, FaEllipsisV, FaCheckCircle, FaCaretDown } from 'react-icons/fa';
import "./index.css";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="module-list-container">
            <div className="d-flex justify-content-end my-3">
                <button className="btn bg-danger me-2">
                    <FaPlus />Module
                </button>
                <button className="btn me-2">
                    <FaEllipsisV />
                </button>
                <button className="btn me-2">
                    <FaCheckCircle style={{ color: "green", fontSize: "20px" }} />
                    Publish All
                    <FaCaretDown />
                </button>
                <button className="btn me-2">View Progress</button>
                <button className="btn me-2">Collapse All</button>
            </div>
            <li className="list-group-item">
                <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>
                <button onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>
                <input value={module.name}
                       onChange={(e) =>
                           dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea value={module.description}
                          onChange={(e) =>
                              dispatch(setModule({ ...module, description: e.target.value }))}
                />
            </li>
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center bg-secondary" style={{ height: "75px", marginBottom: "20px" }}>
                        <button
                            onClick={() => dispatch(deleteModule(module._id))}>
                        Delete
                        </button>
                        <button
                            onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
                        <FaEllipsisV className="me-2" style={{ color: "gray", fontSize: "20px" }} />
                        <div className="d-flex">
                            <span className="fa-solid fa-grip-vertical" style={{ paddingLeft: "30px" }}></span>
                            <h2 style={{ paddingLeft: "30px" }}>
                                {module.name}
                            </h2>
                        </div>
                        <div className="d-flex">
                            <FaPlus className="me-2" style={{ color: "gray", fontSize: "20px" }} />
                            <FaCheckCircle className="me-2" style={{ color: "green", fontSize: "20px" }} />
                            <FaEllipsisV className="me-2" style={{ color: "gray", fontSize: "20px" }} />
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ModuleList;

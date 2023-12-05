import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import {useEffect, useState} from "react";

import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = `${process.env.REACT_APP_API_BASE}/courses`;
    const findAllCourses = async () => {
        console.log(URL)
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = async () => {
        console.log('Adding Course')
        console.log(course);
        const response = await axios.post(URL, course);
        console.log(response);
        setCourses([response.data,
            ...courses
        ]);
        setCourse({ name: "" });
    };

    const deleteCourse = async (course_id) => {
        const response = await axios.delete(
            `${URL}/${course_id}`
        );
        setCourses(courses.filter((c) => c._id !== course_id));
    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id.$oid}`,
            course
        );

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div className="d-flex">
            <Provider store={store}>
                <KanbasNavigation />
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
                    </Routes>
                </div>
            </Provider>
        </div>
    );
}
export default Kanbas;
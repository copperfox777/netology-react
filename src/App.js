import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "./redux/actions";
import Loader from './components/loader'
import ErrorText from './components/errorText'
import CoursesList from './components/coursesList'
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.courses);
  useEffect(() => dispatch(fetchCourses()), [dispatch]);
  
  return <div className="container">
     {loading && <Loader/> }
     {error && <ErrorText text={error} />}
     {data && <CoursesList data={data}/>}
  </div>;
}

export default App;

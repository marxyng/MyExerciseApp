import React from 'react'
import { Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercises from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";



function App() {
  return (
   <>
   {/* <div className="container"> */}
    <Navbar />
    <br/>
    <Routes>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercises} />
    <Route path="/user" component={CreateUsers} />
  
    </Routes>


<CreateExercises/>




    {/* </div> */}
    </>
  );
}

export default App;

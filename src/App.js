import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/SingUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/Layout/Layout";
import Overview from "./Pages/Overview/Overview";
import Task from "./Pages/Task/Task";
import NewProject from "./Pages/CreateProject/NewProject";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import NewTask from "./Pages/NewTask/NewTask";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/create" element={<NewProject />} />
            <Route path="/detail" element={<ProjectDetail />} />
            <Route path="/task" element={<Task />} />
            <Route path="/newTask" element={<NewTask />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

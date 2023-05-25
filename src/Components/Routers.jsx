import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Task from "../pages/Task";
import NotFoundPage from "../pages/NotFoundPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<Task />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routers;

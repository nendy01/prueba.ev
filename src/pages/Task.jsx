import { Button, Heading } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { dataContext } from "../context/dataContext";
import AlertMessage from "../Components/AlertMessage";

const Task = () => {
  const { id } = useParams();
  const { tasks, handleUpdateTasks, changeToCompleted } =
    useContext(dataContext);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  let task = tasks.find((t) => t.id === id);
  const firstTask = tasks.find((t) => t.id === "1");

  let sendtask;
  if (!task) {
    const allpendings = tasks.reduce((acc, task) => {
      task?.pending?.map(
        (subTask) => (acc = [...acc, { ...subTask, FatherTask: task.id }])
      );
      return acc;
    }, []);
    // console.log(allpendings);
    task = allpendings.find((subTask) => subTask.id === id);
    // console.log(task);
    task.isCompleted = true;
    const si = tasks.find((subTask) => subTask.id == task?.FatherTask);
    const result = si.pending?.map((t) => (t.id === task.id ? task : t));
    const completedFather = { ...si, pending: result };
    sendtask = completedFather;
  }

  const handleTask = () => {
    if (!firstTask.isCompleted && id != "1") {
      setMessage("Primero debe realizar la terea #1");
      setTimeout(() => {
        setMessage(null);
        navigate("/tasks/1");
      }, 5000);
      return;
    }

    if (task?.id === "1" || task?.pending?.length === 0) {
      handleUpdateTasks({ ...task, isCompleted: true });
      navigate("/tasks");
    } else {
      handleUpdateTasks(sendtask);
      navigate("/tasks");
    }
  };

  return (
    <>
      <Heading>{task?.title}</Heading>
      <Button onClick={handleTask}>Finalizar {task?.title}</Button>
      {message && <AlertMessage message={message} />}
    </>
  );
};

export default Task;

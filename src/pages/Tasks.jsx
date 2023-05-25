import React, { useContext, useEffect, useState } from "react";
import Task from "../Components/Task";
import { Grid, Heading } from "@chakra-ui/react";
import AlertMessage from "../Components/AlertMessage";
import { dataContext } from "../context/dataContext";

const Tasks = () => {
  // console.log(tasks);

  const { tasks } = useContext(dataContext);
  const [isFirstCompleted, setisFirstCompleted] = useState(false);

  const handleMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };

  useEffect(() => {
    const task = tasks.find((task) => task.id === "1");

    setisFirstCompleted(task.completed);
  }, [tasks]);

  return (
    <>
      <Heading py={6} pl={4}>
        Lista de tareas pendientes
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            handleMessage={handleMessage}
            isFirstCompleted={isFirstCompleted}
          />
        ))}
      </Grid>
    </>
  );
};

export default Tasks;

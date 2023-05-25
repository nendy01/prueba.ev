import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/Storage";

const dataContext = createContext(null);
import { data } from "../data";
const DataProvider = ({ children }) => {
  const isSaved = getLocalStorage("taks");
  const [tasks, setTasks] = useState(isSaved || data);

  useEffect(() => {
    if (!isSaved) setLocalStorage("taks", tasks);
  }, []);

  const handleUpdateTasks = (task) => {
    /*  if (task.FatherTask) {
      //console.log("si soy");

      const result = tasks.map((currentTask) =>
        currentTask.id != task.FatherTask
          ? currentTask
          : (currentTask = currentTask.pending.map((t) =>
              t.id === task.id ? task : t
            ))
      );
      setTasks(result);
      return;
    } */
    const result = tasks.map((t) => (t.id === task.id ? task : t));
    setTasks(result);
    // console.log(result);
  };

  const changeToCompleted = (id, task = null) => {
    if (!task) {
      task = tasks.find((t) => t.id === id);
    }
    if (task) {
      Object.assign(task, { ...task, isCompleted: true });
    } else {
      tasks.forEach(({ pending: subtask }) => {
        changeToCompleted(id, subtask);
      });
    }
  };

  const dataActions = {
    tasks,
    handleUpdateTasks,
    changeToCompleted,
  };

  return (
    <dataContext.Provider value={dataActions}>{children}</dataContext.Provider>
  );
};

export { dataContext, DataProvider };

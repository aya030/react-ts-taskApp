import { useState, useEffect } from 'react';
import { ulid } from 'ulid';

import * as taskData from '../apis/tasks';
import { Task } from '../types/Task';

export const useTask = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    taskData.getAllTaskData().then((task) => {
      setTaskList([...task].reverse());
    });
  }, []);

  // Taskの追加
  const addTaskListItem = (todoContent: string) => {
    //ulid()で一意のIdを取得
    const newTaskItem = { id: ulid(), task: todoContent, done: false };

    taskData.addTaskData(newTaskItem).((addTask:Task) => {
      setTaskList([addTask, ...taskList]);
    });
  };

  // 完了と未完了を反転させる
  const toggleTaskListItem = (id: string, done: boolean) => {
    const taskItem = taskList.find((item: Task) => item.id === id);
    const newTaskItem: Task = { ...taskItem!, done: !done };
    taskData.updateTaskData(id, newTaskItem).then((updateTask) => {
      const newTaskList = taskList.map((item) => (item.id !== updateTask.id ? item : updateTask));
      setTaskList(newTaskList);
    });
  };

  //Taskの削除
  const deleteTaskListItem = (id: string) => {
    taskData.deleteTaskData(id).then((deleteId) => {
      const newTaskList = taskList.filter((item) => item.id !== deleteId);
      setTaskList(newTaskList);
    });
  };

  return { taskList, toggleTaskListItem, addTaskListItem, deleteTaskListItem };
};

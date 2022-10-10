import { useState, useEffect } from 'react';
import { ulid } from 'ulid';

import * as taskData from '../apis/tasks';
import { Task } from '../types/Task';

export const useTask = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const allTaskData = async () => {
      const data = await taskData.getAllTaskData();
      setTaskList([...data].reverse());
    };
    allTaskData();
  }, []);

  // Taskの追加
  async function addTaskListItem(todoContent: string) {
    //ulid()で一意のIdを取得
    const newTaskItem = { id: ulid(), task: todoContent, done: false };

    const data = await taskData.addTaskData(newTaskItem);
    setTaskList([data, ...taskList]);
  }

  // 完了と未完了を反転させる
  async function toggleTaskListItem(id: string, done: boolean) {
    const taskItem = taskList.find((item: Task) => item.id === id);
    const newTaskItem: Task = { ...taskItem!, done: !done };

    const data = await taskData.updateTaskData(id, newTaskItem);
    const newTaskList = taskList.map((item) => (item.id !== data.id ? item : data));
    setTaskList(newTaskList);
  }

  //Taskの削除
  const deleteTaskListItem = (id: string) => {
    const deleteTaskData = async () => {
      const data = await taskData.deleteTaskData(id);
      const newTaskList = taskList.filter((item) => item.id !== data);
      setTaskList(newTaskList);
    };
    deleteTaskData();
  };

  return { taskList, toggleTaskListItem, addTaskListItem, deleteTaskListItem };
};

import axios from "axios";
import { Task } from "../types/Task";

const taskURL = "http://localhost:3100/tasks";

// 全部のTaskを取得
export const getAllTaskData = async () => {
  const response = await axios.get(taskURL);
  return response.data;
};

// Task追加
export const addTaskData = async (todo: Task) => {
  const response = await axios.post(taskURL, todo);
  return response.data;
};

// Task削除
export const deleteTaskData = async (id: string) => {
  await axios.delete(`${taskURL}/${id}`);
  return id;
};

// リストの更新(完了・未完了時)
export const updateTaskData = async (id: string, todo: Task) => {
  const response = await axios.put(`${taskURL}/${id}`, todo);
  return response.data;
};

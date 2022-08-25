import { Task } from '../types/Task';

export const TaskItem = ({
  task,
  toggleTaskListItem,
  deleteTaskListItem,
}: {
  task: Task;
  toggleTaskListItem: (id: string, status: boolean) => void;
  deleteTaskListItem: (id: string) => void;
}) => {
  const onClickToggle = () => toggleTaskListItem(task.id, task.done);
  const onClickDelete = () => deleteTaskListItem(task.id);

  return (
    <>
      <div className="flex">
        <p className="w-2/4">{task.task}</p>
        <button
          onClick={onClickToggle}
          className="bg-teal-500 hover:bg-teal-700 text-white rounded px-4 ml-2 mr-6 py-1">
          {task.done ? '戻す' : '完了'}
        </button>
        <button onClick={onClickDelete} className="text-red-400 hover:text-red-700">
          削除
        </button>
      </div>
    </>
  );
};

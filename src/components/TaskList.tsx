import { TaskItem } from './TaskItem';
import { Task } from '../types/Task';

// taskListが0件の場合、表示させない
export const TaskList = ({
  taskList,
  toggleTaskListItem,
  deleteTaskListItem,
}: {
  taskList: Task[];
  toggleTaskListItem: (id: string, status: boolean) => void;
  deleteTaskListItem: (id: string) => void;
}) => {
  return (
    <>
      {taskList.length !== 0 && (
        <>
          <ul className="mt-4 mb-16">
            {taskList.map((task) => (
              <li key={task.id} className="mb-3">
                <TaskItem
                  task={task}
                  key={task.id}
                  toggleTaskListItem={toggleTaskListItem}
                  deleteTaskListItem={deleteTaskListItem}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

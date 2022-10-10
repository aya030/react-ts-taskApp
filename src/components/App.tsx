import { useRef } from 'react';
import { useTask } from '../hooks/useTask';
import { Task } from '../types/Task';
import { TaskAdd } from './TaskAdd';
import { TaskList } from './TaskList';
import { Title } from './Title';

function App() {
  const { taskList, toggleTaskListItem, addTaskListItem, deleteTaskListItem } = useTask();

  const inputText = useRef<HTMLInputElement>(null);

  const onClickAddTask = () => {
    if (inputText.current?.value === '') {
      return;
    }
    addTaskListItem(inputText.current!.value);
    inputText.current!.value = '';
  };

  // 未完了リスト
  const incompletedList = taskList.filter((todo: Task) => !todo.done);

  // 完了リスト
  const completedList = taskList.filter((todo: Task) => todo.done);

  return (
    <div>
      <div className="bg-teal-400 py-4 mb-16">
        <h1 className="text-white text-center">Task management App</h1>
      </div>
      <div className="w-2/4 mx-auto">
        <TaskAdd buttonText="追加" inputText={inputText} onClickAddTask={onClickAddTask} />
        <Title title="未完了リスト" as="h2" />
        <TaskList
          taskList={incompletedList}
          toggleTaskListItem={toggleTaskListItem}
          deleteTaskListItem={deleteTaskListItem}
        />
        <Title title="完了リスト" as="h2" />
        <TaskList
          taskList={completedList}
          toggleTaskListItem={toggleTaskListItem}
          deleteTaskListItem={deleteTaskListItem}
        />
      </div>
    </div>
  );
}

export default App;

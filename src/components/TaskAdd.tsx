import { RefObject } from 'react';

export const TaskAdd = ({
  buttonText,
  inputText,
  onClickAddTask,
}: {
  buttonText: string;
  inputText: RefObject<HTMLInputElement>;
  onClickAddTask: () => void;
}) => {
  return (
    <>
      <div className="flex mb-10">
        <input
          type="text"
          ref={inputText}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-3/5"></input>
        <button
          onClick={onClickAddTask}
          className="bg-teal-500 hover:bg-teal-700 text-white rounded px-4 ml-2">
          {buttonText}
        </button>
      </div>
    </>
  );
};

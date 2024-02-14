import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksProvider } from "./TasksContext";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Día libre en Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

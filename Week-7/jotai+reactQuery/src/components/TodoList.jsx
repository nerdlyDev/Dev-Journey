import { useAtom } from "jotai";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTodos, deleteTodo } from "../api";
import { filterAtom, isModalOpenAtom } from "../atoms";

const TodoList = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const [, setIsModalOpen] = useAtom(isModalOpenAtom);
  const queryClient = useQueryClient();

  // Fetch todos
  const { data: todos = [], isLoading } = useQuery({
    queryKey: ["todos"], // Unique identifier for the query
    queryFn: fetchTodos, // Function to fetch data
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteTodo, // Function to perform the mutation
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // Refetch after mutation
    },
    onError: (error) => {
      console.error("Error deleting todo:", error);
    },
  });

  if (isLoading) return <p>Loading...</p>;

  // Filter todos
  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "completed"
        ? todo.completed
        : !todo.completed,
  );

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add Todo</button>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteMutation.mutate(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

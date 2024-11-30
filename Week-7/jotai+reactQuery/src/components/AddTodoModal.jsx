import { useState } from "react";
import { useAtom } from "jotai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../api";
import { isModalOpenAtom } from "../atoms";

const AddTodoModal = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  // Add mutation
  const addMutation = useMutation({
    mutationFn: addTodo, // Function to perform the mutation
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // Refetch after mutation
      setIsModalOpen(false);
      setTitle("");
    },
    onError: (error) => {
      console.error("Error adding todo:", error);
    },
  });

  if (!isModalOpen) return null;

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          if (title.trim() === "") {
            console.error("Title cannot be empty");
            return;
          }
          addMutation.mutate({ title, completed: false });
        }}
      >
        Add
      </button>
      <button onClick={() => setIsModalOpen(false)}>Close</button>
    </div>
  );
};

export default AddTodoModal;

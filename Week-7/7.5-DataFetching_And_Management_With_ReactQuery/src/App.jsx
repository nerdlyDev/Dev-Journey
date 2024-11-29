// Import necessary hooks from react-query for data fetching and state management
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

// Initial posts data array
const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
];

function App() {
  // Initialize the query client for managing cache
  const queryClient = useQueryClient();

  // Query hook to fetch posts data
  // Will show loading state for 3 seconds before returning posts
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      await wait(3000);
      return POSTS;
    },
  });

  // Callback when mutation succeeds - invalidates posts query to refetch
  onSuccess: () => {
    queryClient.invalidateQueries(["posts"]);
  };

  // Mutation hook to add a new post
  // Waits 1 second then adds post with random ID
  const newPostMutation = useMutation({
    mutationFn: async () => {
      await wait(1000);
      POSTS.push({
        id: crypto.getRandomValues(new Uint32Array(1))[0],
        title: `Post ${POSTS.length + 1}`,
      });
    },
  });

  return (
    <>
      <h1>Posts</h1>
      {/* Show loading state while query is in progress */}
      {postQuery.isLoading && <p>Loading...</p>}
      {/* Show error if query fails */}
      {postQuery.isError && <p>Error: {postQuery.error.message}</p>}
      {/* Show posts list when query succeeds */}
      {postQuery.isSuccess && (
        <ul>
          {postQuery.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      <button onClick={() => newPostMutation.mutate()}>Add Post</button>
    </>
  );
}

// Utility function to create artificial delay
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export default App;

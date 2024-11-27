import { useAtom } from "jotai";
import {
  networkAtom,
  jobsAtom,
  messagingAtom,
  notificationsAtom,
  totalCountAtom,
} from "./atoms";

function App() {
  const [network] = useAtom(networkAtom);
  const [jobs] = useAtom(jobsAtom);
  const [messages] = useAtom(messagingAtom);
  const [notifications] = useAtom(notificationsAtom);
  const [totalCount] = useAtom(totalCountAtom);
  return (
    <>
      <button>Home</button>
      <button>My network {network >= 100 ? "99+" : network}</button>
      <button>Jobs {jobs}</button>
      <button>Messaging {messages}</button>
      <button>Notifications {notifications}</button>
      <button>Me {totalCount}</button> {/* the derives atom */}
    </>
  );
}

export default App;

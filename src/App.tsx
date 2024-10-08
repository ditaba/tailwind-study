import { UserProfile } from "./One/UserProfile";
import { Collection } from "./Three/Collection";
import { JobList } from "./Two/JobList";
import { ReviewForm } from "./Four/ReviewForm";
import { UsersList } from "./Five/UsersList";
import { Notification } from "./Six/Notification";
import { Subscriptions } from "./Seven/Subscriptions";
import { JobPositions } from "./Eight/JobPositions";
import { AccountList } from "./Nine/AccountList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <UserProfile />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <JobList />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <Collection />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <ReviewForm />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <UsersList />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <Notification />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <Subscriptions />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <JobPositions />
      </div>
      <div className="flex flex-col items-center justify-center bg-[#e6effa] p-20">
        <AccountList />
      </div>
    </div>
  );
}

export default App;

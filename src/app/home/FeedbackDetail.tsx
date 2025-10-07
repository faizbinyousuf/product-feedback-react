import { Button } from "@/components/ui/button";
import FeedBackCard from "@/components/widgets/FeedBackCard";
import { ChevronLeftIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FeedbackModel } from "../types/FeedbackModel";

function FeedbackDetail() {
  const location = useLocation();
  const feedback = location.state?.feedback as FeedbackModel;

  if (!feedback) return <p>No feedback data provided</p>;
  return (
    <div className="p-4 bg-white    w-full lg:maxw-2xl mx-auto flex flex-col h-screen overflow-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <ChevronLeftIcon className="size-5 text-app-dark" />
          <Link to="/" className="text-sm text-app-dark font-bold">
            Go Back
          </Link>
        </div>
        <Button
          variant="outline"
          className="text-white font-semibold bg-[#4661E6] p-5 rounded-lg"
        >
          Edit Feedback
        </Button>
      </div>
      <FeedBackCard feedback={feedback} shouldNavigate={false} />
      <div className="bg-white w-full rounded-lg h-80 p-4 space-y-4 ">
        <p className="font-bold text-app-dark">
          {feedback.comments.length} Comments
        </p>
        <div className="flex justify-start items-center ">
          <div>
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-app-dark font-semibold text-sm">
              {feedback.user.name}
            </p>
            <p className="text-xs text-app-dark font-light">
              @{feedback.user.username}
            </p>
          </div>
          <Button
            className="ml-auto text-xs text-[#4661E6] font-semibold"
            variant={"ghost"}
          >
            Reply
          </Button>
        </div>

        {/* <p className="text-app-dark text-sm">{comment}</p> */}
      </div>
    </div>
  );
}

export default FeedbackDetail;

import { Button } from "@/components/ui/button";
import FeedBackCard from "@/components/widgets/FeedBackCard";
import { ChevronLeftIcon, SendIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { FeedbackModel } from "../types/FeedbackModel";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

function FeedbackDetail() {
  const location = useLocation();
  const feedback = location.state?.feedback as FeedbackModel;
  const [characterCount, setCharacterCount] = useState(255);

  if (!feedback) return <p>No feedback data provided</p>;
  return (
    <div className="p-4 bg-app-bg     flex flex-col h-screen overflow-auto  ">
      <div className="lg:max-w-3xl mx-auto">
        <div className="flex justify-between items-center ">
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
        <div className="bg-white w-full rounded-lg   p-4 md:p-6   space-y-4 ">
          <p className="font-bold text-app-dark">
            {feedback.comments.length} Comments
          </p>
          {feedback.comments.map((comment, index) => (
            <div key={index}>
              <div className="flex justify-start ">
                <div>
                  <Avatar className="size-10">
                    <AvatarImage src={comment.user.image} />
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
              <p className="text-sm text-app-dark my-4.5">{comment.content}</p>
              {comment.replies?.map((reply, index) => (
                <div key={index} className="flex my-3 mb-5 ml-6">
                  <div className="flex items-stretch   ">
                    <Separator
                      className="w-[0.1px] bg-gray-200 mr-6  self-stretch"
                      orientation="vertical"
                    />
                    <div>
                      <div className="flex justify-start items-center  ">
                        <div>
                          <Avatar className="size-10">
                            <AvatarImage src={reply.user.image} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col ml-4">
                          <p className="text-app-dark font-semibold text-sm">
                            {reply.user.name}
                          </p>
                          <p className="text-xs text-app-dark font-light">
                            @{reply.user.username}
                          </p>
                        </div>
                        <Button
                          className="ml-auto text-xs text-[#4661E6] font-semibold"
                          variant={"ghost"}
                        >
                          Reply
                        </Button>
                      </div>
                      <p className="text-sm text-app-dark mt-3.5">
                        <span className="text-[#BC3FF1] font-semibold">
                          @{feedback.user.username}
                        </span>{" "}
                        {reply.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {index != feedback.comments.length - 1 && (
                <hr
                  // orientation="horizontal"
                  className="h-[0.1px] bg-gray-200   mt-5"
                />
              )}
            </div>
          ))}
        </div>
        <div className="bg-white w-full rounded-lg   p-4 md:p-6   space-y-4 mt-4 ">
          <p className="font-bold text-app-dark">Add Comment</p>
          <textarea
            maxLength={255}
            onChange={(e) => {
              if (e.target.value.length <= 255) {
                setCharacterCount(255 - e.target.value.length);
              }
            }}
            placeholder="Type your comment here"
            style={{
              resize: "none",
              fontSize: "14px",
              color: "#1e3a8",
              padding: "10px",
            }}
            className={cn(
              "w-full h-24 bg-[#F3F3FF] rounded-lg p-4 border-2 font-normal border-transparent focus:border-2 ",
              characterCount === 0
                ? "focus:border-red-500 focus:border-2 border-red-500"
                : "focus:border-[#4661E6]"
            )}
          />
          <div className="flex items-center justify-between">
            {/* characters left */}
            <p className="text-gray-500 text-sm font-[500]">
              {characterCount} characters left
            </p>
            <Button
              variant={"ghost"}
              className="bg-[#BC3FF1] text-white font-semibold m-0 md:py-6 py-5 hover:cursor-pointer text-xs md:text-sm px-0"
            >
              <SendIcon /> Post Comment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;

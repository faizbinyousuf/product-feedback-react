import React, { useState } from "react";
import { Typography } from "../ui/typography";
import { ChevronUpIcon, MessageCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeedbackModel } from "@/app/types/FeedbackModel";
import { useNavigate } from "react-router-dom";
interface Props {
  feedback: FeedbackModel;
  shouldNavigate?: boolean;
}

function FeedBackCard({ feedback, shouldNavigate }: Props) {
  //   const randomNumber = () => Math.floor(Math.random() * 100);
  const [upVote, setUpVote] = useState(feedback.upvotes);
  const [upVoteDone, setUpVoteDone] = useState(false);
  const navigate = useNavigate();
  //    navigate(`/noteDetail/${note.id}`);

  const handleUpVote = () => {
    setUpVote(upVote + 1);
    setUpVoteDone(!upVoteDone);
    if (upVoteDone) {
      setUpVote(upVote - 1);
      setUpVoteDone(!upVoteDone);
    }
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-lg w-full p-5 my-4 space-x-10">
      <div
        onClick={() => handleUpVote()}
        className={cn(
          "rounded-lg py-2 px-3.5 md:py-2.5 md:px-2   shrink-0   w-10 h-max cursor-pointer hidden  md:flex flex-col gap-2 items-center  ",
          upVoteDone ? "bg-[#4661E6] text-white" : "bg-[#F3F3FF] text-[#4661E6]"
        )}
      >
        <ChevronUpIcon className="size-4" />
        <Typography
          variant="bodyText"
          className={cn(
            "font-bold text-sm",
            upVoteDone ? "text-white" : "text-app-dark"
          )}
        >
          {feedback.upvotes}
        </Typography>
      </div>
      <div>
        <div
          onClick={() => {
            if (shouldNavigate) {
              navigate("/feedback-detail", { state: { feedback } });
            }
          }}
          className="  w-full  "
        >
          <p className="text-gray-800 text-sm font-semibold mb-3">
            {feedback.title}
          </p>
          <p className="text-gray-600 text-sm font-[500]">
            {feedback.description}
          </p>
          <div className="rounded-md py-1 px-3 w-max h-max cursor-pointer   bg-[#F3F3FF]  text-[#4661E6]  my-3">
            <Typography
              variant="bodyText"
              className="font-semibold text-sm text-[#4661E6]"
            >
              {feedback.category}
            </Typography>
          </div>
        </div>
        <div className="flex md:hidden justify-between items-center ">
          <div
            onClick={() => handleUpVote()}
            className={cn(
              "rounded-lg py-2 px-3.5 w-min h-max cursor-pointer   flex gap-2 items-center",
              upVoteDone
                ? "bg-[#4661E6] text-white"
                : "bg-[#F3F3FF] text-[#4661E6]"
            )}
          >
            <ChevronUpIcon className="size-4" />
            <Typography
              variant="bodyText"
              className={cn(
                "font-bold text-sm",
                upVoteDone ? "text-white" : "text-app-dark"
              )}
            >
              {upVote}
            </Typography>
          </div>
          <div className="flex md:hidden gap-2 items-center w-16 shrink-0">
            <MessageCircleIcon className=" size-5  text-[#CDD2EF] fill-[#CDD2EF] bg-cover " />
            <p className="text-xs text-app-dark font-bold">
              {feedback.comments.length}
            </p>
          </div>
        </div>
      </div>
      {/* hide in mobile and show in tablet screens */}
      <div className="hidden md:flex gap-2 items-center w-16 shrink-0  ">
        <MessageCircleIcon className=" size-5  text-[#CDD2EF] fill-[#CDD2EF] bg-cover " />
        <p className="text-xs text-app-dark font-bold">
          {feedback.comments.length}
        </p>
      </div>
    </div>
  );
}

export default FeedBackCard;

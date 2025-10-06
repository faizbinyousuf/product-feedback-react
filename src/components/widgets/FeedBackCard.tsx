import React, { useState } from "react";
import { Typography } from "../ui/typography";
import { BubblesIcon, ChevronUpIcon, MessageCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function FeedBackCard() {
  const randomNumber = () => Math.floor(Math.random() * 100);
  const [upVote, setUpVote] = useState(randomNumber() + 100);
  const [upVoteDone, setUpVoteDone] = useState(false);

  const handleUpVote = () => {
    setUpVote(upVote + 1);
    setUpVoteDone(!upVoteDone);
    if (upVoteDone) {
      setUpVote(upVote - 1);
      setUpVoteDone(!upVoteDone);
    }
  };
  return (
    <div className="   bg-white rounded-lg w-full p-5">
      <p className="text-gray-800 text-sm font-semibold ">Feedback title</p>
      <p className="text-gray-600 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus
        sit velit laudantium magnam aspernatur sapiente
      </p>
      <div className="rounded-md py-1 px-3 w-min h-max cursor-pointer   bg-[#F3F3FF]  text-[#4661E6]  my-3">
        <Typography
          variant="bodyText"
          className="font-semibold text-sm text-[#4661E6]"
        >
          Feature
        </Typography>
      </div>
      <div className="flex justify-between items-center">
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
              "font-semibold text-sm",
              upVoteDone ? "text-white" : "text-[#4661E6]"
            )}
          >
            {upVote}
          </Typography>
        </div>
        <MessageCircleIcon className="   text-[#CDD2EF] fill-[#CDD2EF] bg-cover " />
      </div>
    </div>
  );
}

export default FeedBackCard;

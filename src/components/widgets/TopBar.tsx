import { LightbulbIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

function TopBar() {
  return (
    <div className=" md:rounded-lg md:h-20 h-16 bg-[#373E68] text-white flex items-center justify-between w-full px-5     ">
      <LightbulbIcon className="w-8 h-8 hidden md:block" />
      <Typography
        variant="h5"
        className="font-semibold text-white hidden md:block"
      >
        10 Suggestions
      </Typography>
      <p>Sort by</p>
      <p className="font-semibold">Most upvotes</p>
      <Button
        variant={"ghost"}
        className="bg-[#BC3FF1] font-semibold md:py-6 py-5"
      >
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
}

export default TopBar;

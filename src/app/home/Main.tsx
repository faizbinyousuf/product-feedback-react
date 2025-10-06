import FeedBackCard from "@/components/widgets/FeedBackCard";
import TopBar from "@/components/widgets/TopBar";

import React from "react";

function Main() {
  return (
    <div className="md:px-8 lg:p-8  ">
      <TopBar />
      <div className="m-5">
        {Array.from({ length: 5 }, (_, index) => (
          <FeedBackCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Main;

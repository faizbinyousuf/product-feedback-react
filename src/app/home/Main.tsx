import FeedBackCard from "@/components/widgets/FeedBackCard";
import TopBar from "@/components/widgets/TopBar";

import React from "react";
import { feedbackList } from "../types/FeedbackModel";

function Main() {
  return (
    <div className="md:px-8 lg:p-8  ">
      <TopBar />
      <div>
        {feedbackList.map((item, index) => (
          <FeedBackCard key={index} feedback={item} shouldNavigate={true} />
        ))}
      </div>
    </div>
  );
}

export default Main;

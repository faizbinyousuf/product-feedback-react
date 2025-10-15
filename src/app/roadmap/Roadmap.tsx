import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { features } from "../types/FeedbackModel";

function Roadmap() {
  const columns = ["Planned", "In-Progress", "Live"];
  // Group by status
  const grouped = columns.map((status) => ({
    status,
    items: features.filter((f) => f.status === status),
  }));

  return (
    <div className="p-4 bg-gray-200     flex flex-col h-screen overflow-auto  ">
      <div className="lg:max-w-3xl mx-auto w-full">
        <div className="flex justify-between items-center w-full md:rounded-lg md:h-20 h-16 bg-[#373E68] text-white p-5">
          <div className="flex items-start gap-3  flex-col">
            <div className="flex gap-3 items-center  ">
              <ChevronLeftIcon className="size-5 -m-1.5  " />
              <Link to="/" className="text-sm   font-bold">
                Go Back
              </Link>
            </div>
            <p className="text-lg   font-bold">Roadmap</p>
          </div>
          <Button
            variant={"ghost"}
            className="bg-[#BC3FF1] font-semibold md:py-6 py-5 hover:cursor-pointer text-xs md:text-sm px-0"
          >
            <PlusIcon /> Add Feedback
          </Button>
        </div>
        {/* test */}
        {/* <div className="grid gap-4 grid-cols-3 mt-4 bg-app-bg">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className=" h-60 w-full bg-white rounded-lg border border-gray-100"
            >
              <div className="w-full h-1.5 bg-[#4661E6] rounded-t-lg "></div>
              <p>Item {index + 1}</p>
            </div>
          ))}
        </div> */}
        {/* <div className="grid grid-cols-1  md:grid-cols-3 gap-6 p-6  min-h-screen">
          {grouped.map((group) => (
            <div className="bg-white" key={group.status}>
              <h2 className="text-lg font-semibold text-slate-800">
                {group.status} ({group.items.length})
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {group.status === "Planned"
                  ? "Ideas prioritized for research"
                  : group.status === "In-Progress"
                  ? "Currently being developed"
                  : "Released features"}
              </p>

              <div className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <div className="rounded-lg     shadow-sm">
                    <div
                      className={cn(
                        "w-full h-1.5   rounded-t-lg ",
                        item.status === "Planned"
                          ? "bg-orange-400"
                          : item.status === "In-Progress"
                          ? "bg-purple-500"
                          : "bg-sky-500"
                      )}
                    ></div>
                    <div
                      key={item.id}
                      className="p-5"
                      //   className={`rounded-xl bg-white p-5 border-t-4  shadow-sm`}
                    >
                      <h3 className="font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <span className="font-semibold">↑</span>{" "}
                            {item.upvotes}
                          </span>
                          <span className="flex items-center gap-1">
                            💬 {item.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  py-6   min-h-screen">
          {grouped.map((group) => (
            <div key={group.status}>
              <h2 className="text-lg font-semibold text-slate-800">
                {group.status} ({group.items.length})
              </h2>
              <p className="text-sm text-slate-500 mb-4">
                {group.status === "Planned"
                  ? "Ideas prioritized for research"
                  : group.status === "In-Progress"
                  ? "Currently being developed"
                  : "Released features"}
              </p>

              <div className="flex flex-col gap-4  ">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-xl bg-white p-5 border-t-4  ${
                      item.status === "Planned"
                        ? "border-orange-400"
                        : item.status === "In-Progress"
                        ? "border-purple-500"
                        : "border-sky-500"
                    } shadow-sm`}
                  >
                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>

                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <span className="font-semibold">↑</span>{" "}
                          {item.upvotes}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {item.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;

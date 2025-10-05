import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { useState } from "react";
import { Button } from "../ui/button";

function Sidebar() {
  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Other", "Feature"];
  const roadMaps = ["Planned", "In-Progress", "Live"];

  return (
    <>
      <div className="bg-app-bg lg:space-y-8 md:space-y-0 md:space-x-3 flex flex-col md:flex-row lg:flex-col">
        {/* first item */}
        <div className="rounded-lg lg:max-h-60 md:max-h-52  lg:min-h-[8.5rem] md:min-h-[4.5rem] w-full md:w-60 bg-no-repeat bg-cover  md:bg-[url('https://toyan-product-feedback-app.vercel.app/suggestions/tablet/background-header.png')] lg:bg-[url('https://toyan-product-feedback-app.vercel.app/suggestions/desktop/background-header.png')] flex flex-col justify-end  p-4">
          <div className="grid gap-1  lg:h-full lg:w-full ">
            <Typography variant="h5" className="text-white font-semibold">
              Frontend Mentor
            </Typography>
            <Typography variant="bodyText" className="text-white text-sm ">
              Feedback Board
            </Typography>
          </div>
        </div>

        {/* tags section */}
        <div className="w-full md:w-60   bg-white rounded-lg p-4 flex flex-wrap gap-3 ">
          {tags.map((tag, index) => (
            <div
              key={index}
              onClick={() => setSelectedTag(tag)}
              className={cn(
                "rounded-md py-2 px-3 w-min h-max cursor-pointer hover:bg-blue-100 text-red-600 ",
                selectedTag === tag
                  ? "bg-[#4661E6] text-white hover:bg-[#4661E6] "
                  : "bg-[#F3F3FF]  text-[#4661E6]"
              )}
            >
              <Typography
                variant="bodyText"
                className={cn(
                  "font-semibold text-sm",
                  selectedTag === tag ? "text-white" : "text-[#4661E6]"
                )}
              >
                {tag}
              </Typography>
            </div>
          ))}
        </div>
        {/* roadmap section */}
        <div className="w-full md:w-60  bg-white rounded-lg p-4">
          <div className="flex justify-between items-center">
            <Typography variant="h5" className="text-app-dark font-bold  ">
              Roadmap
            </Typography>
            <Button
              variant="link"
              className="text-[#4661E6] font-semibold p-0 m-0"
            >
              View
            </Button>
          </div>
          {roadMaps.map((roadMap, index) => (
            <div key={index}>
              <div className="flex justify-between items-center space-y-1 mt-3">
                <div className="flex gap-2 items-center">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full  ",
                      roadMap === "Planned"
                        ? "bg-[#F49F85]"
                        : roadMap === "In-Progress"
                        ? "bg-[#62BCFA]"
                        : "bg-[#4661E6]"
                      //   roadMap === "Live" ? "bg-[#62BCFA]" : "bg-[#4661E6]"
                    )}
                  ></span>
                  <p>{roadMap}</p>
                </div>
                <p className="text-app-dark font-bold">{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;

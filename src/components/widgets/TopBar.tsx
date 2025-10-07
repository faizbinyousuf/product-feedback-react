import {
  CheckIcon,
  ChevronDownIcon,
  LightbulbIcon,
  PlusIcon,
} from "lucide-react";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

function TopBar() {
  const [open, setOpen] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState("Most upvotes");
  const handleSelect = (option: string) => {
    setSelectedFilter(option);
    setOpen(false);
  };

  return (
    <div className=" md:rounded-lg md:h-20 h-16 bg-[#373E68] text-white flex items-center justify-between w-full px-5  py-5   ">
      <LightbulbIcon className="w-8 h-8 hidden md:block" />
      <Typography
        variant="h5"
        className="font-semibold text-white hidden md:block"
      >
        10 Suggestions
      </Typography>
      <div className="flex items-center gap-2   md:w-56 w-24  ">
        <p className="text-xs md:text-base shrink-0 hidden sm:block ">
          Sort by
        </p>

        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
          <DropdownMenuTrigger asChild className="hover:cursor-pointer">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-xs md:text-sm hover:cursor-pointer">
                {selectedFilter}
              </p>
              <ChevronDownIcon
                className={`size-5 transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mt-5 md:mt-7" align="start">
            <DropdownMenuGroup>
              {[
                "Most Upvotes",
                "Least Upvotes",
                "Most Comments",
                "Least Comments",
              ].map((option) => (
                <div key={option}>
                  <DropdownMenuItem onSelect={() => handleSelect(option)}>
                    <div className="flex items-center justify-between w-full hover:cursor-pointer text-sm  ">
                      {option}
                      {selectedFilter === option && (
                        <CheckIcon className="text-green-700" />
                      )}
                    </div>
                  </DropdownMenuItem>
                  {option !== "Least Comments" && <DropdownMenuSeparator />}
                </div>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button
        variant={"ghost"}
        className="bg-[#BC3FF1] font-semibold md:py-6 py-5 hover:cursor-pointer text-xs md:text-sm px-0"
      >
        <PlusIcon /> Add Feedback
      </Button>
    </div>
  );
}

export default TopBar;

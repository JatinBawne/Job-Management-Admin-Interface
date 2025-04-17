import React, { useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../components/ui/select";
import { Slider } from "../../../../components/ui/slider";
import { Separator } from "../../../../components/ui/separator";
import { SearchIcon, MapPinIcon, BriefcaseIcon, ChevronDownIcon } from "lucide-react";

export const HeaderSection = (): JSX.Element => {
  const [salaryRange, setSalaryRange] = useState([30, 80]);
  const locations = ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai", "Pune"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];

  const handleSalaryChange = (value: number[]) => {
    setSalaryRange(value);
  };

  return (
    <header className="w-full py-4 bg-white shadow-[0px_0px_14px_#c5bfbf40]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center mt-8 lg:mt-16 mb-4 gap-4 lg:gap-0">
          {/* Search input */}
          <div className="flex items-center flex-1 relative">
            <SearchIcon className="absolute left-3 w-5 h-5 text-[#686868]" />
            <Input
              className="pl-10 h-12 text-[#686868] font-medium placeholder:text-[#686868]"
              placeholder="Search By Job Title, Role"
            />
          </div>
          <Separator orientation="vertical" className="h-12 mx-4 hidden lg:block" />
          {/* Location dropdown */}
          <div className="flex items-center flex-1 relative">
            <MapPinIcon className="absolute left-3 w-[18px] h-[23px] text-[#686868] z-10" />
            <Select>
              <SelectTrigger className="pl-10 h-12 border-none shadow-none">
                <SelectValue placeholder="Preferred Location" className="text-[#686868] font-medium" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location.toLowerCase()}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Separator orientation="vertical" className="h-12 mx-4 hidden lg:block" />
          {/* Job type dropdown */}
          <div className="flex items-center flex-1 relative">
            <BriefcaseIcon className="absolute left-3 w-5 h-[18px] text-[#686868] z-10" />
            <Select>
              <SelectTrigger className="pl-10 h-12 border-none shadow-none">
                <SelectValue placeholder="Job type" className="text-[#686868] font-medium" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Separator orientation="vertical" className="h-12 mx-4 hidden lg:block" />
          {/* Salary slider */}
          <div className="flex flex-col flex-1">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-base text-[#222222]">Salary Per Month</span>
              <span className="font-bold text-base text-[#222222]">
                ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
              </span>
            </div>
            <div className="relative px-2">
              <Slider
                defaultValue={salaryRange}
                max={100}
                min={0}
                step={1}
                className="w-full"
                onValueChange={handleSalaryChange}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
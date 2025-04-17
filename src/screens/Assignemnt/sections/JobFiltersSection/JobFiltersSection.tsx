import { ClockIcon, DollarSignIcon, MapPinIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Slider } from "../../../../components/ui/slider";
import { Label } from "../../../../components/ui/label";

// Job data for mapping
const jobListings = [
  {
    id: 1,
    title: "Full Stack Developer",
    logo: "/image-77-2.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    jobType: "Full-time",
    salary: 1200000, // 12LPA in rupees
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 2,
    title: "Node Js Developer",
    logo: "/image-79.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerClass: "bg-white rounded-[102.5px]",
    experience: "1-3 yr Exp",
    locationType: "Remote",
    jobType: "Part-time",
    salary: 800000, // 8LPA in rupees
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    logo: "/image-78.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    logoContainerClass: "bg-[#f7881f] rounded-[93.33px]",
    experience: "1-3 yr Exp",
    locationType: "Hybrid",
    jobType: "Contract",
    salary: 1000000, // 10LPA in rupees
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    logo: "/image-77-2.png",
    logoBackground:
      "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    jobType: "Internship",
    salary: 500000, // 5LPA in rupees
    postedTime: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
];

export const JobFiltersSection = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedJobType, setSelectedJobType] = useState<string>("all");
  const [salaryRange, setSalaryRange] = useState<number[]>([0, 2000000]);

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchText.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesLocation = selectedLocation === "all" || job.locationType === selectedLocation;
    const matchesJobType = selectedJobType === "all" || job.jobType === selectedJobType;
    const matchesSalary = job.salary >= salaryRange[0] && job.salary <= salaryRange[1];
    return matchesSearch && matchesLocation && matchesJobType && matchesSalary;
  });

  const uniqueLocations = Array.from(new Set(jobListings.map(job => job.locationType)));
  const uniqueJobTypes = Array.from(new Set(jobListings.map(job => job.jobType)));

  const formatSalary = (salary: number) => {
    return `${(salary / 100000).toFixed(1)}LPA`;
  };

  return (
    <div className="space-y-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search jobs..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {uniqueLocations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedJobType} onValueChange={setSelectedJobType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Job Types</SelectItem>
            {uniqueJobTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm">Salary Range</Label>
            <span className="text-sm text-gray-600">
              {formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}
            </span>
          </div>
          <Slider
            value={salaryRange}
            onValueChange={setSalaryRange}
            min={0}
            max={2000000}
            step={100000}
            className="w-full"
          />
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full py-8">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            className="w-full min-h-[360px] relative shadow-[0px_0px_14px_#d3d3d326] rounded-xl"
          >
            <CardContent className="p-0">
              {/* Logo container */}
              <div
                className="absolute w-[83px] h-[82px] top-4 left-4 rounded-[13.18px] overflow-hidden border border-solid border-white shadow-[0px_0px_10.25px_#94949440]"
                style={{ background: job.logoBackground }}
              >
                {job.logoContainerClass ? (
                  <div
                    className={`relative w-[${job.title === "UX/UI Designer" ? "60px" : "66px"}] h-[${job.title === "UX/UI Designer" ? "60px" : "66px"}] ${job.title === "UX/UI Designer" ? "top-[11px] left-3" : "top-2 left-[9px]"} ${job.logoContainerClass} overflow-hidden`}
                  >
                    <img
                      className={`${job.title === "Node Js Developer" ? "absolute w-[45px] h-[45px] top-3.5 left-2.5" : job.title === "UX/UI Designer" ? "absolute w-[51px] h-[51px] top-0.5 left-0.5" : "w-full h-full object-cover"}`}
                      alt={`${job.title} logo`}
                      src={job.logo}
                    />
                  </div>
                ) : (
                  <img
                    className="absolute w-[66px] h-[66px] top-2 left-[9px] object-cover"
                    alt={`${job.title} logo`}
                    src={job.logo}
                  />
                )}
              </div>

              {/* Posted time badge */}
              <Badge className="absolute top-4 right-4 bg-[#afd8ff] text-black hover:bg-[#afd8ff] px-2.5 py-[7px] rounded-[10px]">
                <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-sm">
                  {job.postedTime}
                </span>
              </Badge>

              {/* Job title */}
              <h3 className="absolute top-[116px] left-4 [font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-black text-xl">
                {job.title}
              </h3>

              {/* Job details */}
              <div className="absolute top-40 left-4 flex flex-wrap gap-2">
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-4 w-4 text-[#5a5a5a]" />
                  <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                    {job.experience}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4 text-[#5a5a5a]" />
                  <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                    {job.locationType}
                  </span>
                </div>

                <div className="flex items-end gap-1">
                  <DollarSignIcon className="h-4 w-4 text-[#5a5a5a]" />
                  <span className="[font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#5a5a5a] text-base">
                    {formatSalary(job.salary)}
                  </span>
                </div>
              </div>

              {/* Job description */}
              <p className="absolute w-[calc(100%-32px)] top-[201px] left-4 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#555555] text-sm whitespace-pre-line">
                {job.description}
              </p>

              {/* Apply button */}
              <Button className="w-[calc(100%-32px)] absolute bottom-4 left-4 bg-[#00aaff] hover:bg-[#00aaff]/90 text-white rounded-[10px] border border-solid shadow-[0px_0px_14px_#5c5c5c26] py-3">
                <span className="[font-family:'Satoshi_Variable-Bold',Helvetica] font-bold text-base">
                  Apply Now
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};
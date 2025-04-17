import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { ClockIcon, DollarSignIcon, MapPinIcon } from "lucide-react";

interface Job {
  id: number;
  title: string;
  experience: string;
  locationType: string;
  salary: number;
  postedTime: string;
  logo: string;
  logoBackground: string;
  logoContainerClass?: string;
  description: string;
}

interface JobListingsSectionProps {
  jobListings: Job[];
}

interface JobCardProps {
  job: Job;
  formatSalary: (salary: number) => string;
}

const JobCard: React.FC<JobCardProps> = ({ job, formatSalary }) => (
  <Card className="w-full h-[360px] relative shadow-[0px_0px_14px_#d3d3d326] rounded-xl overflow-hidden">
    <CardContent className="p-0 h-full">
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
);

export const JobListingsSection = ({ jobListings }: JobListingsSectionProps): JSX.Element => {
  const formatSalary = (salary: number) => {
    return `${(salary / 100000).toFixed(1)}LPA`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {jobListings.map((job) => (
        <JobCard key={job.id} job={job} formatSalary={formatSalary} />
      ))}
    </div>
  );
};

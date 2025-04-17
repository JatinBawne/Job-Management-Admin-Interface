import React, { useState } from "react";
import { JobFiltersSection } from "./sections/JobFiltersSection/JobFiltersSection";
import { JobListingsSection } from "./sections/JobListingsSection/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { Toaster } from "../../components/ui/toaster";

// Initial job listings data
const initialJobListings = [
  {
    id: 1,
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: 1200000,
    postedTime: "24h Ago",
    logo: "/image-79-1.png",
    logoBackground: "linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: 1200000,
    postedTime: "24h Ago",
    logo: "/image-78-1.png",
    logoBackground: "linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: 1200000,
    postedTime: "24h Ago",
    logo: "/image-77-2.png",
    logoBackground: "linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    title: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: 1200000,
    postedTime: "24h Ago",
    logo: "/image-79-2.png",
    logoBackground: "linear-gradient(180deg,rgba(254,254,253,1)_0%,rgba(241,241,241,1)_100%)",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\nFilter destinations based on interests and travel style, and create personalized",
  },
];

export const Assignemnt = (): JSX.Element => {
  const [jobListings, setJobListings] = useState(initialJobListings);

  const handleJobCreated = (newJob: any) => {
    setJobListings(prevJobs => [newJob, ...prevJobs]);
  };

  return (
    <div className="bg-[#fbfbff] min-h-screen w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationBarSection onJobCreated={handleJobCreated} />
        <div className="py-6 sm:py-8">
          <JobFiltersSection />
          <JobListingsSection jobListings={jobListings} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
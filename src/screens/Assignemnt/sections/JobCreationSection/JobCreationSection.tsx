import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";
import { Label } from "../../../../components/ui/label";
import { DialogContent, DialogHeader, DialogTitle } from "../../../../components/ui/dialog";
import { useToast } from "../../../../hooks/use-toast";

const jobFormSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  companyName: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
  salaryRange: z.string().min(1, "Salary range is required"),
  description: z.string().min(1, "Job description is required"),
  requirements: z.string().min(1, "Requirements are required"),
  responsibilities: z.string().min(1, "Responsibilities are required"),
  applicationDeadline: z.string().min(1, "Application deadline is required"),
});

type JobFormValues = z.infer<typeof jobFormSchema>;

interface JobCreationSectionProps {
  onJobCreated: (job: any) => void;
  setIsOpen: (open: boolean) => void;
}

export const JobCreationSection = ({ onJobCreated, setIsOpen }: JobCreationSectionProps): JSX.Element => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
  });

  const jobType = watch("jobType");

  const onSubmit = async (data: JobFormValues) => {
    try {
      // Create a new job object
      const newJob = {
        id: Date.now(), // Generate a unique ID
        title: data.title,
        logo: "/image-77-2.png", // Default logo
        logoBackground: "linear-gradient(180deg,rgba(254,254,253,1) 0%,rgba(241,241,241,1) 100%)",
        experience: "1-3 yr Exp", // Default experience
        locationType: data.location,
        jobType: data.jobType,
        salary: parseInt(data.salaryRange) * 100000, // Convert to annual salary
        postedTime: "Just now",
        description: data.description,
      };
      
      // Call the callback to add the new job
      onJobCreated(newJob);
      
      toast({
        title: "Success",
        description: "Job posting created successfully!",
      });
      
      setIsOpen(false);
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create job posting. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Create New Job Posting</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Job Title</Label>
          <Input id="title" {...register("title")} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" {...register("companyName")} />
          {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Select onValueChange={(value) => setValue("location", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Onsite">Onsite</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="jobType">Job Type</Label>
          <Select value={jobType} onValueChange={(value) => setValue("jobType", value as JobFormValues["jobType"])}>
            <SelectTrigger>
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
          {errors.jobType && <p className="text-red-500 text-sm">{errors.jobType.message}</p>}
        </div>

        <div>
          <Label htmlFor="salaryRange">Salary Range (in LPA)</Label>
          <Input id="salaryRange" type="number" {...register("salaryRange")} />
          {errors.salaryRange && <p className="text-red-500 text-sm">{errors.salaryRange.message}</p>}
        </div>

        <div>
          <Label htmlFor="description">Job Description</Label>
          <Textarea id="description" {...register("description")} />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div>
          <Label htmlFor="requirements">Requirements</Label>
          <Textarea id="requirements" {...register("requirements")} />
          {errors.requirements && <p className="text-red-500 text-sm">{errors.requirements.message}</p>}
        </div>

        <div>
          <Label htmlFor="responsibilities">Responsibilities</Label>
          <Textarea id="responsibilities" {...register("responsibilities")} />
          {errors.responsibilities && <p className="text-red-500 text-sm">{errors.responsibilities.message}</p>}
        </div>

        <div>
          <Label htmlFor="applicationDeadline">Application Deadline</Label>
          <Input type="date" id="applicationDeadline" {...register("applicationDeadline")} />
          {errors.applicationDeadline && <p className="text-red-500 text-sm">{errors.applicationDeadline.message}</p>}
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Create Job</Button>
        </div>
      </form>
    </DialogContent>
  );
};
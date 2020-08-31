import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

export default function Jobs({ job, onClick }) {
  return (
    <Paper onClick={onClick} className="job">
      <div>
        <Typography className="displayJobs jobTitle" variant="h5">
          {job.title}
        </Typography>
        <Typography className="displayJobs" variant="h6">
          {job.company}
        </Typography>
        <Typography className="displayJobs" variant="h6">
          {job.location}
        </Typography>
      </div>
      <div className="dateUpdated">
        <Typography>
          {job.created_at.split(" ").slice(0, 3).join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}

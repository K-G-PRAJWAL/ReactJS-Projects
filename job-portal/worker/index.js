var CronJob = require("cron").CronJob;
const fetchGithub = require("./tasks/fetch-github");

// Scheduling for refresh
new CronJob("* * * * *", fetchGithub, null, true, "America/Los_Angeles");

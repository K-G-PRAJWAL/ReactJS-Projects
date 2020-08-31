var fetch = require("node-fetch");
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
// const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Github Jobs
const baseURL = "https://jobs.github.com/positions.json";

// Fetching Pages
async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    // console.log(jobs.length);
    onPage++;
  }
  //   console.log(allJobs.length);

  //Filter Algorithm - Only Entry level Jobs
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("head")
    ) {
      return false;
    }
    return true;
  });
  console.log(jrJobs.length);

  //Storage in Redis
  const success = await setAsync("github", JSON.stringify(jrJobs));
  console.log({ success });
}

// fetchGithub();
module.exports = fetchGithub;

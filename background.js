import { Octokit } from "octokit";
import fs from 'fs';
var fortnightAway = new Date(Date.now() + 12096e5);
const owner = 'scikit-learn-contrib';
const repo = 'sklearn-pandas';
const octokit = new Octokit({
  auth: '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'
});

const data = await octokit.request('GET /repos/{owner}/{repo}/issues', {
  owner: owner,
  repo: repo,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'since' : fortnightAway,
  }
})
// feed the model 
// model.predict(data[0].title);
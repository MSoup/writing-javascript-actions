const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");
        const octokit = new github.getOctokit(token);

        const owner= github.context.repo.owner;
        const repo= github.context.repo.repo;

        console.log(owner, repo);
        const newIssue = await octokit.rest.issues.create({
            owner: owner,
            repo: repo,
            title: issueTitle,
            body: jokeBody,
        });
    } catch(err) {
        core.setFailed(err.message);
    }
}

run();
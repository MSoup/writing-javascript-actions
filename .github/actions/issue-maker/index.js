const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokeBody = core.getInput("joke");
        const token = core.getInput("repo-token");
        const octokit = new github.getOctokit(token);

        const newIssue = await octokit.rest.issues.create({
            // owner: github.context.repo.repo,
            // repo: github.context.repo.owner,
            owner: "me",
            repo: "hello-world",
            title: issueTitle,
            body: jokeBody,
        });
    } catch(err) {
        core.setFailed(err.message);
    }
}

run();
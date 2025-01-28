import { Octokit } from "@octokit/rest";

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  topics: string[];
  default_branch: string;
}

export interface RepoDetails {
  repo: GithubRepo;
  readme: string;
  contributors: {
    login: string;
    avatar_url: string;
    html_url: string;
  }[];
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function getReadme(owner: string, repo: string, branch: string): Promise<string> {
  try {
    const response = await octokit.repos.getReadme({
      owner,
      repo,
      ref: branch,
    });

    const content = Buffer.from(response.data.content, "base64").toString();
    const firstParagraph = content.split("\n\n")[0].replace(/[#*`]/g, "").trim();
    return firstParagraph;
  } catch (error) {
    console.error("Error fetching README:", error);
    return "";
  }
}

async function getContributors(owner: string, repo: string) {
  try {
    const response = await octokit.repos.listContributors({
      owner,
      repo,
      per_page: 5,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching contributors:", error);
    return [];
  }
}

export async function getPinnedRepos(username: string): Promise<RepoDetails[]> {
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: "updated",
      per_page: 100,
    });

    const pinnedRepos = repos
      .filter((repo) => repo.topics?.includes("pinned") ?? false)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "",
        html_url: repo.html_url,
        homepage: repo.homepage || "",
        stargazers_count: repo.stargazers_count ?? 0,
        forks_count: repo.forks_count ?? 0,
        watchers_count: repo.watchers_count ?? 0,
        language: repo.language || "Unknown",
        topics: repo.topics ?? [],
        default_branch: repo.default_branch || "main",
      }));

    const repoDetails = await Promise.all(
      pinnedRepos.map(async (repo) => {
        const [readme, contributors] = await Promise.all([
          getReadme(username, repo.name, repo.default_branch),
          getContributors(username, repo.name),
        ]);

        return {
          repo,
          readme,
          contributors: contributors.map((contributor) => ({
            login: contributor.login ?? "",
            avatar_url: contributor.avatar_url ?? "",
            html_url: contributor.html_url ?? "",
          })),
        };
      })
    );

    return repoDetails;
  } catch (error) {
    console.error("Error fetching pinned GitHub repos:", error);
    return [];
  }
}

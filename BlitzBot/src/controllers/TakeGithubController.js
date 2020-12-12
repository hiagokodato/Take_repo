import fetch from 'node-fetch';

class TakeGithubController {
    async show(req, res) {
        const response = await fetch("https://api.github.com/users/takenet/repos", { method: "GET" });
        const data = await response.json();
        const cSharpRepos = data.filter(repo => repo.language == "C#");
        const sortedCSharpRepos = cSharpRepos.sort((date1, date2) => new Date(date1.created_at) - new Date(date2.created_at));

        sortedCSharpRepos.length = 5;

        return res.json(sortedCSharpRepos);
    }
}

export default new TakeGithubController();

import fetch from 'node-fetch';

class TakeGithubController {
    async show(req, res) {
        const response = await fetch("https://api.github.com/users/takenet/repos", { method: "GET" });
        const data = await response.json();
        const cSharpRepos = data.filter(repo => repo.language == "C#");
        const sortedCSharpRepos = cSharpRepos.sort((date1, date2) => new Date(date1.created_at) - new Date(date2.created_at));

        sortedCSharpRepos.length = 5;
        const returnRepos = {};
        for (let i = 0; i <= sortedCSharpRepos.length - 1; i += 1) {
          returnRepos[`repo${i + 1}`] = { ...sortedCSharpRepos[i] };
        }
        return res.json(returnRepos);
    }
}

export default new TakeGithubController();

class Github {
    constructor() {
        this.client_id = '70bf374f59a716901c64';
        this.client_secret = '8906715267a3cb29b2ec55e0573799072086f60d';

        this.repos_count = 5;
        this.respos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${
                this.client_id
            }&client_secret=${this.client_secret}`
        );

        const reposResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${
                this.repos_count
            }&sort=${this.repos_sort}&client_id=${
                this.client_id
            }&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos
        };
    }
}

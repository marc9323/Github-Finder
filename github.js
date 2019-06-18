class Github {
    constructor() {
        this.client_id = '70bf374f59a716901c64';
        this.client_secret = '8906715267a3cb29b2ec55e0573799072086f60d';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${
                this.client_id
            }&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        return {
            profile: profile
        };
    }
}

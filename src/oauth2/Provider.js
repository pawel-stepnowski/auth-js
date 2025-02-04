export class Provider
{
    /**
     * @param {string} id
     * @param {string} auth_uri
     */
    constructor(id, auth_uri)
    {
        this.id = id;
        this.auth_uri = auth_uri;
        this.parameters = {};
    }

    /**
     * @param {string} redirect_uri
     */
    authenticate(redirect_uri)
    {
        const state = { provider: this.id };
        const parameters =
        {
            ...this.parameters,
            redirect_uri,
            state: JSON.stringify(state)
        };
        window.location.href = `${this.auth_uri}?${new URLSearchParams(parameters)}`;
    }
}

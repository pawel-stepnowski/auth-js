export class OAuth2
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

export class Google extends OAuth2
{
    /**
     * @param {{ client_id: string }} parameters
     */
    constructor(parameters)
    {
        super('google', 'https://accounts.google.com/o/oauth2/v2/auth');
        const { client_id } = parameters;
        this.parameters =
        {
            client_id,
            response_type: 'code',
            scope: 'openid email'
        };
    }
}

export class Microsoft extends OAuth2
{
    /**
     * @param {{ client_id: string }} parameters
     */
    constructor(parameters)
    {
        super('microsoft', 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize');
        const { client_id } = parameters;
        this.parameters =
        {
            client_id,
            response_type: 'code',
            scope: 'openid https://graph.microsoft.com/.default'
        };
    }
}

export class GitHub extends OAuth2
{
    /**
     * @param {{ client_id: string }} parameters
     */
    constructor(parameters)
    {
        super('github', 'https://github.com/login/oauth/authorize');
        const { client_id } = parameters;
        this.parameters =
        {
            client_id,
            response_type: 'code',
            scope: 'user'
        };
    }
}

export class LinkedIn extends OAuth2
{
    /**
     * @param {{ client_id: string }} parameters
     */
    constructor(parameters)
    {
        super('linkedin', 'https://www.linkedin.com/oauth/v2/authorization');
        const { client_id } = parameters;
        this.parameters =
        {
            client_id,
            response_type: 'code',
            scope: 'profile email'
        };
    }
}
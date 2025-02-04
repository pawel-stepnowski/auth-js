import { Provider } from "./Provider.js";

export class GitHub extends Provider
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
        this.$type = { name: 'GitHub' };
    }
}
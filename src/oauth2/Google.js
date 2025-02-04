import { Provider } from "./Provider.js";

export class Google extends Provider
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
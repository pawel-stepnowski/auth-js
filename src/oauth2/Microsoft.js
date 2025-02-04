import { Provider } from "./Provider.js";

export class Microsoft extends Provider
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
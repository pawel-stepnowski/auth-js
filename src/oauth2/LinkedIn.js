import { Provider } from "./Provider.js";

export class LinkedIn extends Provider
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
        this.$type = { name: 'LinkedIn' };
    }
}
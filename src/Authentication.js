/** @typedef {import("@liquescens/auth-js").Account} Account */
/** @typedef {import("@liquescens/auth-js").AccountIdentity} AccountIdentity */
/** @typedef {import("@liquescens/auth-js").Client} Client */
/** @typedef {import("@liquescens/auth-js").Session} Session */

export class Authentication
{
    /**
     * @param {string} client_id 
     * @param {string} host 
     */
    constructor(client_id, host)
    {
        this.client_id = client_id;
        this.host = host;
        this.redirect_uri = `${host}/auth`;
    }

    /**
     * @returns {Promise<{ client: Client, sessions: Record<string, Session | undefined>, identities: Record<string, AccountIdentity | undefined>, accounts: Record<string, Account | undefined> }>}
     */
    async getClientInfo()
    {
        const response = await fetch(`${this.host}/client`, { credentials: 'include' });
        if (response.status !== 200) throw new Error(`Invalid Server Response (${response.status}). ${this._generateExceptionDetails(response)}`);
        return await response.json();
    }

    /**
     * @param {string} session_id
     */
    async signOut(session_id)
    {
        const response = await fetch(`${this.host}/session`, { method: 'DELETE', credentials: 'include', body: session_id });
        if (response.status !== 200) throw new Error(`Invalid Server Response (${response.status}). ${this._generateExceptionDetails(response)}`);
    }

    /**
     * @param {string} session_id
     */
    async setActiveSession(session_id)
    {
        const response = await fetch(`${this.host}/session`, { method: 'PUT', credentials: 'include', body: session_id });
        if (response.status !== 200) throw new Error(`Invalid Server Response (${response.status}). ${this._generateExceptionDetails(response)}`);
    }

    /**
     * @param {Response} response 
     */
    _generateExceptionDetails(response)
    {
        // TODO: requires case study analysis
        return '';
    }
}
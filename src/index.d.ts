declare module '@liquescens/auth-js'
{
    export type ReflectionType =
    {
        name: string
    }
    export type Client =
    {
        id: string
        active_session_id: string | undefined
    }
    export type Account =
    {
        id: string
        display_name: string
        mail: string
        verified: boolean
    }
    export type AccountIdentity =
    {
        id: string
        account_id: string
        provider_id: string
        external_id: string
    }
    export type Session =
    {
        id: string
        client_id: string
        identity_id: string
    }
    export type OAuth2Configuration =
    {
        id: string
        auth_uri: string
        client_id: string
        scope: string
    }
    export class Authentication
    {
        constructor(client_id: string, host: string)
        getClientInfo(): Promise<{ client: Client, sessions: Record<string, Session | undefined>, identities: Record<string, AccountIdentity | undefined>, accounts: Record<string, Account | undefined> }>
        signOut(session_id: string): Promise<void>
        setActiveSession(session_id: string): Promise<void>
    }
    export class AuthenticationException
    {
        category: string
        message: string
    }
    export namespace OAuth2
    {
        export class Provider
        {
            $type: ReflectionType
            id: string
            auth_uri: string
            parameters: {}
            authenticate(redirect_uri: string): void
        }
        export class Google extends Provider
        {
            constructor(parameters: {})
        }
        export class Microsoft extends Provider
        {
            constructor(parameters: {})
        }
        export class GitHub extends Provider
        {
            constructor(parameters: {})
        }
        export class LinkedIn extends Provider
        {
            constructor(parameters: {})
        }
    }
}

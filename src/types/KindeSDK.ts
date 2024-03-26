/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

/**
 * The Types SDK module.
 * @module SDK/Types
 * @version 1.2.2
 */

export type AdditionalParameters = {
    audience?: string;
    is_create_org?: boolean;
    org_code?: string;
    org_name?: string;
    connection_id?: string;
    login_hint?: string;
    lang?: string;
};

export type OrgAdditionalParams = Omit<AdditionalParameters, 'audience'>;

export type UserProfile = {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
    picture: string;
};

export type TokenResponse = {
    access_token: string;
    refresh_token: string;
    id_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
};

export type AccessTokenDecoded = {
    aud: string[];
    azp: string;
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    gty?: string[];
    scp?: string[];
} & Record<string, any>;

export type IdTokenDecoded = {
    sub: string;
    given_name: string;
    family_name: string;
    email: string;
    picture: string;
} & Record<string, any>;

export type OptionalFlag = {
    defaultValue?: string | boolean | number;
};

export type FeatureFlagType = 's' | 'b' | 'i';

export type FeatureFlagValue = string | boolean | number;

export type FeatureFlag = {
    v?: FeatureFlagValue; // v -> value
    t?: FeatureFlagType; // t -> type, s -> string, b -> boolean, i -> integer
};

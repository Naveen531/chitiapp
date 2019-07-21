
export class Constants {
    public static SERVER: any = {
        'ENVIRONMENTS': {
            0: 'staging',
            1: 'development',
            2: 'production'
        },
        'DEFAULT_ENVIRONMENT': 'development'
    };

    public static API_HEADER: any = {
        'Cache-Control': 'no-cache,no-store,max-age=0',
        'Content-type': 'application/json'
    };

    public static API_CONNECTION_TIMEOUT: number = 45 * 1000;
    public static APP_SERVICE_NAME = 'newitexpertservice';
    public static ACCESS_TOKEN_NAME = 'newitexpert.access_token';
    public static DEBUG = true;
    public static CACHE_EXPIRY_IN_MILLISECONDS = 30 * 60 * 1000;

    public static TNC_AGREE_STATUS = 'tnc_agree_status';




}

export class EnvironmentConstant {
    public static development: any = {
        baseUrl: 'http://localhost:8080',
        getToken: '/login',
        registerUser: '/sign-up',
        validToken: '/validToken',
        test: '/test',
        getChitiMembers: '/getChitiMembers',
        addChiti: '/addChiti',
        getChitis: '/getChitis',
        getChitisCount: '/getChitisCount',
        getChiti: '/getChiti'
    };


}

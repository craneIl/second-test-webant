import add_access_token from '../actions/add_access_token';

export default function addAccessToken( value ){
    return {
        type : add_access_token,
        value : value
    }
}
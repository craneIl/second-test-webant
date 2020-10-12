import delete_access_token from '../actions/delete_access_token';

export default function deleteAccessToken( ){
    return {
        type : delete_access_token,
    }
}
import api from '.';

export default async (id, isNew, isPopular, descriptions = 'default descriptions') => {
    try{
        await api.post('/api/photos', {
            new : isNew,
            popular : isPopular,
            description : descriptions ,
            image: 'api/media_objects/' + id,
        }, {
            headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('access_token')}`,
			},
        })
        return true;
    } catch(e){
        console.log(e, 'error');
        return false;
    }
}
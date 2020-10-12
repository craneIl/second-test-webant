import api from '.';

export default async (file) => {
    try{
        const formData = new FormData()
        formData.append('file', file)
        
        const fileUploadResponse = await api.post('/api/media_objects', formData,
        {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`,
            },
        })
        return fileUploadResponse.data.id 
    } catch(e){
        console.log(e, 'error');
    }
}
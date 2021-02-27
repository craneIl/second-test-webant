import api from '.'

export default async (email,phone,fullname,password,username,birthday) => {
    try{    
        const test = await api.post('/api/users', {
                email: email,
                phone: phone,
                fullName: fullname,
                password: password,
                username: username,
                birthday: birthday,
                roles : ['user'],
            }
        )
        console.log('test', test );
        return true;
    } catch{
        return false;
    }
}


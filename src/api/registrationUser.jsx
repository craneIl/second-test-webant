import api from '.'

export default async (email,phone,fullname,password,username,birthday) => {
    try{    
        await api.post('/api/users', {
                email: email,
                phone: phone,
                fullName: fullname,
                password: password,
                username: username,
                birthday: birthday,
                roles : ['user'],
            }
        )
        return true;
    } catch{
        return false;
    }
}


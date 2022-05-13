import Client from './index'


export const GetEventsByUserId = async (userId) => {
    try {
        const res = await Client.get(`event/${userId}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        throw error;
    }
}

export const CreateEvent = async (data) => {
    try {
        const res = await Client.post('events');
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error;
    }
}
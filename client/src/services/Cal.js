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

export const CreateEvent = async (event) => {
    try {
        const res = await Client.post('events', event);
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error;
    }
}
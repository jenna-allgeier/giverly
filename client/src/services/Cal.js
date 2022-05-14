import Client from './index'

export const GetAllEvents = async () => {
    try {
      const res = await Client.get("events");
      return res.data;
    } catch (error) {
      throw error;
    }
  };

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

export const UpdateEvent = async (eventId, event) => {
    try {
        const res = await Client.put(`event/${eventId}`, event);
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error;
    }
}
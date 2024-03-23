import axiosSecure from ".";
export const speechGet = async () =>{
    const {data} = await axiosSecure.get(`/speech`)
    return data;
  }
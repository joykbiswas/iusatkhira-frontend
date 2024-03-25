import axiosSecure from ".";
export const speechGet = async () =>{
    const {data} = await axiosSecure.get(`/speech`)
    return data;
}

export const advisoryBoardGet = async () =>{
    const {data} = await axiosSecure.get(`/advisoryBoard`)
    return data;
}

export const getAllDoctors = async () => {
    const response = await fetch(`${process.env.SERVER_URL}/doctors`)
    const data = await response.json();

    return data || [];
}

export const getDoctorByID = async (id) => {
    const response = await fetch(`${process.env.SERVER_URL}/doctor/${id}`)
    const data = await response.json();

    return data;
}
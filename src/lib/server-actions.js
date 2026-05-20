export const getAllDoctors = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`)
    const data = await response.json();

    return data || [];
}

export const getDoctorByID = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor/${id}`)
    const data = await response.json();

    return data;
}

export const getAppointmentsByEmail = async (email) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${email}`)
    const data = await response.json();

    return data || [];
}

export const getTopRatedDoctors = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-doctors`)
    const data = await response.json();

    return data || [];
}
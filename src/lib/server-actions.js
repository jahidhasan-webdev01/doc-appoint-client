export const getAllDoctors = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`)
    const data = await response.json();

    return data || [];
}

export const getDoctorByID = async (id, token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor/${id}`, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data;
};

export const getAppointmentsByEmail = async (email, token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${email}`, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
    const data = await response.json();

    return data || [];
}

export const getTopRatedDoctors = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-doctors`)
    const data = await response.json();

    return data || [];
}
export const fetchConToken = async (url, options = {}) => {
    const token = localStorage.getItem("token");
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(token && { Authorization: `Bearer ${token}` })
    };

    try {
        const response = await fetch(url, { 
            ...options, 
            headers 
        });
        
        if (response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
            return;
        }

        return response;
    } catch (error) {
        throw new Error("Error de conexión");
    }
};
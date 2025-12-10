const API_URL = import.meta.env.VITE_API_URL as string;
const TOKEN = (import.meta.env.VITE_API_TOKEN as string).trim();

export const getData = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!res.ok) {
      console.error(`Fetch error ${endpoint}: ${res.status}`);
      return null;
    }

    return res.json() as Promise<T>;
  } catch (err) {
    console.error("Network/Server error:", err);
    return null;
  }
};

export const postData = async <T>(endpoint: string, data: any): Promise<T | null> => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error(`Post error ${endpoint}: ${res.status}`);
      return null;
    }

    return res.json() as Promise<T>;
  } catch (err) {
    console.error("Network/Server error:", err);
    return null;
  }
};

export const putData = async <T>(endpoint: string, data: any): Promise<T | null> => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.error(`Put error ${endpoint}: ${res.status}`);
      return null;
    }

    return res.json() as Promise<T>;
  } catch (err) {
    console.error("Network/Server error:", err);
    return null;
  }
};

export const deleteData = async (endpoint: string): Promise<boolean> => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return res.ok;
  } catch (err) {
    console.error("Network/Server error:", err);
    return false;
  }
};
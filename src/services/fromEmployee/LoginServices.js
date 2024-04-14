export const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    return data; // Assuming the API returns the user data on successful login
  } catch (error) {
    throw error;
  }
};

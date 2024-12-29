export const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export const validateCredentials = (username: string, password: string): boolean => {
  return username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password;
};
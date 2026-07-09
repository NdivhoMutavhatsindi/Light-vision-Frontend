import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { getProfile as getProfileApi, login as loginApi, logout as logoutApi, updateProfile as updateProfileApi } from '../services/auth.service';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProfile = async () => {
    setLoading(true);
    try {
      const data = await getProfileApi();
      setUser(data?.admin || null);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginApi(credentials);
      setUser(data?.admin || null);
      return data;
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } finally {
      setUser(null);
      navigate({ to: '/admin/login' });
    }
  };

  const updateProfile = async (profileData) => {
    try {
      const data = await updateProfileApi(profileData);
      setUser(data?.admin || null);
      return data;
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Profile update failed');
      throw err;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// src/services/auth.service.js

import api from "./api";

export const login = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  const token = data?.data?.token;
  if (token) {
    localStorage.setItem("adminToken", token);
  }
  return data.data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout");
  localStorage.removeItem("adminToken");
  return data.data;
};

export const getProfile = async () => {
  try {
    const { data } = await api.get("/auth/me");
    return data.data;
  } catch (err) {
    // 401 is expected when user is not logged in
    if (err.response?.status === 401) {
      localStorage.removeItem("adminToken");
      return null;
    }
    throw err;
  }
};

export const updateProfile = async (profileData) => {
  const { profilePicture, ...updates } = profileData || {};
  const hasFile = Boolean(profilePicture);

  if (hasFile) {
    const formData = new FormData();

    Object.entries(updates).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    formData.append("profilePicture", profilePicture);

    const { data } = await api.put("/auth/me", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return data.data;
  }

  const { data } = await api.put("/auth/me", updates);
  return data.data;
};
const BACKEND_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://interim-assesment-fel-tsikata.onrender.com";

const API_BASE_URL = import.meta.env.DEV ? "/api" : BACKEND_URL;

async function apiRequest(path, options = {}) {
  const { method = "GET", body, token } = options;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    const message =
      result.message || result.error || "Request failed. Please try again.";
    throw new Error(message);
  }

  return result;
}

export const authApi = {
  register(payload) {
    return apiRequest("/auth/register", { method: "POST", body: payload });
  },
  login(payload) {
    return apiRequest("/auth/login", { method: "POST", body: payload });
  },
  profile(token) {
    return apiRequest("/profile", { method: "GET", token });
  },
};

export const cryptoApi = {
  getAll() {
    return apiRequest("/crypto");
  },
  getGainers() {
    return apiRequest("/crypto/gainers");
  },
  getNew() {
    return apiRequest("/crypto/new");
  },
  add(payload, token) {
    return apiRequest("/crypto", { method: "POST", body: payload, token });
  },
};

export { API_BASE_URL, BACKEND_URL };
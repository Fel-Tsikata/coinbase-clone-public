import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "@/lib/api";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/signin", { replace: true });
      return;
    }

    const loadProfile = async () => {
      try {
        const result = await authApi.profile(token);
        setProfile(result.data || null);
      } catch (err) {
        setError(err.message || "Unable to load profile.");
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    navigate("/signin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-gray-700">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => navigate("/signin")}
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full"
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Profile</h1>

        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Name:</span> {profile?.name || "-"}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile?.email || "-"}
          </p>
          <p>
            <span className="font-semibold">User ID:</span> {profile?._id || "-"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-full"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;
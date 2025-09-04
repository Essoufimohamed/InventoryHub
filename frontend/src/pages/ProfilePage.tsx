import { useEffect, useState } from "react";
import userProfil from "../assets/userProfile.png";
export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });
    const [passwords, setPasswords] = useState({
        newPassword: "",
        confirmPassword: "",
    });
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    // Define the primary color
    const PRIMARY_COLOR = "#A5C7FF"; // Your specified primary color

    // Fake user data (mock fetch)
    useEffect(() => {
        const fakeUser = {
            fullName: "John Doe",
            email: "john.doe@example.com",
            phone: "+212 612 345 678",
            address: "Agadir, Morocco",
            role: "Admin",
            // avatar: "https://via.placeholder.com/150/A5C7FF/ffffff?text=JD", // Placeholder with primary color
        };
        setUser(fakeUser);
        setFormData(fakeUser);
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    // Update profile (local only)
    const handleUpdateProfile = () => {
        setUser(formData);
        alert("✅ Profile updated locally!");
        setIsEditingProfile(false);
    };

    // Update password (local only)
    const handleUpdatePassword = () => {
        if (passwords.newPassword !== passwords.confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }
        alert("🔑 Password updated locally!");
        setPasswords({ newPassword: "", confirmPassword: "" });
        setIsEditingPassword(false);
    };

    if (!user)
        return <p className="text-center py-10 text-gray-600">Loading...</p>;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-8">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Profile Settings
                    </h2>
                    <span
                        className="text-sm px-4 py-2 rounded-full font-semibold"
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            color: "#333",
                        }}
                    >
                        {user.role}
                    </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Profile Card (Left Column) */}
                    <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-6 border border-gray-100 dark:border-gray-700">
                        <div
                            className="w-36 h-36 rounded-full flex items-center justify-center p-1"
                            style={{
                                background: `linear-gradient(45deg, ${PRIMARY_COLOR}, #6a9eff)`,
                            }}
                        >
                            <img
                                src={user?.avatar || userProfil}
                                alt="User Avatar"
                                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-inner"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {user.fullName}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            {user.email}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-md">
                            {user.address}
                        </p>
                    </div>

                    {/* Right Column for Forms */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Update Information */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Personal Information
                                </h3>
                                <button
                                    onClick={() =>
                                        setIsEditingProfile(!isEditingProfile)
                                    }
                                    className={`px-6 py-2 rounded-lg font-medium shadow-md transition-colors duration-200 ${
                                        isEditingProfile
                                            ? "bg-red-500 hover:bg-red-600 text-white"
                                            : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
                                    }`}
                                    style={
                                        !isEditingProfile
                                            ? { backgroundColor: PRIMARY_COLOR }
                                            : {}
                                    }
                                >
                                    {isEditingProfile
                                        ? "Cancel"
                                        : "Edit Details"}
                                </button>
                            </div>
                            <div className="space-y-5">
                                {/* Input Fields */}
                                {[
                                    {
                                        name: "fullName",
                                        placeholder: "Full Name",
                                        type: "text",
                                    },
                                    {
                                        name: "email",
                                        placeholder: "Email Address",
                                        type: "email",
                                    },
                                    {
                                        name: "phone",
                                        placeholder: "Phone Number",
                                        type: "text",
                                    },
                                    {
                                        name: "address",
                                        placeholder: "Address",
                                        type: "text",
                                    },
                                ].map((field) => (
                                    <input
                                        key={field.name}
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className={`w-full border-2 ${
                                            isEditingProfile
                                                ? `border-blue-300 focus:ring-blue-500`
                                                : "border-gray-200 dark:border-gray-600"
                                        } rounded-xl px-5 py-3 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                            !isEditingProfile &&
                                            "opacity-80 cursor-not-allowed"
                                        }`}
                                        disabled={!isEditingProfile}
                                        style={
                                            isEditingProfile
                                                ? {
                                                      borderColor:
                                                          PRIMARY_COLOR.replace(
                                                              "FF",
                                                              "DD"
                                                          ),
                                                  }
                                                : {}
                                        }
                                    />
                                ))}

                                {isEditingProfile && (
                                    <button
                                        onClick={handleUpdateProfile}
                                        className="w-full text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200 font-semibold text-lg"
                                        style={{
                                            backgroundColor: PRIMARY_COLOR,
                                        }}
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Change Password */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Security
                                </h3>
                                <button
                                    onClick={() =>
                                        setIsEditingPassword(!isEditingPassword)
                                    }
                                    className={`px-6 py-2 rounded-lg font-medium shadow-md transition-colors duration-200 ${
                                        isEditingPassword
                                            ? "bg-red-500 hover:bg-red-600 text-white"
                                            : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
                                    }`}
                                    style={
                                        !isEditingPassword
                                            ? { backgroundColor: PRIMARY_COLOR }
                                            : {}
                                    }
                                >
                                    {isEditingPassword
                                        ? "Cancel"
                                        : "Change Password"}
                                </button>
                            </div>
                            <div className="space-y-5">
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwords.newPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="New Password"
                                    className={`w-full border-2 ${
                                        isEditingPassword
                                            ? `border-blue-300 focus:ring-blue-500`
                                            : "border-gray-200 dark:border-gray-600"
                                    } rounded-xl px-5 py-3 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        !isEditingPassword &&
                                        "opacity-80 cursor-not-allowed"
                                    }`}
                                    disabled={!isEditingPassword}
                                    style={
                                        isEditingPassword
                                            ? {
                                                  borderColor:
                                                      PRIMARY_COLOR.replace(
                                                          "FF",
                                                          "DD"
                                                      ),
                                              }
                                            : {}
                                    }
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwords.confirmPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Confirm New Password"
                                    className={`w-full border-2 ${
                                        isEditingPassword
                                            ? `border-blue-300 focus:ring-blue-500`
                                            : "border-gray-200 dark:border-gray-600"
                                    } rounded-xl px-5 py-3 text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 transition-all duration-200 ${
                                        !isEditingPassword &&
                                        "opacity-80 cursor-not-allowed"
                                    }`}
                                    disabled={!isEditingPassword}
                                    style={
                                        isEditingPassword
                                            ? {
                                                  borderColor:
                                                      PRIMARY_COLOR.replace(
                                                          "FF",
                                                          "DD"
                                                      ),
                                              }
                                            : {}
                                    }
                                />
                                {isEditingPassword && (
                                    <button
                                        onClick={handleUpdatePassword}
                                        className="w-full text-white px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200 font-semibold text-lg"
                                        style={{
                                            backgroundColor: PRIMARY_COLOR,
                                        }}
                                    >
                                        Update Password
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config"
import { logout } from "../../store/authSlice";

function LogoutBtn(){

    const dispatch = useDispatch();
    const logoutHandler = async () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    return(
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Logout
        </button>
    )   
}

export default LogoutBtn;
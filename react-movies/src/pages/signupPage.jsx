import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const SignupPage = () => {
    const context = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        const result = await context.register(username, password);
        if (result.success) {
            navigate("/login");
        }
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 2 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
                Sign Up
            </Typography>
            <TextField
                label="Username"
                fullWidth
                sx={{ mb: 2 }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                sx={{ mb: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSignup}>
                Sign Up
            </Button>
        </Box>
    );
};

export default SignupPage;
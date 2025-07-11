"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        const userString = localStorage.getItem("user");
        const userObject = userString ? JSON.parse(userString) : null;

        localStorage.setItem("user", JSON.stringify({
            ...userObject,
            username: username,
            password: password
        }));

        router.push("/signin");
    
    }

        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <label>
                        Username:
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                </div>
                <button onClick={handleSignIn}>Sign Up</button>
                <button onClick={() => router.push("/signin")}>Sign In</button>
            </div>
        )
    

    
}

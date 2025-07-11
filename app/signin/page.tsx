"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        const storedUser = localStorage.getItem("user");
        const userObject = storedUser ? JSON.parse(storedUser) : null;

        if(userObject.username === username && userObject.password === password) {
            router.push("/game");
        }else{
            alert("Invalid username or password");
        }
    }

        return(
            <div>
                <h1>Sign In</h1>
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
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={() => router.push("/signup")}>Sign Up</button>
            </div>
        )

    


}

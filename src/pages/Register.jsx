import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {


    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)




            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',

                (error) => {
                    setErr(true)
                },
                () => {


                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                    });
                }
            );
        }
        catch {
            setErr(true);
        }


    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>GenZ Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' name="" id="" />
                    <input type="email" placeholder='email' name="" id="" />
                    <input type="password" placeholder='password' name="" id="" />
                    <input style={{ display: 'none' }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt='' />
                        <span>Add and Avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have a account? Login</p>
            </div>
        </div>
    )
}

export default Register

import {FC, useContext} from 'react';
import {Dialog} from "../../ui/Dialog/Dialog.tsx";
import {AuthContext} from "../../../context/AuthProvider.tsx";

export const Auth: FC = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        return null;
    }

    return (
        <>
            <Dialog
                title="Login"
                actionLabel="Log In"
                onAction={authContext.handleLoginAction}
                trigger={<button className="text-blue-500">Login</button>}
            >
                <p>Enter your credentials to log in.</p>
                {/* Add login user-form or other content here */}
            </Dialog>
            <Dialog
                title="Register"
                actionLabel="Register"
                onAction={authContext.handleRegisterAction}
                trigger={<button className="text-blue-500">Register</button>}
            >
                <p>Create a new account.</p>
                {/* Add registration user-form or other content here */}
            </Dialog>
        </>
    );
}
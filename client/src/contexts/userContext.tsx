import { createContext } from "react";

export interface IUserContext {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const userContext = createContext<null | IUserContext>(null);

export default userContext
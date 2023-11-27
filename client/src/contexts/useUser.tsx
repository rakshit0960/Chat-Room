import { useContext } from "react";
import userContext, { IUserContext } from "./userContext";

export default function useUser(): IUserContext {
    const value = useContext(userContext);
    if (!value) throw new Error('vale of userContext cannot be null')
    return value;
}
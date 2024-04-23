import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUsers";

const UserContext = createContext();

export function UserProvider({ children }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  if (isLoading) return <p>Loading...</p>;

  const user = isError ? null : data;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside the UserProvider");
  return context;
}

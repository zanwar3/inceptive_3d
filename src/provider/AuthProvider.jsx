// import { LocalStorageService } from "@/services";
import { useState, useContext, createContext, useEffect } from "react";

const AuthStateContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    status: "pending",
    error: null,
    user: null,
  });

  const getUser = async () => {
    const user = await LocalStorageService.getUser();
    return user;
  };

  useEffect(() => {
    getUser().then(
      (user) => setState({ status: "success", error: null, user }),
      (error) => setState({ status: "error", error, user: null })
    );
  }, []);

  return (
    <AuthStateContext.Provider value={state}>
      {state.status === "pending" ? (
        "Loading..."
      ) : state.status === "error" ? (
        <div>
          Oh no
          <div>
            <pre>{state.error.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const state = useContext(AuthStateContext);
  if (!state) throw new Error("useAuthState must be used in AuthProvider");
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
};

export { AuthProvider, useAuthState };

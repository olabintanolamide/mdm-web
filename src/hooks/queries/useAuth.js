import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";
import Auth from "../../utils/auth";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    ({ payload }) => loginService({ payload }),
    {
      onSuccess: (data) => {
        Auth.setToken(data?.access);
        Auth.setRefreshToken(data?.refresh);
        navigate("/admin/dashboard");
      },
      onError: (error) => {
        console.log(error?.message);
      },
    }
  );

  return {
    loginMutate: mutate,
    isSigningIn: isLoading,
  };
};

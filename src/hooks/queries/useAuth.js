import { useMutation } from "react-query";
import { loginService } from "../../services/authService";
import Auth from "../../utils/auth";

export const useLogin = () => {
  const { mutate, isLoading } = useMutation(({ payload }) => loginService({ payload }), {
    onSuccess: (data) => {
      Auth.setToken(data?.access)
      Auth.setRefreshToken(data?.refresh)
    },
    onError: (error) => {
      console.log(error?.message)
    }
  })

  return {
    loginMutate: mutate,
    isSigningIn: isLoading
  }
}

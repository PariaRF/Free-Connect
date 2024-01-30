import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout(){
    const queryClinet = useQueryClient();
    const navigate = useNavigate();

   const {isPending , mutate: logout} = useMutation({
        mutationFn: logoutApi,

        onSuccess:()=> {
            queryClinet.removeQueries()
            navigate("/auth", {replace: true})
        },
    })

    return {isPending, logout}
}
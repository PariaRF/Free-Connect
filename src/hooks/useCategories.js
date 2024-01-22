import { useQuery } from "@tanstack/react-query";
import { getCategoryAPI } from "../services/categoryService";

export default function useCategories(){
   const {data, isLoading} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryAPI,
    })

    const {categories : rawCategories = []} = data || [];

    const transformCategories = rawCategories.map(item => ({
        label: item.title,
        value: item._id,
    }))

    const categories = rawCategories.map(item => ({
        label: item.title,
        value: item.englishTitle,
    }))

    return{ isLoading, transformCategories, categories }
}
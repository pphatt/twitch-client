import { queryClient } from "@/providers/tanstack-persist-provider"
import { useQuery } from "@tanstack/react-query"

export const useStorageQuery = <T>(queryKey: string, initialData?: T) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [queryKey],
    queryFn: (): T | undefined => {
      const cachedData = queryClient.getQueryData<T | undefined>([queryKey])
      // const cache = queryClient.getQueryCache()
      // console.log(cache)

      if (cachedData) {
        return cachedData
      }

      return initialData
    },
  })

  const setData = (data: T) => {
    queryClient.setQueryData([queryKey], () => data)
  }

  return { data, setData, isLoading, isError, error }
}

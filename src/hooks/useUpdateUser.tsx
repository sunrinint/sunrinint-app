import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@lib/api/user';
import User, { UpdateUser } from '@lib/type/User';

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: UpdateUser) => updateUser(data),
    onMutate: async (data) => {
      await queryClient.cancelQueries({
        queryKey: ['user'],
      });
      const previousData = queryClient.getQueryData(['user']);
      queryClient.setQueryData(['user'], (old: User) => {
        return {
          ...old,
          ...data,
        };
      });
      return { previousData };
    },
  });
  return {
    updateUser: mutation.mutate,
  };
};

export default useUpdateUser;

import { useQuery } from '@tanstack/vue-query'
import type { UserProfile } from '../types'

const fetchUserProfile = async (): Promise<UserProfile> => {
 
  await new Promise(resolve => setTimeout(resolve, 1000))

  return {
    id: 1,
    name: 'João Silva',
    email: 'joao.silva@example.com',
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
}

export function useUserProfile() {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    staleTime: 5 * 60 * 1000, 
  })
}

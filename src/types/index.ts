export interface MenuItem {
  icon: string
  label: string
  route: string
}

export interface UserProfile {
  id: number
  name: string
  email: string
  avatar?: string
}

export interface ThemeConfig {
  isDark: boolean
}

import { ref, watch, onMounted } from 'vue'

const isDarkMode = ref(false)

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    updateTheme()
  }

  const updateTheme = () => {
    const html = document.documentElement

    html.classList.toggle('dark', isDarkMode.value)

    const themeLinkId = 'primevue-theme-link'
    let themeLink = document.getElementById(themeLinkId) as HTMLLinkElement | null

    if (!themeLink) {
      themeLink = document.createElement('link')
      themeLink.id = themeLinkId
      themeLink.rel = 'stylesheet'
      document.head.appendChild(themeLink)
    }

    themeLink.href = isDarkMode.value
      ? 'https://unpkg.com/primevue/resources/themes/aura-dark-blue/theme.css'
      : 'https://unpkg.com/primevue/resources/themes/aura-light-blue/theme.css'

    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  }


  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    updateTheme()
  }

  onMounted(() => {
    initTheme()
  })

  watch(isDarkMode, () => {
    updateTheme()
  })

  return {
    isDarkMode,
    toggleTheme,
    initTheme
  }
}

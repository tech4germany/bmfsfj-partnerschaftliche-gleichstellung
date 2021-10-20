import { contentFunc } from '@nuxt/content/types/content'

export type Module = {
  id: string
  color: string
  color2: string
  icon: string
}

export async function getModules($content: contentFunc): Promise<Module[]> {
  const content = await $content(`modules`).fetch<{ body: Module[] }>()

  if (Array.isArray(content))
    throw new TypeError('Unexpected array for modules')

  return content.body
}

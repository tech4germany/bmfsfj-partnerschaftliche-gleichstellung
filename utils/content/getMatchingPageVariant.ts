export const getMatchingLanguageVariant = async (
  fetcher: (page: string) => Promise<unknown>,
  page: string,
  localesToTry: string[]
) => {
  for (const locale of localesToTry) {
    try {
      const content = await fetcher(`${locale}/${page}`)

      if (
        content &&
        (!(content as unknown[]).length == null ||
          (content as unknown[]).length > 0)
      ) {
        return content
      }

      throw new Error(`No translation for ${page} in ${locale}`)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn(`No translation for ${page} in ${locale}.`)
    }
  }

  throw new Error(
    `Page not found in any fitting translation: ${page}, tried locales: ${localesToTry}`
  )
}

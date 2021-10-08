import { File, IContentDocument } from "@nuxt/content/types/content";

export type TaskContentProperties = {
  title: string,
  category: string[]
}
export type TaskContentDocument = File & IContentDocument & TaskContentProperties

export type AdditionalTaskContentProperties = {
  title: string
}
export type AdditionalTaskContentDocument = File & IContentDocument & AdditionalTaskContentProperties

export type TaskContent = File & {
  title: string,
  category: string[],
  pages: AdditionalTaskContentDocument[],
}

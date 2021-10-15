import { File, IContentDocument } from "@nuxt/content/types/content"

export type Category = string;

export type User = {
  name: string
}

export type TaskContent = {
  title: string;
  document?: File & IContentDocument;
} | {
  title: string;
  description?: String;
}

export type Task = TaskContent & {
  id: string;
  modules: Category[];
}

export type UserTask = Task & {
  finished: boolean;
  assignees: User[];
}

export type TaskPageContent = {
  title: string;
  document?: File & IContentDocument;
}

export function isContentDocumentAFile(content: IContentDocument): content is IContentDocument & File {
  return 'data' in content;
}

export function isContentDocumentATask(content: IContentDocument): content is IContentDocument & {
  id: string,
  title: string,
  modules: string[]
} {
  return'id' in content && typeof content.id === 'string'
    && 'title' in content && typeof content.title === 'string'
    && 'modules' in content && Array.isArray(content.modules);
}

export function contentDocumentToTask(content: IContentDocument): Task {
  if (!isContentDocumentATask(content)) throw new Error('Non task content document');

  return {
    document: content as unknown as IContentDocument & File,
    id: content.id,
    title: content.title,
    modules: content.modules
  }
}

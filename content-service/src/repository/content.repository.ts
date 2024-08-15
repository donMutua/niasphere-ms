import { ContentRepositoryType } from "../types/repository.type";

const createContent = async (input: any): Promise<{}> => {
  return Promise.resolve({
    message: "fake response from content repository",
    input,
  });
};

const findContent = async (input: any): Promise<{}> => {
  return Promise.resolve({});
};

const updateContent = async (input: any): Promise<{}> => {
  return Promise.resolve({});
};

const deleteContent = async (input: any): Promise<{}> => {
  return Promise.resolve({});
};

export const ContentRepository: ContentRepositoryType = {
  create: createContent,
  find: findContent,
  update: updateContent,
  delete: deleteContent,
};

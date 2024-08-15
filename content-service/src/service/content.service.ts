import { ContentRepositoryType } from "../types/repository.type";

export const CreateContent = async (
  input: any,
  repo: ContentRepositoryType
) => {
  const data = await repo.create(input);
  return data;
};

export const GetContent = async (input: any, repo: ContentRepositoryType) => {
  const data = await repo.find(input);
  return data;
};

export const UpdateContent = async (
  input: any,
  repo: ContentRepositoryType
) => {
  const data = await repo.update(input);
  return data;
};

export const DeleteContent = async (
  input: any,
  repo: ContentRepositoryType
) => {
  const data = await repo.delete(input);
  return data;
};

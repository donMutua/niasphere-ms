import { ContentRepositoryType } from "../types/repository.type";
import * as Repository from "../repository/content.repository";
import { CreateContent } from "./content.service";

describe("contentService", () => {
  let repo: ContentRepositoryType;

  beforeEach(() => {
    repo = Repository.ContentRepository;
  });

  afterEach(() => {
    repo = {} as ContentRepositoryType;
  });

  it("should create content", async () => {
    const input = {
      title: "test",
      description: "test",
      body: "test",
    };

    jest.spyOn(repo, "create").mockImplementationOnce(() => {
      return Promise.resolve({
        message: "fake response from content repository",
        input,
      });
    });

    const result = await CreateContent(input, repo);
    expect(result).toEqual({
      message: "fake response from content repository",
      input,
    });
  });
});

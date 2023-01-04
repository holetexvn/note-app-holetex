import { graphQLRequest } from './request';

export const foldersLoader = async () => {
  const query = `query Folders {
    folders {
      id
      name
      createdAt
    }
  }`;

  const data = await graphQLRequest({ query });
  return data;
};

export const addNewFolder = async (newFolder) => {
  const query = `mutation Mutation($name: String!) {
    addFolder(name: $name) {
      name
      author {
        name
      }
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: { name: newFolder.name },
  });

  return data;
};

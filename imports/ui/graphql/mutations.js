import gql from 'graphql-tag';

export const TEST_MUTATION = gql`
  mutation testMutation($values: TeaserLinkInput!) {
    testMutation(input: $values) {
      url
      name
      isShop
      isSession
      visible
    }
  }
`;

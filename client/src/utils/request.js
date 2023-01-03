import { GRAPHQL_SERVER, GRAPHQL_SUBSCRIPTION_ENDPOINT } from './constants';
import { SubscriptionClient } from 'graphql-subscriptions-client';
import { createClient } from 'graphql-ws';

const client = createClient({
  url: 'ws://localhost:4000/graphql',
});

export async function execute(payload) {
  return new Promise((resolve, reject) => {
    let result;
    client.subscribe(payload, {
      next: (data) => (result = data),
      error: reject,
      complete: () => resolve(result),
    });
  });
}
export const graphQLRequest = async (payload, options = {}) => {
  if (localStorage.getItem('accessToken')) {
    const res = await fetch(`${GRAPHQL_SERVER}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        ...options,
      },
      body: JSON.stringify(payload),
    });

    const { data } = await res.json();
    return data;
  }
};

// export const graphqlSubscriptionRequest = new SubscriptionClient(
//   GRAPHQL_SUBSCRIPTION_ENDPOINT,
//   {
//     reconnect: true,
//     lazy: true, // only connect when there is a query
//     connectionCallback: (error) => {
//       error && console.error(error);
//     },
//   }
// );

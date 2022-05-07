// api https://api-sa-east-1.graphcms.com/v2/cl2wb8fn61q2p01wbhuk6ggs4/master

import { readable } from 'svelte/store';
import { GraphQLClient } from 'graphql-request';
const cms = new GraphQLClient(
	'https://api-sa-east-1.graphcms.com/v2/cl2wb8fn61q2p01wbhuk6ggs4/master'
);

const query = `
query Album {
  album(where: {id: "cl2wbh6k54m4s0bloufabj4ek"}) {
      artist
      title
      cover {
        url
      }
      back {
        url
      }
      songs {
        title
        file {
          url
        }
      }
    }
} `;

export let album = readable({}, (set) => {
	cms.request(query).then((res) => set(res.album));

	return () => {};
});
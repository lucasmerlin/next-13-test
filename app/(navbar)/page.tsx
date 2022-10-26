import {graphql} from "../../lib/gql";
import {Client} from "@urql/core";
import { use } from "react";
import Image from "next/image";

const client = new Client({
  url: "https://hellopaint.io/api/gateway/graphql",
});


const galleryQuery = graphql(/* GraphQL */`
  query GalleryPosts {
      galleryPosts(query: {limit: 30}) {
          id
          title
          imageUrl
      }
  }
`)

const load = async () => {
  return client.query(galleryQuery, {}).toPromise();
}


export default function Home() {

  const data = use(load());

  return (<>

      <div className="prose m-6">
        <h1>Top Posts this Week</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {data.data?.galleryPosts.map(post => ((
          <div className="card w-96 bg-base-100 shadow-xl m-6" key={post.id}>
            <figure className="h-96 relative object-cover">
              <Image className="object-cover" src={post.imageUrl!} alt="Post Image" fill />
            </figure>
            <div className="card-body">
              <div className="card-title">
                {post.title}
              </div>
            </div>
          </div>)))}
      </div>
    </>
  )
}

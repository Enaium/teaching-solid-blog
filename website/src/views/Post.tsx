import { useParams } from "@solidjs/router"
import { createQuery } from "@tanstack/solid-query"
import { api } from "../common/ApiInstance"
import { Match, Switch } from "solid-js"
import Replys from "../components/Replys"

const Post = () => {
  const params = useParams()

  const post = createQuery({
    queryKey: () => ["post", params.id],
    queryFn: () => api.postController.findPost({ id: params.id })
  })

  return (
    <div>
      <Switch>
        <Match when={post.isLoading}>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </Match>
        <Match when={post.isError}>Error</Match>
        <Match when={post.isSuccess}>
          <div>{post.data.title}</div>
          <div>{post.data.category.name}</div>
          <div>{post.data.content}</div>
        </Match>
      </Switch>
      <Replys postId={params.id} />
    </div>
  )
}

export default Post

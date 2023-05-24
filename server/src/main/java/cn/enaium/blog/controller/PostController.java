package cn.enaium.blog.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.enaium.blog.model.entity.CategoryFetcher;
import cn.enaium.blog.model.entity.Post;
import cn.enaium.blog.model.entity.PostDraft;
import cn.enaium.blog.model.entity.PostFetcher;
import cn.enaium.blog.model.entity.input.PostInput;
import cn.enaium.blog.repository.PostRepository;
import lombok.AllArgsConstructor;
import org.babyfish.jimmer.client.FetchBy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * @author Enaium
 */
@RestController
@AllArgsConstructor
public class PostController {

    private final PostRepository repository;

    @PutMapping("/posts/")
    @ResponseStatus(HttpStatus.OK)
    public void createPost(@RequestBody PostInput postInput) {
        repository.insert(PostDraft.$.produce(draft -> {
            draft.setUserId(UUID.fromString(StpUtil.getLoginIdAsString()));
            draft.setTitle(postInput.getTitle());
            draft.setContent(postInput.getContent());
            draft.setCategoryId(postInput.getCategoryId());
        }));
    }

    @GetMapping("/posts/")
    public Page<@FetchBy("DEFAULT_POST") Post> findPosts(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return repository.findAll(PageRequest.of(page, size), DEFAULT_POST);
    }

    @GetMapping("/posts/{id}")
    public @FetchBy("FULL_POST") Post findPost(@PathVariable UUID id) {
        return repository.findNullable(id, FULL_POST);
    }

    @GetMapping("/categories/{categoryId}/posts/")
    public Page<@FetchBy("DEFAULT_POST") Post> findPostsByCategory(@PathVariable UUID categoryId, @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return repository.findAllByCategoryId(PageRequest.of(page, size), categoryId, DEFAULT_POST);
    }

    public static final PostFetcher DEFAULT_POST = PostFetcher.$
            .allScalarFields()
            .content(false)
            .category(
                    CategoryFetcher.$
                            .allScalarFields()
            );
    public static final PostFetcher FULL_POST = PostFetcher.$
            .allScalarFields()
            .category(
                    CategoryFetcher.$
                            .allScalarFields()
            );
}

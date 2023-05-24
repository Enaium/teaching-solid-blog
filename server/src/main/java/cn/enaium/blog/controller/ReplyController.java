package cn.enaium.blog.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.enaium.blog.model.entity.Reply;
import cn.enaium.blog.model.entity.ReplyDraft;
import cn.enaium.blog.model.entity.ReplyFetcher;
import cn.enaium.blog.model.entity.UserFetcher;
import cn.enaium.blog.model.entity.input.ReplyInput;
import cn.enaium.blog.repository.ReplyRepository;
import lombok.AllArgsConstructor;
import org.babyfish.jimmer.client.FetchBy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * @author Enaium
 */
@RestController
@AllArgsConstructor
public class ReplyController {

    private final ReplyRepository replyRepository;

    @PutMapping("/replies/")
    public void createReply(@RequestBody ReplyInput replyInput) {
        replyRepository.insert(ReplyDraft.$.produce(draft -> {
            draft.setUserId(UUID.fromString(StpUtil.getLoginIdAsString()));
            draft.setContent(replyInput.getContent());
            draft.setPostId(replyInput.getPostId());
        }));
    }

    @GetMapping("/posts/{postId}/replies/")
    public Page<@FetchBy("DEFAULT_REPLY") Reply> findRepliesByPost(@PathVariable UUID postId, @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "10") Integer size) {
        return replyRepository.findAllByPostId(PageRequest.of(page, size), postId, DEFAULT_REPLY);
    }

    public static final ReplyFetcher DEFAULT_REPLY = ReplyFetcher.$.allScalarFields().user(UserFetcher.$.username());
}

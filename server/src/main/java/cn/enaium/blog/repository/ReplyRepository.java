package cn.enaium.blog.repository;

import cn.enaium.blog.model.entity.Reply;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author Enaium
 */
@Repository
public interface ReplyRepository extends JRepository<Reply, UUID> {
    Page<Reply> findAllByPostId(Pageable pageable, UUID postId, Fetcher<Reply> fetcher);
}

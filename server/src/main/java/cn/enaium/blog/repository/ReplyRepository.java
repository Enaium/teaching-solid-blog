package cn.enaium.blog.repository;

import cn.enaium.blog.model.entity.Reply;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author Enaium
 */
@Repository
public interface ReplyRepository extends JRepository<Reply, UUID> {
}

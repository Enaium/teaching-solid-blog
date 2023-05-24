package cn.enaium.blog.repository;

import cn.enaium.blog.model.entity.Post;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author Enaium
 */
@Repository
public interface PostRepository extends JRepository<Post, UUID> {
}

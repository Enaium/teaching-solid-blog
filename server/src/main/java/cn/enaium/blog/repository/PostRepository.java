package cn.enaium.blog.repository;

import cn.enaium.blog.model.entity.Post;
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
public interface PostRepository extends JRepository<Post, UUID> {
    Page<Post> findAllByCategoryId(Pageable pageable, UUID categoryId, Fetcher<Post> fetcher);
}

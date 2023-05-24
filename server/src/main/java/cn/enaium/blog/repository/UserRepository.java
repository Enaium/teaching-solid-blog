package cn.enaium.blog.repository;

import cn.enaium.blog.model.entity.User;
import org.babyfish.jimmer.spring.repository.JRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author Enaium
 */
@Repository
public interface UserRepository extends JRepository<User, UUID> {
    User findByUsername(String username);
}

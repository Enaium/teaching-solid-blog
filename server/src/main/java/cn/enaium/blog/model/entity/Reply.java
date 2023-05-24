package cn.enaium.blog.model.entity;

import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.GeneratedValue;
import org.babyfish.jimmer.sql.Id;
import org.babyfish.jimmer.sql.Table;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import org.jetbrains.annotations.NotNull;

import java.util.UUID;

/**
 * @author Enaium
 */
@Entity
@Table(name = "reply")
public interface Reply {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    UUID userId();

    UUID postId();

    @NotNull
    String content();
}

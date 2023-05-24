package cn.enaium.blog.model.entity;

import org.babyfish.jimmer.sql.*;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

/**
 * @author Enaium
 */
@Entity
@Table(name = "post")
public interface Post {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    UUID userId();

    UUID categoryId();
    @ManyToOne
    Category category();

    @NotNull
    String title();

    @NotNull
    String content();
}

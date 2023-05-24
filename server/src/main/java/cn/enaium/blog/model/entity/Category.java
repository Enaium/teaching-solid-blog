package cn.enaium.blog.model.entity;

import org.babyfish.jimmer.sql.*;
import org.babyfish.jimmer.sql.meta.UUIDIdGenerator;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.UUID;

/**
 * @author Enaium
 */
@Entity
@Table(name = "category")
public interface Category {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @NotNull
    String name();

    @OneToMany(mappedBy = "category")
    List<Post> posts();
}

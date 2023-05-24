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
@Table(name = "user")
public interface User {
    @Id
    @GeneratedValue(generatorType = UUIDIdGenerator.class)
    UUID id();

    @NotNull
    String username();

    @NotNull
    String password();

    @OneToMany(mappedBy = "user")
    List<Reply> replies();
}

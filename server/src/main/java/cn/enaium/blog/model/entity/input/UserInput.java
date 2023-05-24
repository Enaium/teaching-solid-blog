package cn.enaium.blog.model.entity.input;

import lombok.Data;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

/**
 * @author Enaium
 */
@Data
public class UserInput {
    @Nullable
    private final UUID id;
    @Nullable
    private final String username;
    @Nullable
    private final String password;
}

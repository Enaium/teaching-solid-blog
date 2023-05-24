package cn.enaium.blog.model.entity.input;

import lombok.Data;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

/**
 * @author Enaium
 */
@Data
public class ReplyInput {
    @Nullable
    private final UUID id;

    @Nullable
    private final UUID userId;

    @Nullable
    private final UUID postId;

    @Nullable
    private final String content;
}

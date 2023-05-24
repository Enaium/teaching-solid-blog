package cn.enaium.blog.model.entity.input;

import lombok.Data;
import org.jetbrains.annotations.Nullable;

import java.util.UUID;

/**
 * @author Enaium
 */
@Data
public class PostInput {
    @Nullable
    private final UUID id;
    @Nullable
    private final String title;
    @Nullable
    private final String content;
    @Nullable
    private final UUID categoryId;
}

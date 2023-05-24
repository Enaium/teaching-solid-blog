package cn.enaium.blog.model.response;

import lombok.Data;

import java.util.UUID;

/**
 * @author Enaium
 */
@Data
public class LoginResponse {
    private final String token;
    private final UUID id;
}

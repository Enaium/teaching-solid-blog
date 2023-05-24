package cn.enaium.blog.controller;

import cn.dev33.satoken.stp.StpUtil;
import cn.enaium.blog.model.entity.input.UserInput;
import cn.enaium.blog.model.response.LoginResponse;
import cn.enaium.blog.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Enaium
 */
@RestController
@AllArgsConstructor
public class SessionController {

    private final UserRepository userRepository;

    @PutMapping("/sessions/")
    public LoginResponse login(@RequestBody UserInput userInput) {
        final var user = userRepository.findByUsername(userInput.getUsername());
        if (user == null) {
            throw new NullPointerException("User not found");
        }
        if (!user.password().equals(userInput.getPassword())) {
            throw new IllegalArgumentException("Password error");
        }

        return new LoginResponse(StpUtil.createLoginSession(user.id()), user.id());
    }

    @DeleteMapping("/sessions/")
    public void logout() {
        StpUtil.logout();
    }
}

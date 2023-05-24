package cn.enaium.blog.controller;

import cn.enaium.blog.model.entity.UserDraft;
import cn.enaium.blog.model.entity.input.UserInput;
import cn.enaium.blog.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Enaium
 */
@RestController
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @PutMapping("/users/")
    @ResponseStatus(HttpStatus.OK)
    public void register(@RequestBody UserInput userInput) {

        if (userRepository.findByUsername(userInput.getUsername()) != null) {
            throw new IllegalArgumentException("User already exists");
        }

        userRepository.insert(UserDraft.$.produce(draft -> {
            draft.setUsername(userInput.getUsername());
            draft.setPassword(userInput.getPassword());
        }));
    }
}

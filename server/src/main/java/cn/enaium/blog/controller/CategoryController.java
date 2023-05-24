package cn.enaium.blog.controller;

import cn.enaium.blog.model.entity.Category;
import cn.enaium.blog.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Enaium
 */
@RestController
@AllArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @GetMapping("/categories/")
    public List<Category> findCategories() {
        return categoryRepository.findAll();
    }
}

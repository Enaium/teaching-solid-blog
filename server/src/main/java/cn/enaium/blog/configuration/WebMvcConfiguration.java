package cn.enaium.blog.configuration;

import cn.enaium.blog.interceptor.CorsInterceptor;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Enaium
 */
@Configuration
@AllArgsConstructor
public class WebMvcConfiguration implements WebMvcConfigurer {
    private final CorsInterceptor corsInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(corsInterceptor);
    }
}

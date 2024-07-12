package com.appvenir.hometrest.web.pages;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.autoconfigure.thymeleaf.ThymeleafAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.appvenir.hometrest.auth.provider.JpaAuthenticationProvider;
import com.appvenir.hometrest.auth.service.UserAuthService;
import com.appvenir.hometrest.filter.exception.GlobalExceptionFilter;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@SpringBootTest(classes = {com.appvenir.hometrest.web.pages.Login.class})
@ImportAutoConfiguration(ThymeleafAutoConfiguration.class)
@ExtendWith({MockitoExtension.class, SpringExtension.class})
// @WebMvcTest(controllers = Login.class)
public class LoginTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    private MockMvc mockMvc;

    @MockBean
    private GlobalExceptionFilter globalExceptionFilter;

    @MockBean
    private JpaAuthenticationProvider jpaAuthenticationProvider;

    @MockBean
    private UserAuthService userAuthService;

    @MockBean
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testRenderLoginPage() throws Exception {
        mockMvc.perform(get("/login"))
                        .andExpect(status().isOk())
                        .andExpect(view().name("login"))
                        .andExpect(model().attributeExists("title"))
                        .andExpect(model().attributeExists("userLogin"));
    }

    // @Test
    // @WithMockUser(username = "", password = "", roles = "USER")
    // public void testValidationExceptionOnEmptyFields() throws Exception {

    //     String email = "";
    //     String password = "";

    //     mockMvc.perform(post("/login")
    //             .param("email", email)
    //             .param("password", password))
    //             .andExpect(status().is3xxRedirection())
    //             .andExpect(redirectedUrl("/login?emailError=&passwordError="));
    // }
    
}

package com.example.springblogexample;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class SpringBlogExampleApplicationTests {

	@Test
	void contextLoads() {
		SpringBlogExampleApplication.main(new String[]{});
		Assertions.assertTrue(true);
	}

}

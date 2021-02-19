package com.zaksim.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/error")
public class CustomErrorController implements ErrorController {

	@RequestMapping("")
	public String handleError() {
		return "/index.html";
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}

} 
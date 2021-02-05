package com.zaksim.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zaksim.model.BasicResponse;
import com.zaksim.model.Notice;
import com.zaksim.model.User;
import com.zaksim.model.service.JwtService;
import com.zaksim.model.service.UserService;

import io.swagger.annotations.ApiOperation;

// http://localhost:8000/swagger-ui.html
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/user")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/login")
    @ApiOperation(value = "로그인")
    public Object userlogin(@RequestParam(required = true) final String email,
    		@RequestParam(required = true) final String password) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        User loginData = new User();
        loginData.setEmail(email);
        loginData.setPassword(password);
        
        User user = userService.userlogin(loginData);
        if(user != null) {
        	result.data = "success";
            result.message = "회원 정보를 불러옵니다.";
            result.object = user;
        }else {
        	result.data = "fail";
			result.message = "일치하는 회원 정보가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/info")
    @ApiOperation(value = "회원정보")
    public Object userinfo(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        User user = userService.userinfo(userId);
        if(user != null) {
        	result.data = "success";
            result.message = "회원 정보를 불러옵니다.";
            result.object = user;
        }else {
        	result.data = "fail";
			result.message = "일치하는 회원 정보가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/signup")
    @ApiOperation(value = "회원가입")
    public Object usersignup(@RequestBody(required = true) final User user) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(userService.usersignup(user)) {
        	result.data = "success";
            result.message = "회원가입에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "회원가입에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/update")
    @ApiOperation(value = "회원정보 변경")
    public Object userupdate(@RequestBody(required = true) final User user) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(userService.userupdate(user)) {
        	result.data = "success";
            result.message = "회원정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "회원정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete")
    @ApiOperation(value = "회원탈퇴")
    public Object userdelete(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(userService.userdelete(userId)) {
        	result.data = "success";
            result.message = "회원탈퇴에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "회원탈퇴에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	
	@GetMapping("/notice")
    @ApiOperation(value = "알림 목록")
    public Object noticelist(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Notice> list = userService.noticelist(userId);
        if(list != null) {
        	result.data = "success";
            result.message = "알림 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "알림이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/notice/insert")
    @ApiOperation(value = "알림 전송")
    public Object noticeinsert(@RequestBody(required = true) final Notice notice) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(userService.noticeinsert(notice)) {
        	result.data = "success";
            result.message = "알림 전송에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "알림 전송에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/notice/update")
    @ApiOperation(value = "알림 읽기")
    public Object noticeupdate(@RequestBody(required = true) final Notice notice) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(userService.noticeupdate(notice)) {
        	result.data = "success";
            result.message = "알림을 읽는데 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "알림을 읽는데 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
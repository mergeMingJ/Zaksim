package com.web.curation.controller.account;

import java.util.Optional;

import javax.validation.Valid;

import com.web.curation.dao.user.UserDao;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.user.AuthenticationRequest;
import com.web.curation.model.user.SignupRequest;
import com.web.curation.model.user.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;

import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

// 회원 계정 관련 Controller
public class AccountController {

    @Autowired
    UserDao userDao;

    @GetMapping("/account/login")
    @ApiOperation(value = "로그인")
    public Object login(@RequestParam(required = true) final String email,
            @RequestParam(required = true) final String password) {
        // login(email, password) 이메일과 패스워드를 받아서
        System.out.println("***서버에 들어온 데이터: {email: " + email + ", password: " + password + "}");

        // JPA를 통해서 이메일과 패스워드가 일치하는 유저를 받음
        Optional<User> userOpt = userDao.findUserByEmailAndPassword(email, password);
        User userInfo = userDao.getUserByEmail(email); // 이메일을 통해 회원을 찾음

        // responseEntity는 HttpRequest에 대한 응답 데이터를 포함하는 클래스
        ResponseEntity<?> response = null;

        // 해당하는 유저가 있으면~
        if (userOpt.isPresent()) { // .isPresent()는 Optional로 받은 객체의 존재 여부를 boolean으로 반환
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            if (userInfo == null) {// 이메일로 찾은 회원이 없으면
                // 아이디를 다시 확인
                response = new ResponseEntity<>("일치하는 회원 정보가 없습니다.", HttpStatus.OK);

            } else { // 이메일로 찾은 회원은 있지만 userOpt가 null이면
                     // 비밀번호를 확인
                response = new ResponseEntity<>("비밀번호를 확인해주세요.", HttpStatus.OK);
            }
        }
        return response;
    }

    @PostMapping("/account/signup")
    @ApiOperation(value = "가입하기")
    public Object signup(@Valid @RequestBody SignupRequest request) { // requst : front에서 submit 한 데이터
        // 이메일, 닉네임 중복처리 필수
        // 회원가입단을 생성해 보세요.

        System.out.println("***서버에 들어온 데이터: {email: " + request.getEmail() + ", password: " + request.getPassword()
                + ", nickname: " + request.getNickname() + "}");

        String email = request.getEmail();
        String password = request.getPassword();
        String nickname = request.getNickname();

        User user = new User(email, password, nickname); // 이메일, 패스워드, 닉네임을 가진 User 객체 생성

        ResponseEntity<?> response = null;

        if (userDao.getUserByEmail(email) == null) { // 중복된 정보를 가진 회원이 없으면
            final BasicResponse result = new BasicResponse();
            result.status = true;

            if (userDao.save(user) != null) // Jpa의 save()를 통해서 DB에 저장을 했다면
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);

        } else { // 중복된 정보를 가진 회원이 있으면 실패
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return response;
    }

    @GetMapping("/account/emailcheck")
    @ApiOperation(value = "이메일 확인")
    public Object emailcheck(@RequestParam(required = true) final String email) {

        System.out.println("***서버에 들어온 데이터: {email: " + email + "}");

        User user = userDao.getUserByEmail(email); // 동일한 email을 가진 사용자 조회

        ResponseEntity<?> response = null;

        if (user != null) { // 동일 email 사용자가 있으면
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PutMapping("/account/pwdmodify")
    @ApiOperation(value = "비밀번호 변경")
    public Object signup(@Valid @RequestBody AuthenticationRequest request) {

        System.out.println(
                "***서버에 들어온 데이터: {email: " + request.getEmail() + ", password: " + request.getPassword() + "}");

        String email = request.getEmail();
        String password = request.getPassword();

        User preUser = userDao.getUserByEmail(email);

        ResponseEntity<?> response = null;

        if (preUser != null) { // 이메일로 검색하여 유저정보가 있으면
            preUser.setPassword(password); // 비밀번호 업데이트
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (userDao.save(preUser) != null) // 비밀번호 업데이트 하여 저장
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>("404", HttpStatus.NOT_FOUND);
        }

        return response;
    }
}
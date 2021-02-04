package com.web.curation.controller.account;

import java.util.List;

import javax.validation.Valid;

import com.web.curation.dao.user.NoticeDao;
import com.web.curation.dao.user.UserDao;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.user.Notice;
import com.web.curation.model.user.SignupRequest;
import com.web.curation.model.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.*;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping("/user")
// 회원 관련 Controller
public class UserController {

    @Autowired
    UserDao userDao;

    @Autowired
    NoticeDao noticeDao;

    @GetMapping("/login")
    @ApiOperation(value = "로그인")
    public Object userLogin(@RequestParam(required = true) final String email,
            @RequestParam(required = true) final String password) {

        ResponseEntity<?> response = null;

        User user = userDao.findByEmailAndPassword(email, password);
        if (user != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = user;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            if (userDao.findByEmail(email) == null) {
                response = new ResponseEntity<>("일치하는 회원 정보가 없습니다.", HttpStatus.OK);
            } else {
                response = new ResponseEntity<>("비밀번호를 확인해주세요.", HttpStatus.OK);
            }
        }
        return response;
    }

    @GetMapping("/email")
    @ApiOperation(value = "이메일 중복 확인")
    public Object emailCheck(@RequestParam(required = true) final String email,
            @RequestParam(required = true) final String password) {

        ResponseEntity<?> response = null;

        User user = userDao.findByEmail(email);

        final BasicResponse result = new BasicResponse();
        result.status = true;

        if (user == null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PostMapping("/signup")
    @ApiOperation(value = "회원가입")
    public Object userSignup(@Valid @RequestBody SignupRequest request) {

        String email = request.getEmail();
        String password = request.getPassword();
        String nickname = request.getNickname();

        User user = new User(email, password, nickname);

        ResponseEntity<?> response = null;

        if (userDao.findByEmail(email) == null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (userDao.save(user) != null)
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return response;
    }

    @PutMapping("")
    @ApiOperation(value = "회원정보 변경")
    public Object userUpdate(@Valid @RequestBody User user) {

        ResponseEntity<?> response = null;

        User userObj = userDao.findByUserId(user.getUserId());

        if (userObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (userDao.save(user) != null)
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @DeleteMapping("/{userId}")
    @ApiOperation(value = "회원탈퇴")
    public Object userDelete(@PathVariable(required = true) int userId) {

        ResponseEntity<?> response = null;

        User user = userDao.findByUserId(userId);

        if (user != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            userDao.delete(user);
            if (userDao.findByUserId(userId) == null)
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @GetMapping("/notice/{userId}")
    @ApiOperation(value = "알림 목록")
    public Object noticeList(@PathVariable(required = true) final int userId) {

        ResponseEntity<?> response = null;

        List<Notice> list = noticeDao.findByUserId(userId);

        if (list == null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PostMapping("/notice")
    @ApiOperation(value = "알림 전송")
    public Object noticeWrite(@Valid @RequestBody Notice notice) {

        ResponseEntity<?> response = null;

        User user = userDao.findByUserId(notice.getUserId());

        if (user != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (noticeDao.save(notice) != null)
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return response;
    }

    @PutMapping("/notice")
    @ApiOperation(value = "알림 수정")
    public Object noticeUpdate(@Valid @RequestBody Notice notice) {

        ResponseEntity<?> response = null;

        Notice noticeObj = noticeDao.findByNoticeId(notice.getNoticeId());

        if (noticeObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (noticeDao.save(notice) != null)
                result.data = "success";
            else
                result.data = "fail";
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }
}

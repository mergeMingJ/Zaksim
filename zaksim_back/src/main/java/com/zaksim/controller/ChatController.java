package com.zaksim.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zaksim.model.BasicResponse;
import com.zaksim.model.Chat;
import com.zaksim.model.User;
import com.zaksim.model.service.ChallengeService;
import com.zaksim.model.service.ChatService;
import com.zaksim.model.service.UserService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/chat")
public class ChatController {
	
	@Autowired
	private ChatService chatService;
	@Autowired
	private ChallengeService challengeService;
	@Autowired
	private UserService userService;
	
	@GetMapping("")
    @ApiOperation(value = "채팅 목록")
    public Object chatlist(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(challengeService.challengeinfo(challengeId) == null) {
        	result.data = "fail";
            result.message = "챌린지 아이디가 잘못되었습니다.";
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        List<Chat> clist = chatService.chatlist(challengeId);
        if(clist.size() > 0) {
        	List<Chat> list = new ArrayList<>();
        	for(int i = 0; i < clist.size(); i++) {
        		Chat chat = clist.get(i);
        		int userId = chat.getUserId();
        		User user = userService.userinfo(userId);
        		if(user == null) continue;
        		String nickname = user.getNickname();
        		chat.setNickname(nickname);
        		list.add(chat);
        	}
        	result.data = "success";
            result.message = "채팅 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "채팅 목록이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("")
    @ApiOperation(value = "채팅 입력")
    public Object chatinsert(@RequestBody final Chat chat) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        int challengeId = chat.getChallengeId();
        if(challengeService.challengeinfo(challengeId) == null) {
        	result.data = "fail";
            result.message = "챌린지 아이디가 잘못되었습니다.";
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        
        int userId = chat.getUserId();
        if(userService.userinfo(userId) == null) {
        	result.data = "fail";
            result.message = "회원 아이디가 잘못되었습니다.";
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        
        if(chatService.chatinsert(chat)) {
        	result.data = "success";
            result.message = "채팅 입력에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "채팅 입력에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("")
    @ApiOperation(value = "채팅 목록 삭제")
    public Object chatdeleteall(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(challengeService.challengeinfo(challengeId) == null) {
        	result.data = "fail";
            result.message = "챌린지 아이디가 잘못되었습니다.";
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        
        chatService.chatdeleteall(challengeId);
        List<Chat> list = chatService.chatlist(challengeId);
        
        if(list.size() == 0) {
        	result.data = "success";
            result.message = "채팅 목록 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "채팅 목록 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

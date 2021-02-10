package com.zaksim.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.zaksim.model.BasicResponse;
import com.zaksim.model.Category;
import com.zaksim.model.CategoryInfo;
import com.zaksim.model.Challenge;
import com.zaksim.model.ChallengeInfo;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;
import com.zaksim.model.Heart;
import com.zaksim.model.User;
import com.zaksim.model.service.ChallengeService;
import com.zaksim.model.service.UserService;

import io.swagger.annotations.ApiOperation;

//http://localhost:8000/swagger-ui.html
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/challenge")
public class ChallengeController {

	@Autowired
	private ChallengeService challengeService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("")
    @ApiOperation(value = "챌린지 목록")
    public Object challengelist() throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Challenge> list = challengeService.challengelist();
        List<ChallengeInfo> newList = challengeService.setNowUser(list,1);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/category")
    @ApiOperation(value = "카테고리별 챌린지 목록")
    public Object challengecategory(@RequestParam(required = true) final int categoryId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Challenge challenge = new Challenge();
        challenge.setCategoryId(categoryId);
        challenge.setIsLive(2);
        List<Challenge> list = challengeService.challengeoption(challenge);
        List<ChallengeInfo> newList = challengeService.setNowUser(list,1);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/live")
    @ApiOperation(value = "라이브별 챌린지 목록")
    public Object challengelive(@RequestParam(required = true) final int isLive) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Challenge challenge = new Challenge();
        challenge.setIsLive(isLive);
        List<Challenge> list = challengeService.challengeoption(challenge);
        List<ChallengeInfo> newList = challengeService.setNowUser(list,1);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/hashtag")
    @ApiOperation(value = "해시태그별 챌린지 목록")
    public Object challengelist(@RequestParam(required = true) final String hashtag) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Challenge challenge = new Challenge();
        challenge.setHashtag(hashtag);
        challenge.setIsLive(2);
        List<Challenge> list = challengeService.challengeoption(challenge);
        List<ChallengeInfo> newList = challengeService.setNowUser(list,1);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/ing")
    @ApiOperation(value = "진심 챌린지 목록")
    public Object challengeIng(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Challenge> list = challengeService.challengeIng(userId);
        List<ChallengeInfo> newList = challengeService.setNowUser(list,userId);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/done")
    @ApiOperation(value = "완심 챌린지 목록")
    public Object challengeDone(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Challenge> list = challengeService.challengeDone(userId);
        List<ChallengeInfo> newList = challengeService.setNowUser(list,userId);
        if(newList != null) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = newList;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/wish")
    @ApiOperation(value = "찜한 챌린지 목록")
    public Object challengeWish(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Heart> hlist = userService.heartlist(userId);
        List<Challenge> list = new ArrayList<>();
        for(int i = 0; i < hlist.size(); i++) {
        	int challengeId = hlist.get(i).getChallengeId();
        	Challenge obj = challengeService.challengeinfo(challengeId);
        	list.add(obj);
        }
        List<ChallengeInfo> newList = challengeService.setNowUser(list,userId);
        result.data = "success";
		result.message = "챌린지 목록을 불러옵니다.";
		result.object = newList;
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/main/category")
    @ApiOperation(value = "메인화면 카테고리별 챌린지 현황")
    public Object challengemaincategory() throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Category> clist = challengeService.categorylist();
        List<CategoryInfo> list = new ArrayList<>();
        for(int i = 0; i < clist.size(); i++) {
        	Category c = clist.get(i);
        	
        	int count = challengeService.challengecount(c.getCategoryId());
        	if(count == 0) continue;
        	
        	CategoryInfo cc = new CategoryInfo();
        	cc.setCategory_id(c.getCategoryId());
        	cc.setCategory_name(c.getCategoryName());
        	cc.setCount(count);
        	list.add(cc);
        }
        if(list.size() > 0) {
        	result.data = "success";
            result.message = "챌린지 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/info")
    @ApiOperation(value = "챌린지 정보")
    public Object challengeinfo(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Challenge challenge = challengeService.challengeinfo(challengeId);
        ChallengeInfo challengeInfo = challengeService.challengeconvert(challenge, 1);
        if(challengeInfo != null) {
        	int nowUser = challengeService.cmembercount(challengeInfo.getChallengeId());
        	challengeInfo.setNowUser(nowUser);
        	result.data = "success";
            result.message = "챌린지 정보를 불러옵니다.";
            result.object = challengeInfo;
        }else {
        	result.data = "fail";
			result.message = "챌린지가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/insert")
    @ApiOperation(value = "챌린지 생성 - 소개 정보 생성 및 회원 테이블 추가")
    public Object challengeinsert(@RequestBody(required = true) final Challenge challenge) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Date time = new Date();
        if(challenge.getStartDate() == null) challenge.setStartDate(time);
        if(challenge.getEndDate() == null) challenge.setEndDate(time);
        if(challengeService.challengeinsert(challenge)) { // 챌린지를 생성한다
        	int userId = challenge.getManagerId();
        	List<Challenge> list = challengeService.challengeIng(userId); // 챌린지 목록을 불러온다
        	int index = list.size() - 1;
        	int challengeId = list.get(index).getChallengeId(); // 최근 생성된 챌린지 id를 불러온다
        	Cinfo cinfo = new Cinfo();
        	cinfo.setChallengeId(challengeId);
        	if(challengeService.cinfoinsert(cinfo)) { // 챌린지 소개 정보 추가
        		Cmember cmember = new Cmember();
        		cmember.setChallengeId(challengeId);
        		cmember.setUserId(userId);
        		if(challengeService.cmemberinsert(cmember)) { // 회원 테이블 생성 및 관리자 추가
        			result.data = "success";
                    result.message = "챌린지 생성 및 기본 세팅에 성공했습니다.";
        		}else {
        			result.data = "fail";
        			result.message = "회원 테이블 생성에 실패했습니다.";
        		}
        	}else {
        		result.data = "fail";
    			result.message = "챌린지 생성에 실패했습니다.";
        	}
        }else {
        	result.data = "fail";
			result.message = "챌린지 생성에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/update")
    @ApiOperation(value = "챌린지 정보 변경")
    public Object challengeupdate(@RequestBody(required = true) final Challenge challenge) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Date time = new Date();
        if(challenge.getStartDate() == null) challenge.setStartDate(time);
        if(challenge.getEndDate() == null) challenge.setEndDate(time);
        if(challengeService.challengeupdate(challenge)) {
        	result.data = "success";
            result.message = "챌린지 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete")
    @ApiOperation(value = "챌린지 삭제")
    public Object challengedelete(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        challengeService.cmemberdeleteall(challengeId);
        if(challengeService.cmemberlist(challengeId).size() == 0) {
        	if(challengeService.cinfodelete(challengeId)) {
        		if(challengeService.challengedelete(challengeId)) {
                	result.data = "success";
                    result.message = "챌린지 삭제에 성공했습니다.";
                }else {
                	result.data = "fail";
        			result.message = "챌린지 삭제에 실패했습니다.";
                }
        	}else {
        		result.data = "fail";
    			result.message = "챌린지 소개 정보 삭제에 실패했습니다.";
        	}
        }else {
        	result.data = "fail";
			result.message = "챌린지 회원 정보 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	
	@GetMapping("/detail/info")
    @ApiOperation(value = "챌린지 소개 정보")
    public Object cinfoinfo(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Cinfo cinfo = challengeService.cinfoinfo(challengeId);
        if(cinfo != null) {
        	result.data = "success";
            result.message = "챌린지 소개 정보를 불러옵니다.";
            result.object = cinfo;
        }else {
        	result.data = "fail";
			result.message = "챌린지 소개 정보가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/detail/insert")
    @ApiOperation(value = "챌린지 소개 정보 생성")
    public Object cinfoinsert(@RequestBody(required = true) final Cinfo cinfo) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        int challengeId = cinfo.getChallengeId();
        if(challengeService.cinfoinfo(challengeId) == null) {
        	if(challengeService.cinfoinsert(cinfo)) {
            	result.data = "success";
                result.message = "챌린지 소개 정보 생성에 성공했습니다.";
            }else {
            	result.data = "fail";
    			result.message = "챌린지 소개 정보 생성에 실패했습니다.";
            }
        }else {
        	result.data = "fail";
			result.message = "챌린지 소개 정보가 이미 존재합니다.";
        }
        
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/detail/update")
    @ApiOperation(value = "챌린지 소개 정보 변경")
    public Object cinfoupdate(@RequestBody(required = true) final Cinfo cinfo) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(challengeService.cinfoupdate(cinfo)) {
        	result.data = "success";
            result.message = "챌린지 소개 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 소개 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/deteil/delete")
    @ApiOperation(value = "챌린지 소개 정보 삭제")
    public Object cinfodelete(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(challengeService.cinfodelete(challengeId)) {
        	result.data = "success";
            result.message = "챌린지 소개 정보 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 소개 정보 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	
	@GetMapping("/member")
    @ApiOperation(value = "챌린지 멤버 목록")
    public Object cmemberlist(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Cmember> list = challengeService.cmemberlist(challengeId);
        Challenge challenge = challengeService.challengeinfo(challengeId);
        List<Cmember> newList = new ArrayList<>();
        for(int i = 0; i < list.size(); i++) {
        	Cmember cmember = list.get(i);
        	ChallengeInfo cObj = challengeService.challengeconvert(challenge, cmember.getUserId());
        	cmember.setProgress(cObj.getUserProgress()); // 인증률 추가
        	User user = userService.userinfo(cmember.getUserId());
        	cmember.setNickname(user.getNickname()); // 닉네임 추가
        	
        	newList.add(cmember);
        }
        result.data = "success";
        result.message = "챌린지 멤버 목록을 불러옵니다.";
        result.object = newList;
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/member/insert")
    @ApiOperation(value = "챌린지 참여")
    public Object cmemberinsert(@RequestBody(required = true) final Cmember cmember) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        int challengeId = cmember.getChallengeId();
        int userId = cmember.getUserId();
        Cmember cmObj = new Cmember();
        cmObj.setChallengeId(challengeId);
        cmObj.setUserId(userId);
        if(challengeService.cmemberinfo(cmObj) == null) {
        	if(challengeService.cmemberinsert(cmember)) {
            	result.data = "success";
                result.message = "챌린지 참여에 성공했습니다.";
            }else {
            	result.data = "fail";
    			result.message = "챌린지 참여에 실패했습니다.";
            }
        }else {
        	result.data = "fail";
			result.message = "이미 참여한 챌린지입니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/member/update")
    @ApiOperation(value = "챌린지 참여 회원 인증률 변경")
    public Object cmemberupdate(@RequestBody(required = true) final Cmember cmember) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(challengeService.cmemberupdate(cmember)) {
        	result.data = "success";
            result.message = "챌린지 참여 회원 인증률 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 참여 회원 인증률 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/member/delete")
    @ApiOperation(value = "챌린지 탈퇴")
    public Object cmemberdelete(@RequestParam(required = true) final int challengeId,
    		@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Cmember cmember = new Cmember();
        cmember.setChallengeId(challengeId);
        cmember.setUserId(userId);
        
        if(challengeService.cmemberdelete(cmember)) {
        	result.data = "success";
            result.message = "챌린지 탈퇴에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 탈퇴에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/member/deleteall")
    @ApiOperation(value = "챌린지 멤버 전부 삭제")
    public Object cmemberdelete(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        challengeService.cmemberdeleteall(challengeId);
        if(challengeService.cmemberlist(challengeId).size() == 0) {
        	result.data = "success";
            result.message = "챌린지 멤버 전부 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "챌린지 멤버 전부 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

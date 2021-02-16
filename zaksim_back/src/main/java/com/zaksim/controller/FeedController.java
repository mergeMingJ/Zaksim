package com.zaksim.controller;

import java.util.List;

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
import com.zaksim.model.Checkfeed;
import com.zaksim.model.Fcomment;
import com.zaksim.model.service.FeedService;

import io.swagger.annotations.ApiOperation;

//http://localhost:8000/swagger-ui.html
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/feed")
public class FeedController {

	@Autowired
	private FeedService feedService;
	
	@GetMapping("")
    @ApiOperation(value = "인증글 목록")
    public Object feedlist(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Checkfeed> list = feedService.feedlist(challengeId);
        if(list.size() > 0) {
        	result.data = "success";
            result.message = "인증글 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "인증글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/calander")
    @ApiOperation(value = "캘린더 표시 목록")
    public Object feedCalander(@RequestParam(required = true) final int userId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Checkfeed> list = feedService.feedCalander(userId);
        if(list.size() > 0) {
        	result.data = "success";
            result.message = "캘린더 표시 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "캘린더에 표시할 정보가 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/info")
    @ApiOperation(value = "인증글 정보")
    public Object feedinfo(@RequestParam(required = true) final int feedId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Checkfeed checkfeed = feedService.feedinfo(feedId);
        if(checkfeed != null) {
        	result.data = "success";
            result.message = "인증글을 불러옵니다.";
            result.object = checkfeed;
        }else {
        	result.data = "fail";
			result.message = "인증글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/insert")
    @ApiOperation(value = "인증글 작성")
    public Object feedinsert(@RequestBody(required = true) final Checkfeed checkfeed) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(feedService.feedinsert(checkfeed)) {
        	result.data = "success";
            result.message = "인증글 작성에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 작성에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/update")
    @ApiOperation(value = "인증글 정보 변경")
    public Object feedupdate(@RequestBody(required = true) final Checkfeed checkfeed) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(feedService.feedupdate(checkfeed)) {
        	result.data = "success";
            result.message = "인증글 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete")
    @ApiOperation(value = "인증글 및 댓글 삭제")
    public Object feeddelete(@RequestParam(required = true) final int feedId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        feedService.fcommentdeleteall(feedId);
        if(feedService.fcommentlist(feedId).size() == 0) {
        	if(feedService.feeddelete(feedId)) {
        		result.data = "success";
                result.message = "인증글 및 댓글 삭제에 성공했습니다.";
        	}else {
            	result.data = "fail";
    			result.message = "인증글 삭제에 실패했습니다.";
            }
        }else {
        	result.data = "fail";
			result.message = "댓글 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/deleteall")
    @ApiOperation(value = "챌린지 인증글 및 댓글 전부 삭제")
    public Object feeddeleteall(@RequestParam(required = true) final int challengeId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Checkfeed> list = feedService.feedlist(challengeId);
        for(int i = 0; i < list.size(); i++) {
        	Checkfeed feed = list.get(i);
        	feedService.fcommentdeleteall(feed.getFeedId()); // 댓글을 전부 지운다
        	if(feedService.fcommentlist(feed.getFeedId()).size() == 0) { // 댓글이 없다면
        		if(!feedService.feeddelete(feed.getFeedId())) { // 글을 지운다
        			result.data = "fail";
        			result.message = "인증글 삭제에 실패했습니다.";
        			return new ResponseEntity<>(result, HttpStatus.OK);
        		}
        	}else {
            	result.data = "fail";
    			result.message = "댓글 삭제에 실패했습니다.";
    			return new ResponseEntity<>(result, HttpStatus.OK);
            }
        }
        if(feedService.feedlist(challengeId).size() == 0) {
        	result.data = "success";
            result.message = "모든 인증글 및 댓글 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "댓글 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	
	@GetMapping("/comment")
    @ApiOperation(value = "인증글 댓글 목록")
    public Object fcommentlist(@RequestParam(required = true) final int feedId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Fcomment> list = feedService.fcommentlist(feedId);
        if(list.size() > 0) {
        	result.data = "success";
            result.message = "인증글 댓글 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "인증글 댓글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/comment/insert")
    @ApiOperation(value = "인증글 댓글 작성")
    public Object fcommentinsert(@RequestBody(required = true) final Fcomment comment) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(feedService.fcommentinsert(comment)) {
        	result.data = "success";
            result.message = "인증글 댓글 작성에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 댓글 작성에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/comment/update")
    @ApiOperation(value = "인증글 댓글 정보 변경")
    public Object fcommentupdate(@RequestBody(required = true) final Fcomment comment) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(feedService.fcommentupdate(comment)) {
        	result.data = "success";
            result.message = "인증글 댓글 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 댓글 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/comment/delete")
    @ApiOperation(value = "인증글 댓글 삭제")
    public Object fcommentdelete(@RequestParam(required = true) final int fcommentId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(feedService.fcommentdelete(fcommentId)) {
        	result.data = "success";
            result.message = "인증글 댓글 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 댓글 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/comment/deleteall")
    @ApiOperation(value = "인증글 댓글 전부 삭제")
    public Object fcommentdeleteall(@RequestParam(required = true) final int feedId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        feedService.fcommentdeleteall(feedId);
        if(feedService.fcommentlist(feedId).size() == 0) {
        	result.data = "success";
            result.message = "인증글 댓글 전부 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "인증글 댓글 전부 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

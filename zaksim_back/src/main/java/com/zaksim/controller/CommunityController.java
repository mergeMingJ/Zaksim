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
import com.zaksim.model.Comment;
import com.zaksim.model.Post;
import com.zaksim.model.service.CommunityService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

//http://localhost:8000/swagger-ui.html
@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/community")
public class CommunityController {

	@Autowired
	private CommunityService communityService;
	
	@GetMapping("")
    @ApiOperation(value = "게시글 목록")
    public Object postlist() throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Post> list = communityService.postlist();
        if(list != null) {
        	result.data = "success";
            result.message = "게시글 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "게시글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/search")
    @ApiOperation(value = "게시글 검색")
    public Object postSearch(@ApiParam(required = true) @RequestParam String key,
    		@ApiParam(required = true) @RequestParam String word) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(key == null) key = "제목";
        else if(!key.equals("제목") && !key.equals("내용") && !key.equals("작성자")) key = "제목";
        if(word == null) word = "";
        
        List<Post> list = communityService.postOption(key,word);
        if(list.size() > 0) {
        	result.data = "success";
            result.message = "게시글 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "게시글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@GetMapping("/info")
    @ApiOperation(value = "게시글 정보 조회 및 조회수 1 증가")
    public Object postinfo(@RequestParam(required = true) final int postId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        Post postObj = communityService.postinfo(postId); // 조회수 증가 전 정보 불러오기
        if(postObj != null) {
        	int view = postObj.getView() + 1;
        	postObj.setView(view);
        	communityService.postView(postObj); // 조회수 1 증가
        	Post post = communityService.postinfo(postId); // 조회수가 증가된 정보 다시 불러오기
        	result.data = "success";
            result.message = "게시글 정보를 불러옵니다.";
            result.object = post;
        }else {
        	result.data = "fail";
			result.message = "게시글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/insert")
    @ApiOperation(value = "게시글 작성")
    public Object postinsert(@RequestBody(required = true) final Post post) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(communityService.postinsert(post)) {
        	result.data = "success";
            result.message = "게시글 작성에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "게시글 작성에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/update")
    @ApiOperation(value = "게시글 정보 변경")
    public Object postupdate(@RequestBody(required = true) final Post post) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(communityService.postupdate(post)) {
        	result.data = "success";
            result.message = "게시글 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "게시글 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete")
    @ApiOperation(value = "게시글 삭제 및 하위 댓글 전부 삭제")
    public Object postdelete(@RequestParam(required = true) final int postId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        communityService.commentdeleteall(postId); // 댓글 먼저 삭제
        if(communityService.commentlist(postId).size() == 0) {
        	communityService.postdelete(postId); // 게시글 삭제
        	if(communityService.postinfo(postId) == null) {
        		result.data = "success";
                result.message = "게시글 및 댓글 삭제에 성공했습니다.";
        	}else {
        		result.data = "fail";
    			result.message = "댓글 전부 삭제했지만 게시글 삭제에 실패했습니다.";
        	}
        }else {
        	result.data = "fail";
			result.message = "게시글 댓글 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	
	@GetMapping("/comment")
    @ApiOperation(value = "댓글 목록")
    public Object commentlist(@RequestParam(required = true) final int postId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        List<Comment> list = communityService.commentlist(postId);
        if(list != null) {
        	result.data = "success";
            result.message = "댓글 목록을 불러옵니다.";
            result.object = list;
        }else {
        	result.data = "fail";
			result.message = "댓글이 없습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PostMapping("/comment/insert")
    @ApiOperation(value = "댓글 작성")
    public Object commentinsert(@RequestBody(required = true) final Comment comment) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(communityService.commentinsert(comment)) {
        	result.data = "success";
            result.message = "댓글 작성에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "댓글 작성에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@PutMapping("/comment/update")
    @ApiOperation(value = "댓글 정보 변경")
    public Object commentupdate(@RequestBody(required = true) final Comment comment) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(communityService.commentupdate(comment)) {
        	result.data = "success";
            result.message = "댓글 정보 변경에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "댓글 정보 변경에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/comment/delete")
    @ApiOperation(value = "댓글 삭제")
    public Object commentdelete(@RequestParam(required = true) final int commentId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        if(communityService.commentdelete(commentId)) {
        	result.data = "success";
            result.message = "댓글 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "댓글 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
	
	@DeleteMapping("/comment/deleteall")
    @ApiOperation(value = "게시글 댓글 전부 삭제")
    public Object commentdeleteall(@RequestParam(required = true) final int postId) throws Exception {
        
        final BasicResponse result = new BasicResponse();
        
        communityService.commentdeleteall(postId);
        if(communityService.commentlist(postId).size() == 0) {
        	result.data = "success";
            result.message = "댓글 전부 삭제에 성공했습니다.";
        }else {
        	result.data = "fail";
			result.message = "댓글 전부 삭제에 실패했습니다.";
        }
		
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}

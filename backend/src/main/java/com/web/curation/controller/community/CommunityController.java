package com.web.curation.controller.community;

import java.util.List;

import javax.validation.Valid;

import com.web.curation.dao.community.CommentDao;
import com.web.curation.dao.community.PostDao;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.community.Comment;
import com.web.curation.model.community.Post;

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
@RequestMapping("/community")
// 게시판 관련 Controller
public class CommunityController {

    @Autowired
    PostDao postDao;

    @Autowired
    CommentDao commentDao;

    @GetMapping("")
    @ApiOperation(value = "게시글 전체 목록")
    public Object postList() {

        List<Post> list = postDao.findAll();

        ResponseEntity<?> response = null;

        if (list != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = list;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @GetMapping("/{categoryId}")
    @ApiOperation(value = "카테고리별 게시글 목록")
    public Object postCategory(@PathVariable(required = true) final int categoryId) {

        List<Post> list = postDao.findByCategoryId(categoryId);

        ResponseEntity<?> response = null;

        if (list != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = list;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @GetMapping("/info/{postId}")
    @ApiOperation(value = "게시글 상세 정보 조회")
    public Object postInfo(@PathVariable(required = true) final int postId) {

        Post post = postDao.findByPostId(postId);

        ResponseEntity<?> response = null;

        if (post != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = post;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PostMapping("")
    @ApiOperation(value = "게시글 작성")
    public Object postWrite(@Valid @RequestBody(required = true) Post post) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (postDao.save(post) != null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("")
    @ApiOperation(value = "게시글 수정")
    public Object postUpdate(@Valid @RequestBody(required = true) Post post) {

        ResponseEntity<?> response = null;

        int postId = post.getPostId();
        Post postObj = postDao.findByPostId(postId);

        if (postObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (postDao.save(post) != null) {
                result.data = "success";
            } else {
                result.data = "fail";
            }
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @DeleteMapping("/{postId}")
    @ApiOperation(value = "게시글 삭제")
    public Object postDelete(@PathVariable(required = true) final int postId) {

        Post post = postDao.findByPostId(postId);

        ResponseEntity<?> response = null;

        if (post != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            postDao.delete(post);
            if (postDao.findByPostId(postId) == null) {
                result.data = "success";
            } else {
                result.data = "fail";
            }
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @GetMapping("/comment/{postId}")
    @ApiOperation(value = "게시글 댓글 목록")
    public Object commentList(@PathVariable(required = true) final int postId) {

        List<Comment> list = commentDao.findByPostId(postId);

        ResponseEntity<?> response = null;

        if (list != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = list;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PostMapping("/comment")
    @ApiOperation(value = "댓글 작성")
    public Object commentWrite(@Valid @RequestBody(required = true) Comment comment) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (commentDao.save(comment) != null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("/comment")
    @ApiOperation(value = "댓글 수정")
    public Object commentUpdate(@Valid @RequestBody(required = true) Comment comment) {

        ResponseEntity<?> response = null;

        int commentId = comment.getCommentId();
        Comment commentObj = commentDao.findByCommentId(commentId);

        if (commentObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (commentDao.save(comment) != null) {
                result.data = "success";
            } else {
                result.data = "fail";
            }
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @DeleteMapping("/comment/{commentId}")
    @ApiOperation(value = "댓글 삭제")
    public Object commentDelete(@PathVariable(required = true) final int commentId) {

        Comment comment = commentDao.findByCommentId(commentId);

        ResponseEntity<?> response = null;

        if (comment != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            commentDao.delete(comment);
            if (commentDao.findByCommentId(commentId) == null) {
                result.data = "success";
            } else {
                result.data = "fail";
            }
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }
}

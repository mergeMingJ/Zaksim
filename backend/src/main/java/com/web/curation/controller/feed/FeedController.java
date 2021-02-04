package com.web.curation.controller.feed;

import java.util.List;

import javax.validation.Valid;

import com.web.curation.dao.feed.CheckfeedDao;
import com.web.curation.dao.feed.FcommentDao;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.feed.Checkfeed;
import com.web.curation.model.feed.Fcomment;

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
@RequestMapping("/feed")
// 인증글 관련 Controller
public class FeedController {

    @Autowired
    CheckfeedDao checkfeedDao;

    @Autowired
    FcommentDao fcommentDao;

    @GetMapping("/{challengeId}")
    @ApiOperation(value = "챌린지 인증후기 목록")
    public Object feedList(@PathVariable(required = true) final int challengeId) {

        List<Checkfeed> list = checkfeedDao.findByChallengeId(challengeId);

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

    @GetMapping("/info/{feedId}")
    @ApiOperation(value = "챌린지 인증후기 정보")
    public Object feedInfo(@PathVariable(required = true) final int feedId) {

        Checkfeed checkfeed = checkfeedDao.findByFeedId(feedId);

        ResponseEntity<?> response = null;

        if (checkfeed != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = checkfeed;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PostMapping("")
    @ApiOperation(value = "챌린지 인증후기 작성")
    public Object feedWrite(@Valid @RequestBody(required = true) Checkfeed checkfeed) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (checkfeedDao.save(checkfeed) != null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("")
    @ApiOperation(value = "챌린지 인증후기 수정")
    public Object feedUpdate(@Valid @RequestBody(required = true) Checkfeed checkfeed) {

        ResponseEntity<?> response = null;

        int feedId = checkfeed.getFeedId();
        Checkfeed feedObj = checkfeedDao.findByFeedId(feedId);

        if (feedObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (checkfeedDao.save(checkfeed) != null) {
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

    @DeleteMapping("/{feedId}")
    @ApiOperation(value = "챌린지 인증후기 삭제")
    public Object postDelete(@PathVariable(required = true) final int feedId) {

        Checkfeed checkfeed = checkfeedDao.findByFeedId(feedId);

        ResponseEntity<?> response = null;

        if (checkfeed != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            checkfeedDao.delete(checkfeed);
            if (checkfeedDao.findByFeedId(feedId) == null) {
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

    @GetMapping("/comment/{feedId}")
    @ApiOperation(value = "인증글 댓글 목록")
    public Object commentList(@PathVariable(required = true) final int feedId) {

        List<Fcomment> list = fcommentDao.findByFeedId(feedId);

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
    @ApiOperation(value = "인증글 댓글 작성")
    public Object commentWrite(@Valid @RequestBody(required = true) Fcomment fcomment) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (fcommentDao.save(fcomment) != null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("/comment")
    @ApiOperation(value = "인증글 댓글 수정")
    public Object commentUpdate(@Valid @RequestBody(required = true) Fcomment fcomment) {

        ResponseEntity<?> response = null;

        int fcommentId = fcomment.getFcommentId();
        Fcomment fcommentObj = fcommentDao.findByFcommentId(fcommentId);

        if (fcommentObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (fcommentDao.save(fcomment) != null) {
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

    @DeleteMapping("/comment/{fcommentId}")
    @ApiOperation(value = "인증글 댓글 삭제")
    public Object commentDelete(@PathVariable(required = true) final int fcommentId) {

        Fcomment fcomment = fcommentDao.findByFcommentId(fcommentId);

        ResponseEntity<?> response = null;

        if (fcomment != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            fcommentDao.delete(fcomment);
            if (fcommentDao.findByFcommentId(fcommentId) == null) {
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

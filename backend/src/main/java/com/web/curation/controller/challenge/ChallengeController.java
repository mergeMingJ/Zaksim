package com.web.curation.controller.challenge;

import java.util.List;

import javax.validation.Valid;

import com.web.curation.dao.challenge.ChallengeDao;
import com.web.curation.dao.challenge.CinfoDao;
import com.web.curation.dao.challenge.CmemberDao;
import com.web.curation.model.BasicResponse;
import com.web.curation.model.challenge.Challenge;
import com.web.curation.model.challenge.Cinfo;
import com.web.curation.model.challenge.Cmember;

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
@RequestMapping("/challenge")
// 챌린지 관련 Controller
public class ChallengeController {

    @Autowired
    ChallengeDao challengeDao;

    @Autowired
    CinfoDao cinfoDao;

    @Autowired
    CmemberDao cmemberDao;

    @GetMapping("")
    @ApiOperation(value = "챌린지 전체 목록")
    public Object challengeList() {

        List<Challenge> list = challengeDao.findAll();

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

    @GetMapping("/live")
    @ApiOperation(value = "라이브 챌린지 목록")
    public Object challengeLive() {

        List<Challenge> list = challengeDao.findByIsLive(1);

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

    @GetMapping("/nolive")
    @ApiOperation(value = "비 라이브 챌린지 목록")
    public Object challengeNolive() {

        List<Challenge> list = challengeDao.findByIsLive(0);

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

    @GetMapping("/hashtag")
    @ApiOperation(value = "해시태그별 챌린지 목록")
    public Object challengeHashtag(@RequestParam(required = true) final String hashtag) {

        List<Challenge> list = challengeDao.findByHashtagLike(hashtag);

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

    @GetMapping("/{challengeId}")
    @ApiOperation(value = "챌린지 기본 정보")
    public Object challengeInfo(@PathVariable(required = true) final int challengeId) {

        Challenge challenge = challengeDao.findByChallengeId(challengeId);

        ResponseEntity<?> response = null;

        if (challenge != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = challenge;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PostMapping("")
    @ApiOperation(value = "챌린지 생성")
    public Object postWrite(@Valid @RequestBody(required = true) Challenge challenge) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (challengeDao.save(challenge) != null) {
            Cinfo cinfo = new Cinfo();
            cinfo.setChallengeId(challenge.getChallengeId());
            if (cinfoDao.save(cinfo) != null) {
                result.data = "success";
            } else {
                result.data = "fail";
            }
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("")
    @ApiOperation(value = "챌린지 기본 정보 수정")
    public Object postUpdate(@Valid @RequestBody(required = true) Challenge challenge) {

        ResponseEntity<?> response = null;

        int challengeId = challenge.getChallengeId();
        Challenge challengeObj = challengeDao.findByChallengeId(challengeId);

        if (challengeObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (challengeDao.save(challenge) != null) {
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

    @DeleteMapping("/{challengeId}")
    @ApiOperation(value = "챌린지 삭제")
    public Object postDelete(@PathVariable(required = true) final int challengeId) {

        Challenge challenge = challengeDao.findByChallengeId(challengeId);
        Cinfo cinfo = cinfoDao.findByChallengeId(challengeId);

        ResponseEntity<?> response = null;

        if (challenge != null && cinfo != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            challengeDao.delete(challenge);
            cinfoDao.delete(cinfo);
            if (challengeDao.findByChallengeId(challengeId) == null
                    && cinfoDao.findByChallengeId(challengeId) == null) {
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

    @GetMapping("/info/{challengeId}")
    @ApiOperation(value = "챌린지 소개 정보")
    public Object cinfoInfo(@PathVariable(required = true) final int challengeId) {

        Cinfo cinfo = cinfoDao.findByChallengeId(challengeId);

        ResponseEntity<?> response = null;

        if (cinfo != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            result.data = "success";
            result.object = cinfo;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(null, HttpStatus.OK);
        }

        return response;
    }

    @PutMapping("/info")
    @ApiOperation(value = "챌린지 소개 정보 수정")
    public Object cinfoUpdate(@Valid @RequestBody(required = true) Cinfo cinfo) {

        ResponseEntity<?> response = null;

        int challengeId = cinfo.getChallengeId();
        Cinfo cinfoObj = cinfoDao.findByChallengeId(challengeId);

        if (cinfoObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (cinfoDao.save(cinfo) != null) {
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

    @GetMapping("/member/{challengeId}")
    @ApiOperation(value = "챌린지 참여 인원 정보")
    public Object cmemberList(@PathVariable(required = true) final int challengeId) {

        List<Cmember> list = cmemberDao.findByChallengeId(challengeId);

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

    @PostMapping("/member")
    @ApiOperation(value = "챌린지 참여")
    public Object cmemberWrite(@Valid @RequestBody(required = true) Cmember cmember) {

        ResponseEntity<?> response = null;

        final BasicResponse result = new BasicResponse();
        result.status = true;
        if (cmemberDao.save(cmember) != null) {
            result.data = "success";
        } else {
            result.data = "fail";
        }
        response = new ResponseEntity<>(result, HttpStatus.OK);

        return response;
    }

    @PutMapping("/member")
    @ApiOperation(value = "챌린지 참여 정보 수정")
    public Object cmemberUpdate(@Valid @RequestBody(required = true) Cmember cmember) {

        ResponseEntity<?> response = null;

        int challengeId = cmember.getChallengeId();
        int userId = cmember.getUserId();
        Cmember cmemberObj = cmemberDao.findByChallengeIdAndUserId(challengeId, userId);

        if (cmemberObj != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            if (cmemberDao.save(cmember) != null) {
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

    @DeleteMapping("/member")
    @ApiOperation(value = "챌린지 탈퇴")
    public Object cmemberDelete(@RequestParam(required = true) final int challengeId,
            @RequestParam(required = true) final int userId) {

        Cmember cmember = cmemberDao.findByChallengeIdAndUserId(challengeId, userId);

        ResponseEntity<?> response = null;

        if (cmember != null) {
            final BasicResponse result = new BasicResponse();
            result.status = true;
            cmemberDao.delete(cmember);
            if (cmemberDao.findByChallengeIdAndUserId(challengeId, userId) == null) {
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

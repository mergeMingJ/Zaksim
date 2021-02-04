package com.web.curation.dao.challenge;

import java.util.List;

import com.web.curation.model.challenge.Challenge;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChallengeDao extends JpaRepository<Challenge, Integer> {
    List<Challenge> findAll();

    List<Challenge> findByIsLive(int isLive);

    List<Challenge> findByHashtagLike(String hashtag);

    Challenge findByChallengeId(int challengeId);
}

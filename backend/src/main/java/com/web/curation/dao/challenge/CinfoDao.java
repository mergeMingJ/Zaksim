package com.web.curation.dao.challenge;

import com.web.curation.model.challenge.Cinfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CinfoDao extends JpaRepository<Cinfo, Integer> {
    Cinfo findByChallengeId(int challengeId);
}

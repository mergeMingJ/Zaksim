package com.web.curation.dao.challenge;

import java.util.List;

import com.web.curation.model.challenge.Cmember;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CmemberDao extends JpaRepository<Cmember, Integer> {
    List<Cmember> findByChallengeId(int challengeId);

    Cmember findByChallengeIdAndUserId(int challengeId, int userId);
}

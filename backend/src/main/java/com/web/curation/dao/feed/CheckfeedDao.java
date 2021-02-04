package com.web.curation.dao.feed;

import java.util.List;

import com.web.curation.model.feed.Checkfeed;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckfeedDao extends JpaRepository<Checkfeed, Integer> {
    List<Checkfeed> findByChallengeId(int challengeId);

    Checkfeed findByFeedId(int feedId);
}

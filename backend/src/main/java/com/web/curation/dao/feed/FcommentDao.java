package com.web.curation.dao.feed;

import java.util.List;

import com.web.curation.model.feed.Fcomment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FcommentDao extends JpaRepository<Fcomment, Integer> {
    List<Fcomment> findByFeedId(int feedId);

    Fcomment findByFcommentId(int fcommentId);
}

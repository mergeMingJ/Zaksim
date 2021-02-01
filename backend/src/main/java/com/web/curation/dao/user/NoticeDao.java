package com.web.curation.dao.user;

import java.util.List;

import com.web.curation.model.user.Notice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeDao extends JpaRepository<Notice, Integer> {
    List<Notice> findByUserId(int userId);

    Notice findByNoticeId(int noticeId);
}

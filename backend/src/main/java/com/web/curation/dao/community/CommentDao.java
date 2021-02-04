package com.web.curation.dao.community;

import java.util.List;

import com.web.curation.model.community.Comment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentDao extends JpaRepository<Comment, Integer> {
    List<Comment> findByPostId(int postId);

    Comment findByCommentId(int commentId);
}

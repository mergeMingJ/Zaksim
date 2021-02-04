package com.web.curation.dao.community;

import java.util.List;

import com.web.curation.model.community.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostDao extends JpaRepository<Post, Integer> {
    List<Post> findAll();

    List<Post> findByCategoryId(int categoryId);

    Post findByPostId(int postId);
}
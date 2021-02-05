package com.zaksim.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Comment;
import com.zaksim.model.Post;
import com.zaksim.model.mapper.CommunityMapper;

@Service
public class CommunityServiceImpl implements CommunityService {

	@Autowired
	private CommunityMapper communityMapper;
	
	@Override
	public List<Post> postlist() {
		return communityMapper.postlist();
	}

	@Override
	public Post postinfo(int postId) throws Exception {
		return communityMapper.postinfo(postId);
	}

	@Override
	public boolean postinsert(Post post) throws Exception {
		return communityMapper.postinsert(post) == 1;
	}

	@Override
	public boolean postupdate(Post post) throws Exception {
		return communityMapper.postupdate(post) == 1;
	}

	@Override
	public boolean postdelete(int postId) throws Exception {
		return communityMapper.postdelete(postId) == 1;
	}

	@Override
	public List<Comment> commentlist(int postId) throws Exception {
		return communityMapper.commentlist(postId);
	}

	@Override
	public boolean commentinsert(Comment comment) throws Exception {
		return communityMapper.commentinsert(comment) == 1;
	}

	@Override
	public boolean commentupdate(Comment comment) throws Exception {
		return communityMapper.commentupdate(comment) == 1;
	}

	@Override
	public boolean commentdelete(int commendId) throws Exception {
		return communityMapper.commentdelete(commendId) == 1;
	}

	@Override
	public boolean commentdeleteall(int postId) throws Exception {
		return communityMapper.commentdeleteall(postId) == 1;
	}

}

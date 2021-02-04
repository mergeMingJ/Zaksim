package com.zaksim.model.service;

import java.util.List;

import com.zaksim.model.Comment;
import com.zaksim.model.Post;

public interface CommunityService {
	public List<Post> postlist();
	public Post postinfo(int postId) throws Exception;
	public boolean postinsert(Post post) throws Exception;
	public boolean postupdate(Post post) throws Exception;
	public boolean postdelete(int postId) throws Exception;

	public List<Comment> commentlist(int postId) throws Exception;
	public boolean commentinsert(Comment comment) throws Exception;
	public boolean commentupdate(Comment comment) throws Exception;
	public boolean commentdelete(int commendId) throws Exception;
	public boolean commentdeleteall(int postId) throws Exception;
}

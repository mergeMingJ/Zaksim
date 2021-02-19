package com.zaksim.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Comment;
import com.zaksim.model.Post;

@Mapper
public interface CommunityMapper {
	List<Post> postlist();
	Post postinfo(int postId) throws Exception;
	int postinsert(Post post) throws Exception;
	int postupdate(Post post) throws Exception;
	int postView(Post post) throws Exception;
	int postdelete(int postId) throws Exception;
	
	List<Comment> commentlist(int postId) throws Exception;
	int commentinsert(Comment comment) throws Exception;
	int commentupdate(Comment comment) throws Exception;
	int commentdelete(int commendId) throws Exception;
	int commentdeleteall(int postId) throws Exception;
}

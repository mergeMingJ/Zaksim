package com.zaksim.model.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Comment;
import com.zaksim.model.Post;
import com.zaksim.model.User;
import com.zaksim.model.mapper.CommunityMapper;
import com.zaksim.model.mapper.UserMapper;

@Service
public class CommunityServiceImpl implements CommunityService {

	@Autowired
	private CommunityMapper communityMapper;
	
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public List<Post> postlist() {
		return communityMapper.postlist();
	}
	
	@Override
	public List<Post> postOption(String key, String word) throws Exception{
		List<Post> plist = communityMapper.postlist();
		List<Post> list = new ArrayList<>();
		for(int i = 0; i < plist.size(); i++) {
			Post post = plist.get(i);
			String title = post.getTitle();
			String content = post.getContent();
			User user = userMapper.userinfo(post.getUserId());
			String nickname = user.getNickname();
			
			if(key.equals("제목") && title.contains(word)) list.add(post);
			else if(key.equals("내용") && content.contains(word)) list.add(post);
			else if(key.equals("작성자") && nickname.contains(word)) list.add(post);
		}
		
		return list;
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
	public boolean postView(Post post) throws Exception{
		return communityMapper.postView(post) == 1;
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

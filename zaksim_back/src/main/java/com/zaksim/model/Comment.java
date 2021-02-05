package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "댓글 정보")
public class Comment {
	private int commentId;
	private int postId;
	private int userId;
	private String content;
	private Date regtime;
	
	public Comment() {}

	public Comment(int commentId, int postId, int userId, String content, Date regtime) {
		super();
		this.commentId = commentId;
		this.postId = postId;
		this.userId = userId;
		this.content = content;
		this.regtime = regtime;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getRegtime() {
		return regtime;
	}

	public void setRegtime(Date regtime) {
		this.regtime = regtime;
	}

	@Override
	public String toString() {
		return "Comment [commentId=" + commentId + ", postId=" + postId + ", userId=" + userId + ", content=" + content
				+ ", regtime=" + regtime + "]";
	}
	
}

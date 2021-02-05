package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "게시판 정보")
public class Post {
	private int postId;
	private int userId;
	private String title;
	private String content;
	private int categoryId;
	private String filePath;
	private Date regtime;
	
	public Post() {}

	public Post(int postId, int userId, String title, String content, int categoryId, String filePath, Date regtime) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.title = title;
		this.content = content;
		this.categoryId = categoryId;
		this.filePath = filePath;
		this.regtime = regtime;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public Date getRegtime() {
		return regtime;
	}

	public void setRegtime(Date regtime) {
		this.regtime = regtime;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId + ", title=" + title + ", content=" + content
				+ ", categoryId=" + categoryId + ", filePath=" + filePath + ", regtime=" + regtime + "]";
	}
	
}

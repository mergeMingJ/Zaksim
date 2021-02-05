package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "인증글 댓글 정보")
public class Fcomment {
	private int fcommentId;
	private int feedId;
	private int userId;
	private String content;
	private Date regtime;
	
	public Fcomment() {}

	public Fcomment(int fcommentId, int feedId, int userId, String content, Date regtime) {
		super();
		this.fcommentId = fcommentId;
		this.feedId = feedId;
		this.userId = userId;
		this.content = content;
		this.regtime = regtime;
	}

	public int getFcommentId() {
		return fcommentId;
	}

	public void setFcommentId(int fcommentId) {
		this.fcommentId = fcommentId;
	}

	public int getFeedId() {
		return feedId;
	}

	public void setFeedId(int feedId) {
		this.feedId = feedId;
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
		return "Fcomment [fcommentId=" + fcommentId + ", feedId=" + feedId + ", userId=" + userId + ", content="
				+ content + ", regtime=" + regtime + "]";
	}
	
}

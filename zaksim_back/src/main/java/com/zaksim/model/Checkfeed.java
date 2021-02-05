package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "인증글 정보")
public class Checkfeed {
	private int feedId;
	private int challengeId;
	private int userId;
	private String title;
	private String content;
	private String imgPath;
	private Date regtime;
	
	public Checkfeed() {}

	public Checkfeed(int feedId, int challengeId, int userId, String title, String content, String imgPath,
			Date regtime) {
		super();
		this.feedId = feedId;
		this.challengeId = challengeId;
		this.userId = userId;
		this.title = title;
		this.content = content;
		this.imgPath = imgPath;
		this.regtime = regtime;
	}

	public int getFeedId() {
		return feedId;
	}

	public void setFeedId(int feedId) {
		this.feedId = feedId;
	}

	public int getChallengeId() {
		return challengeId;
	}

	public void setChallengeId(int challengeId) {
		this.challengeId = challengeId;
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

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public Date getRegtime() {
		return regtime;
	}

	public void setRegtime(Date regtime) {
		this.regtime = regtime;
	}

	@Override
	public String toString() {
		return "Checkfeed [feedId=" + feedId + ", challengeId=" + challengeId + ", userId=" + userId + ", title="
				+ title + ", content=" + content + ", imgPath=" + imgPath + ", regtime=" + regtime + "]";
	}
	
}

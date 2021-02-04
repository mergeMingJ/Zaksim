package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "알림 정보")
public class Notice {
	private int noticeId;
	private int fromUserId;
	private String content;
	private int challengeId;
	private int userId;
	private int isCheck;
	private Date regtime;
	
	public Notice() {}

	public Notice(int noticeId, int fromUserId, String content, int challengeId, int userId, int isCheck,
			Date regtime) {
		super();
		this.noticeId = noticeId;
		this.fromUserId = fromUserId;
		this.content = content;
		this.challengeId = challengeId;
		this.userId = userId;
		this.isCheck = isCheck;
		this.regtime = regtime;
	}

	public int getNoticeId() {
		return noticeId;
	}

	public void setNoticeId(int noticeId) {
		this.noticeId = noticeId;
	}

	public int getFromUserId() {
		return fromUserId;
	}

	public void setFromUserId(int fromUserId) {
		this.fromUserId = fromUserId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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

	public int getIsCheck() {
		return isCheck;
	}

	public void setIsCheck(int isCheck) {
		this.isCheck = isCheck;
	}

	public Date getRegtime() {
		return regtime;
	}

	public void setRegtime(Date regtime) {
		this.regtime = regtime;
	}

	@Override
	public String toString() {
		return "Notice [noticeId=" + noticeId + ", fromUserId=" + fromUserId + ", content=" + content + ", challengeId="
				+ challengeId + ", userId=" + userId + ", isCheck=" + isCheck + ", regtime=" + regtime + "]";
	}
	
}

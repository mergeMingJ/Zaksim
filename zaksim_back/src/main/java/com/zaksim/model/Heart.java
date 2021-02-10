package com.zaksim.model;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "회원 찜 목록")
public class Heart {
	private int heartId;
	private int userId;
	private int challengeId;
	
	public Heart() {}

	public Heart(int heartId, int userId, int challengeId) {
		super();
		this.heartId = heartId;
		this.userId = userId;
		this.challengeId = challengeId;
	}

	public int getHeartId() {
		return heartId;
	}

	public void setHeartId(int heartId) {
		this.heartId = heartId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getChallengeId() {
		return challengeId;
	}

	public void setChallengeId(int challengeId) {
		this.challengeId = challengeId;
	}

	@Override
	public String toString() {
		return "Heart [heartId=" + heartId + ", userId=" + userId + ", challengeId=" + challengeId + "]";
	}
	
	
}

package com.zaksim.model;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "챌린지 멤버 정보")
public class Cmember {
	private int cmemberId;
	private int challengeId;
	private int userId;
	private int progress;
	
	public Cmember() {}

	public Cmember(int cmemberId, int challengeId, int userId, int progress) {
		super();
		this.cmemberId = cmemberId;
		this.challengeId = challengeId;
		this.userId = userId;
		this.progress = progress;
	}

	public int getCmemberId() {
		return cmemberId;
	}

	public void setCmemberId(int cmemberId) {
		this.cmemberId = cmemberId;
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

	public int getProgress() {
		return progress;
	}

	public void setProgress(int progress) {
		this.progress = progress;
	}

	@Override
	public String toString() {
		return "Cmember [cmemberId=" + cmemberId + ", challengeId=" + challengeId + ", userId=" + userId + ", progress="
				+ progress + "]";
	}
	
}

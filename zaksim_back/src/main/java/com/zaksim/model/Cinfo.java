package com.zaksim.model;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "챌린지 소개 정보")
public class Cinfo {
	private int challengeId;
	private String guide;
	private String dueTime;
	private String memberCondition;
	private int entryPoint;
	
	public Cinfo() {}

	public Cinfo(int challengeId, String guide, String dueTime, String memberCondition, int entryPoint) {
		super();
		this.challengeId = challengeId;
		this.guide = guide;
		this.dueTime = dueTime;
		this.memberCondition = memberCondition;
		this.entryPoint = entryPoint;
	}

	public int getChallengeId() {
		return challengeId;
	}

	public void setChallengeId(int challengeId) {
		this.challengeId = challengeId;
	}

	public String getGuide() {
		return guide;
	}

	public void setGuide(String guide) {
		this.guide = guide;
	}

	public String getDueTime() {
		return dueTime;
	}

	public void setDueTime(String dueTime) {
		this.dueTime = dueTime;
	}

	public String getMemberCondition() {
		return memberCondition;
	}

	public void setMemberCondition(String memberCondition) {
		this.memberCondition = memberCondition;
	}

	public int getEntryPoint() {
		return entryPoint;
	}

	public void setEntryPoint(int entryPoint) {
		this.entryPoint = entryPoint;
	}

	@Override
	public String toString() {
		return "Cinfo [challengeId=" + challengeId + ", guide=" + guide + ", dueTime=" + dueTime + ", memberCondition="
				+ memberCondition + ", entryPoint=" + entryPoint + "]";
	}
	
}

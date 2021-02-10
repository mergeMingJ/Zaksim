package com.zaksim.model;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "챌린지 소개 정보")
public class Cinfo {
	private int challengeId;
	private String guide;
	private String dueTime;
	private String memberCondition;
	private int entryPoint;
	private String descInfo;
	private String descRec;
	private String descExpert;
	private String descWarn;
	
	public Cinfo() {}

	public Cinfo(int challengeId, String guide, String dueTime, String memberCondition, int entryPoint, String descInfo,
			String descRec, String descExpert, String descWarn) {
		super();
		this.challengeId = challengeId;
		this.guide = guide;
		this.dueTime = dueTime;
		this.memberCondition = memberCondition;
		this.entryPoint = entryPoint;
		this.descInfo = descInfo;
		this.descRec = descRec;
		this.descExpert = descExpert;
		this.descWarn = descWarn;
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

	public String getDescInfo() {
		return descInfo;
	}

	public void setDescInfo(String descInfo) {
		this.descInfo = descInfo;
	}

	public String getDescRec() {
		return descRec;
	}

	public void setDescRec(String descRec) {
		this.descRec = descRec;
	}

	public String getDescExpert() {
		return descExpert;
	}

	public void setDescExpert(String descExpert) {
		this.descExpert = descExpert;
	}

	public String getDescWarn() {
		return descWarn;
	}

	public void setDescWarn(String descWarn) {
		this.descWarn = descWarn;
	}

	@Override
	public String toString() {
		return "Cinfo [challengeId=" + challengeId + ", guide=" + guide + ", dueTime=" + dueTime + ", memberCondition="
				+ memberCondition + ", entryPoint=" + entryPoint + ", descInfo=" + descInfo + ", descRec=" + descRec
				+ ", descExpert=" + descExpert + ", descWarn=" + descWarn + "]";
	}

	
	
}

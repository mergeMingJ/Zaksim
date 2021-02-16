package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "챌린지 정보 & 챌린지 소개 정보")
public class ChallengeInsertInfo {
	// challenge 부분
	private int challengeId;
	private String title;
	private String mission;
	private String summary;
	private int managerId;
	private String managerNickname;
	private int isPublic;
	private int isLive;
	private int categoryId;
	private int maxUser;
	private int nowUser;
	private Date startDate;
	private Date endDate;
	private String hashtag;
	
	// cinfo 부분
	private String guide;
	private String memberCondition;
	private int entryPoint;
	private String descInfo;
	private String descRec;
	private String descExpert;
	private String descWarn;
	
	public ChallengeInsertInfo() {}

	public ChallengeInsertInfo(int challengeId, String title, String mission, String summary, int managerId,
			String managerNickname, int isPublic, int isLive, int categoryId, int maxUser, int nowUser, Date startDate,
			Date endDate, String hashtag, String guide, String memberCondition, int entryPoint, String descInfo,
			String descRec, String descExpert, String descWarn) {
		super();
		this.challengeId = challengeId;
		this.title = title;
		this.mission = mission;
		this.summary = summary;
		this.managerId = managerId;
		this.managerNickname = managerNickname;
		this.isPublic = isPublic;
		this.isLive = isLive;
		this.categoryId = categoryId;
		this.maxUser = maxUser;
		this.nowUser = nowUser;
		this.startDate = startDate;
		this.endDate = endDate;
		this.hashtag = hashtag;
		this.guide = guide;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getMission() {
		return mission;
	}

	public void setMission(String mission) {
		this.mission = mission;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public String getManagerNickname() {
		return managerNickname;
	}

	public void setManagerNickname(String managerNickname) {
		this.managerNickname = managerNickname;
	}

	public int getIsPublic() {
		return isPublic;
	}

	public void setIsPublic(int isPublic) {
		this.isPublic = isPublic;
	}

	public int getIsLive() {
		return isLive;
	}

	public void setIsLive(int isLive) {
		this.isLive = isLive;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public int getMaxUser() {
		return maxUser;
	}

	public void setMaxUser(int maxUser) {
		this.maxUser = maxUser;
	}

	public int getNowUser() {
		return nowUser;
	}

	public void setNowUser(int nowUser) {
		this.nowUser = nowUser;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getHashtag() {
		return hashtag;
	}

	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
	}

	public String getGuide() {
		return guide;
	}

	public void setGuide(String guide) {
		this.guide = guide;
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
		return "ChallengeInsertInfo [challengeId=" + challengeId + ", title=" + title + ", mission=" + mission
				+ ", summary=" + summary + ", managerId=" + managerId + ", managerNickname=" + managerNickname
				+ ", isPublic=" + isPublic + ", isLive=" + isLive + ", categoryId=" + categoryId + ", maxUser="
				+ maxUser + ", nowUser=" + nowUser + ", startDate=" + startDate + ", endDate=" + endDate + ", hashtag="
				+ hashtag + ", guide=" + guide + ", memberCondition=" + memberCondition + ", entryPoint=" + entryPoint
				+ ", descInfo=" + descInfo + ", descRec=" + descRec + ", descExpert=" + descExpert + ", descWarn="
				+ descWarn + "]";
	}
	
	
}

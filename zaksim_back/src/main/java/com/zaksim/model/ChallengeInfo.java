package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "챌린지 인증률 정보")
public class ChallengeInfo {
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
	private int totalProgress;
	private int userProgress;
	private String hashtag;
	private String imgPath;
	
	public ChallengeInfo() {}

	public ChallengeInfo(int challengeId, String title, String mission, String summary, int managerId,
			String managerNickname, int isPublic, int isLive, int categoryId, int maxUser, int nowUser, Date startDate,
			Date endDate, int totalProgress, int userProgress, String hashtag, String imgPath) {
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
		this.totalProgress = totalProgress;
		this.userProgress = userProgress;
		this.hashtag = hashtag;
		this.imgPath = imgPath;
	}
	
	public ChallengeInfo(Challenge challenge) {
		this.challengeId = challenge.getChallengeId();
		this.title = challenge.getTitle();
		this.mission = challenge.getMission();
		this.summary = challenge.getSummary();
		this.managerId = challenge.getManagerId();
		this.managerNickname = challenge.getManagerNickname();
		this.isPublic = challenge.getIsPublic();
		this.isLive = challenge.getIsLive();
		this.categoryId = challenge.getCategoryId();
		this.maxUser = challenge.getMaxUser();
		this.nowUser = challenge.getNowUser();
		this.startDate = challenge.getStartDate();
		this.endDate = challenge.getEndDate();
		this.totalProgress = 0;
		this.userProgress = 0;
		this.hashtag = challenge.getHashtag();
		this.imgPath = challenge.getImgPath();
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

	public int getTotalProgress() {
		return totalProgress;
	}

	public void setTotalProgress(int totalProgress) {
		this.totalProgress = totalProgress;
	}

	public int getUserProgress() {
		return userProgress;
	}

	public void setUserProgress(int userProgress) {
		this.userProgress = userProgress;
	}

	public String getHashtag() {
		return hashtag;
	}

	public void setHashtag(String hashtag) {
		this.hashtag = hashtag;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	@Override
	public String toString() {
		return "ChallengeInfo [challengeId=" + challengeId + ", title=" + title + ", mission=" + mission + ", summary="
				+ summary + ", managerId=" + managerId + ", managerNickname=" + managerNickname + ", isPublic="
				+ isPublic + ", isLive=" + isLive + ", categoryId=" + categoryId + ", maxUser=" + maxUser + ", nowUser="
				+ nowUser + ", startDate=" + startDate + ", endDate=" + endDate + ", totalProgress=" + totalProgress
				+ ", userProgress=" + userProgress + ", hashtag=" + hashtag + ", imgPath=" + imgPath + "]";
	}

	
	
}

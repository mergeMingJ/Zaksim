package com.zaksim.model;

import java.util.Date;

public class Chat {
	private int chatId;
	private int challengeId;
	private int userId;
	private String nickname;
	private String content;
	private Date regtime;
	
	public Chat() {}

	public Chat(int chatId, int challengeId, int userId, String nickname, String content, Date regtime) {
		super();
		this.chatId = chatId;
		this.challengeId = challengeId;
		this.userId = userId;
		this.nickname = nickname;
		this.content = content;
		this.regtime = regtime;
	}

	public int getChatId() {
		return chatId;
	}

	public void setChatId(int chatId) {
		this.chatId = chatId;
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

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
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
		return "Chat [chatId=" + chatId + ", challengeId=" + challengeId + ", userId=" + userId + ", nickname="
				+ nickname + ", content=" + content + ", regtime=" + regtime + "]";
	}

	
	
}

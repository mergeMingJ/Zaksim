package com.zaksim.model;

import java.util.Date;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "회원정보")
public class User {

	private int userId;
	private String email;
	private String password;
	private String nickname;
	private String desc;
	private String profileimgPath;
	private int grade;
	private int point;
	private Date regtime;
	
	public User() {}
	public User(int userId, String email, String password, String nickname, String desc, String profileimgPath,
			int grade, int point, Date regtime) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.nickname = nickname;
		this.desc = desc;
		this.profileimgPath = profileimgPath;
		this.grade = grade;
		this.point = point;
		this.regtime = regtime;
	}
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getProfileimgPath() {
		return profileimgPath;
	}
	public void setProfileimgPath(String profileimgPath) {
		this.profileimgPath = profileimgPath;
	}
	public int getGrade() {
		return grade;
	}
	public void setGrade(int grade) {
		this.grade = grade;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	public Date getRegtime() {
		return regtime;
	}
	public void setRegtime(Date regtime) {
		this.regtime = regtime;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", password=" + password + ", nickname=" + nickname
				+ ", desc=" + desc + ", profileimgPath=" + profileimgPath + ", grade=" + grade + ", point=" + point
				+ ", regtime=" + regtime + "]";
	}
}
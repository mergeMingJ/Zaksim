package com.zaksim.model.service;

import java.util.List;

import com.zaksim.model.Heart;
import com.zaksim.model.Notice;
import com.zaksim.model.User;

public interface UserService {
	public User userlogin(User user) throws Exception;
	public User userinfo(int userId) throws Exception;
	public boolean usersignup(User user) throws Exception;
	public boolean userupdate(User user) throws Exception;
	public boolean userdelete(int userId) throws Exception;

	public List<Notice> noticelist(int userId) throws Exception;
	public boolean noticeinsert(Notice notice) throws Exception;
	public boolean noticeupdate(Notice notice) throws Exception;
	public boolean noticedeleteall(int userId) throws Exception;
	
	public List<Heart> heartlist(int userId) throws Exception;
	public Heart heartinfo(Heart heart) throws Exception;
	public boolean heartinsert(Heart heart) throws Exception;
	public boolean heartdelete(Heart heart) throws Exception;
}

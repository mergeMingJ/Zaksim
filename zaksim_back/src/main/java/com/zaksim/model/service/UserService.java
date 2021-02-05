package com.zaksim.model.service;

import java.util.List;

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
}

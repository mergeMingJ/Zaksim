package com.zaksim.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Notice;
import com.zaksim.model.User;
import com.zaksim.model.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public User userlogin(User user) throws Exception {
		return userMapper.userlogin(user);
	}
	
	@Override
	public User userinfo(int userId) throws Exception {
		return userMapper.userinfo(userId);
	}

	@Override
	public boolean usersignup(User user) throws Exception {
		return userMapper.usersignup(user) == 1;
	}

	@Override
	public boolean userupdate(User user) throws Exception {
		return userMapper.userupdate(user) == 1;
	}

	@Override
	public boolean userdelete(int userId) throws Exception {
		return userMapper.userdelete(userId) == 1;
	}

	@Override
	public List<Notice> noticelist(int userId) throws Exception {
		return userMapper.noticelist(userId);
	}

	@Override
	public boolean noticeinsert(Notice notice) throws Exception {
		return userMapper.noticeinsert(notice) == 1;
	}

	@Override
	public boolean noticeupdate(Notice notice) throws Exception {
		return userMapper.noticeupdate(notice) == 1;
	}

}

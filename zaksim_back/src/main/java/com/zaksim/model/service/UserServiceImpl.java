package com.zaksim.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Heart;
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
	public int noticenewcount(int userId) throws Exception{
		return userMapper.noticenewcount(userId);
	}

	@Override
	public boolean noticeinsert(Notice notice) throws Exception {
		return userMapper.noticeinsert(notice) == 1;
	}

	@Override
	public boolean noticeupdate(int noticeId) throws Exception {
		return userMapper.noticeupdate(noticeId) == 1;
	}
	
	@Override
	public void noticereadall(int userId) throws Exception{
		List<Notice> list = userMapper.noticelist(userId);
		for(int i = 0; i < list.size(); i++) {
			Notice notice = list.get(i);
			int noticeId = notice.getNoticeId();
			int isCheck = notice.getIsCheck();
			if(isCheck == 0) {
				userMapper.noticeupdate(noticeId);
			}
		}
	}
	
	@Override
	public boolean noticedeleteall(int userId) throws Exception {
		return userMapper.noticedeleteall(userId) == 1;
	}

	@Override
	public List<Heart> heartlist(int userId) throws Exception {
		return userMapper.heartlist(userId);
	}

	@Override
	public Heart heartinfo(Heart heart) throws Exception {
		return userMapper.heartinfo(heart);
	}

	@Override
	public boolean heartinsert(Heart heart) throws Exception {
		return userMapper.heartinsert(heart) == 1;
	}

	@Override
	public boolean heartdelete(Heart heart) throws Exception {
		return userMapper.heartdelete(heart) == 1;
	}

}

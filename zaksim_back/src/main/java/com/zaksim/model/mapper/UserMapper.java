package com.zaksim.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Notice;
import com.zaksim.model.User;

@Mapper
public interface UserMapper {
	User userlogin(User user) throws Exception;
	User userinfo(int userId) throws Exception;
	int usersignup(User user) throws Exception;
	int userupdate(User user) throws Exception;
	int userdelete(int userId) throws Exception;
	
	List<Notice> noticelist(int userId) throws Exception;
	int noticeinsert(Notice notice) throws Exception;
	int noticeupdate(Notice notice) throws Exception;
}

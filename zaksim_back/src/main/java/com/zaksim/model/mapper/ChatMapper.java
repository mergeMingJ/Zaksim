package com.zaksim.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Chat;

@Mapper
public interface ChatMapper {
	List<Chat> chatlist(int challengeId) throws Exception;
	int chatinsert(Chat chat) throws Exception;
	int chatdeleteall(int challengeId) throws Exception;
}

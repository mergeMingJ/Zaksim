package com.zaksim.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Chat;
import com.zaksim.model.mapper.ChatMapper;

@Service
public class ChatServiceImpl implements ChatService {

	@Autowired
	private ChatMapper chatMapper;
	
	@Override
	public List<Chat> chatlist(int challengeId) throws Exception {
		return chatMapper.chatlist(challengeId);
	}

	@Override
	public boolean chatinsert(Chat chat) throws Exception {
		return chatMapper.chatinsert(chat) == 1;
	}

	@Override
	public boolean chatdeleteall(int challengeId) throws Exception {
		return chatMapper.chatdeleteall(challengeId) > 0;
	}

}

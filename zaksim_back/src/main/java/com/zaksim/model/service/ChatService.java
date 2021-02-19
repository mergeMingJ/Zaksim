package com.zaksim.model.service;

import java.util.List;

import com.zaksim.model.Chat;

public interface ChatService {
	public List<Chat> chatlist(int challengeId) throws Exception;
	public boolean chatinsert(Chat chat) throws Exception;
	public boolean chatdeleteall(int challengeId) throws Exception;
}

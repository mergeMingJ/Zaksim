package com.zaksim.model.service;

import java.util.List;
import java.util.Map;

import com.zaksim.model.Category;
import com.zaksim.model.Challenge;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;

public interface ChallengeService {
	public List<Challenge> challengelist();
	public List<Challenge> challengeIng(int userId) throws Exception;
	public List<Challenge> challengeDone(int userId) throws Exception;
	public List<Challenge> challengeWish(int userId) throws Exception;
	public List<Challenge> challengeoption(Challenge challenge) throws Exception;
	public Challenge challengeinfo(int challengeId) throws Exception;
	public boolean challengeinsert(Challenge challenge) throws Exception;
	public boolean challengeupdate(Challenge challenge) throws Exception;
	public boolean challengedelete(int challengeId) throws Exception;
	
	public Cinfo cinfoinfo(int challengeId) throws Exception;
	public boolean cinfoinsert(Cinfo cinfo) throws Exception;
	public boolean cinfoupdate(Cinfo cinfo) throws Exception;
	public boolean cinfodelete(int challengeId) throws Exception;
	
	public List<Cmember> cmemberlist(int challengeId) throws Exception;
	public Cmember cmemberinfo(Cmember cmember) throws Exception;
	public boolean cmemberinsert(Cmember cmember) throws Exception;
	public boolean cmemberupdate(Cmember cmember) throws Exception;
	public boolean cmemberdelete(Cmember cmember) throws Exception;
	public boolean cmemberdeleteall(int challengeId) throws Exception;
	
	public List<Category> categorylist();
	public int challengecount(int categoryId) throws Exception;
}

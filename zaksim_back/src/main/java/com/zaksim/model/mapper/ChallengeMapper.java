package com.zaksim.model.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Category;
import com.zaksim.model.Challenge;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;

@Mapper
public interface ChallengeMapper {
	List<Challenge> challengelist();
	List<Challenge> challengeIngDone(int userId) throws Exception;
	List<Challenge> challengeWish(int userId) throws Exception;
	List<Challenge> challengeoption(Challenge challenge) throws Exception;
	Challenge challengeinfo(int challengeId) throws Exception;
	int challengeinsert(Challenge challenge) throws Exception;
	int challengeupdate(Challenge challenge) throws Exception;
	int challengedelete(int challengeId) throws Exception;

	Cinfo cinfoinfo(int challengeId) throws Exception;
	int cinfoinsert(Cinfo cinfo) throws Exception;
	int cinfoupdate(Cinfo cinfo) throws Exception;
	int cinfodelete(int challengeId) throws Exception;
	
	List<Cmember> cmemberlist(int challengeId) throws Exception;
	int cmembercount(int challengeId) throws Exception;
	Cmember cmemberinfo(Cmember cmember) throws Exception;
	int cmemberinsert(Cmember cmember) throws Exception;
	int cmemberupdate(Cmember cmember) throws Exception;
	int cmemberdelete(Cmember cmember) throws Exception;
	int cmemberdeleteall(int challengeId) throws Exception;
	
	List<Category> categorylist();
	int challengecount(int categoryId) throws Exception;
}

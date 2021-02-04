package com.zaksim.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Challenge;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;

@Mapper
public interface ChallengeMapper {
	List<Challenge> challengelist();
	Challenge challengeinfo(int challengeId) throws Exception;
	int challengeinsert(Challenge challenge) throws Exception;
	int challengeupdate(Challenge challenge) throws Exception;
	int challengedelete(int challengeId) throws Exception;

	Cinfo cinfoinfo(int challengeId) throws Exception;
	int cinfoinsert(Cinfo cinfo) throws Exception;
	int cinfoupdate(Cinfo cinfo) throws Exception;
	int cinfodelete(int challengeId) throws Exception;
	
	List<Cmember> cmemberlist(int challengeId) throws Exception;
	int cmemberinsert(Cmember cmember) throws Exception;
	int cmemberupdate(Cmember cmember) throws Exception;
	int cmemberdelete(Cmember cmember) throws Exception;
	int cmemberdeleteall(int challengeId) throws Exception;
}

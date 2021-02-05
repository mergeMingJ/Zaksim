package com.zaksim.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Category;
import com.zaksim.model.Challenge;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;
import com.zaksim.model.mapper.ChallengeMapper;

@Service
public class ChallengeServiceImpl implements ChallengeService {

	@Autowired
	private ChallengeMapper challengeMapper;
	
	@Override
	public List<Challenge> challengelist() {
		return challengeMapper.challengelist();
	}
	
	@Override
	public List<Challenge> challengeoption(Challenge challenge) throws Exception{
		return challengeMapper.challengeoption(challenge);
	}

	@Override
	public Challenge challengeinfo(int challengeId) throws Exception {
		return challengeMapper.challengeinfo(challengeId);
	}

	@Override
	public boolean challengeinsert(Challenge challenge) throws Exception {
		return challengeMapper.challengeinsert(challenge) == 1;
	}

	@Override
	public boolean challengeupdate(Challenge challenge) throws Exception {
		return challengeMapper.challengeupdate(challenge) == 1;
	}

	@Override
	public boolean challengedelete(int challengeId) throws Exception {
		return challengeMapper.challengedelete(challengeId) == 1;
	}

	@Override
	public Cinfo cinfoinfo(int challengeId) throws Exception {
		return challengeMapper.cinfoinfo(challengeId);
	}

	@Override
	public boolean cinfoinsert(Cinfo cinfo) throws Exception {
		return challengeMapper.cinfoinsert(cinfo) == 1;
	}

	@Override
	public boolean cinfoupdate(Cinfo cinfo) throws Exception {
		return challengeMapper.cinfoupdate(cinfo) == 1;
	}

	@Override
	public boolean cinfodelete(int challengeId) throws Exception {
		return challengeMapper.cinfodelete(challengeId) == 1;
	}

	@Override
	public List<Cmember> cmemberlist(int challengeId) throws Exception {
		return challengeMapper.cmemberlist(challengeId);
	}

	@Override
	public boolean cmemberinsert(Cmember cmember) throws Exception {
		return challengeMapper.cmemberinsert(cmember) == 1;
	}

	@Override
	public boolean cmemberupdate(Cmember cmember) throws Exception {
		return challengeMapper.cmemberupdate(cmember) == 1;
	}

	@Override
	public boolean cmemberdelete(Cmember cmember) throws Exception {
		return challengeMapper.cmemberdelete(cmember) == 1;
	}

	@Override
	public boolean cmemberdeleteall(int challengeId) throws Exception {
		return challengeMapper.cmemberdeleteall(challengeId) == 1;
	}

	@Override
	public List<Category> categorylist() {
		return challengeMapper.categorylist();
	}

	@Override
	public int challengecount(int categoryId) throws Exception {
		return challengeMapper.challengecount(categoryId);
	}

}

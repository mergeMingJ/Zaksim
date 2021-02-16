package com.zaksim.model.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Category;
import com.zaksim.model.Challenge;
import com.zaksim.model.ChallengeInfo;
import com.zaksim.model.Checkfeed;
import com.zaksim.model.Cinfo;
import com.zaksim.model.Cmember;
import com.zaksim.model.mapper.ChallengeMapper;
import com.zaksim.model.mapper.FeedMapper;

@Service
public class ChallengeServiceImpl implements ChallengeService {

	@Autowired
	private ChallengeMapper challengeMapper;
	
	@Autowired
	private FeedMapper feedMapper;
	
	@Override
	public List<Challenge> challengelist() {
		return challengeMapper.challengelist();
	}
	
	@Override
	public List<Challenge> challengelistreverse(){
		List<Challenge> list = challengeMapper.challengelist();
		List<Challenge> newList = new ArrayList<>();
		if(list.size() == 0) return list;
		for(int i = list.size()-1; i >= 0 ; i--) {
			Challenge challenge = list.get(i);
			newList.add(challenge);
		}
		return newList;
	}
	
	@Override
	public List<String> hashtagList(List<Challenge> list) throws Exception{
		List<String> hlist = new ArrayList<>();
		for(int i = 0; i < list.size(); i++) {
			Challenge challenge = list.get(i);
			String hashtag = challenge.getHashtag();
			if(hashtag == null || hashtag.equals("")) continue;
			String[] hArray = hashtag.split(",");
			for(int j = 0; j < hArray.length; j++) {
				if(!hlist.contains(hArray[j])) {
					hlist.add(hArray[j]);
				}
			}
		}
		return hlist;
	}
	
	@Override
	public List<Challenge> challengeHashtag(List<Challenge> list, String hashtag) throws Exception{
		if(hashtag == null || hashtag.equals("")) return list;
		List<Challenge> newList = new ArrayList<>();
		String[] hArray = hashtag.split(",");
		for(int i = 0; i < list.size(); i++) {
			Challenge challenge = list.get(i);
			String hStr = challenge.getHashtag();
			if(hStr == null || hStr.equals("")) continue;
			boolean exist = false;
			for(int j = 0; j < hArray.length; j++) {
				if(hStr.contains(hArray[j])) {
					exist = true;
					break;
				}
			}
			if(exist) newList.add(challenge);
		}
		return newList;
	}
	
	@Override
	public List<Challenge> challengeUserList(int userId) throws Exception {
		return challengeMapper.challengeUserList(userId);
	}
	
	@Override
	public List<Challenge> challengeBest(List<Cmember> clist) throws Exception{
		List<Challenge> list = new ArrayList<>();
        
        for(int i = 0; i < clist.size(); i++) {
        	Cmember c = clist.get(i);
        	Challenge challenge = challengeinfo(c.getChallengeId());
        	challenge.setNowUser(c.getProgress());
        	list.add(challenge);
        	if(list.size() >= 4) break;
        }
        
        return list;
	}

	@Override
	public List<Challenge> challengeIng(int userId) throws Exception {
		List<Challenge> list = challengeMapper.challengeIngDone(userId);;
		List<Challenge> inglist = new ArrayList<>();
		Date nowTime = new Date();
		for(int i = 0; i < list.size(); i++) {
			Challenge challenge = list.get(i);
			if(nowTime.before(challenge.getEndDate())) inglist.add(challenge);
		}
		return inglist;
	}
	
	@Override
	public List<Challenge> challengeDone(int userId) throws Exception {
		List<Challenge> list = challengeMapper.challengeIngDone(userId);;
		List<Challenge> donelist = new ArrayList<>();
		Date nowTime = new Date();
		for(int i = 0; i < list.size(); i++) {
			Challenge challenge = list.get(i);
			if(nowTime.after(challenge.getEndDate())) donelist.add(challenge);
		}
		return donelist;
	}

	@Override
	public List<Challenge> challengeWish(int userId) throws Exception {
		return challengeMapper.challengeWish(userId);
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
	public int cmembercount(int challengeId) throws Exception{
		return challengeMapper.cmembercount(challengeId);
	}
	
	@Override
	public List<Cmember> cmemberOrder(){
		return challengeMapper.cmemberOrder();
	}
	
	@Override
	public Cmember cmemberinfo(Cmember cmember) throws Exception {
		return challengeMapper.cmemberinfo(cmember);
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

	@Override
	public List<ChallengeInfo> setNowUser(List<Challenge> list, int userId) throws Exception {
		List<ChallengeInfo> newList = new ArrayList<>();
        for(int i = 0; i < list.size(); i++) {
        	Challenge challenge = list.get(i);
        	ChallengeInfo chObj = challengeconvert(challenge,userId);
        	
        	newList.add(chObj); // 리스트에 추가
        }
        return newList;
	}
	
	@Override
	public ChallengeInfo challengeconvert(Challenge challenge, int userId) throws Exception{
		ChallengeInfo chObj = new ChallengeInfo(challenge);
    	int nowUser = challengeMapper.cmembercount(chObj.getChallengeId());
    	chObj.setNowUser(nowUser); // 현재 참여 인원 가져오기
    	
    	int maxProgress = dateDiff(chObj.getStartDate(),chObj.getEndDate()); // 최종 진행률
    	
    	Date nowTime = new Date();
    	
    	int totalProgress = 0; // 현재 진행률
    	if(nowTime.after(chObj.getEndDate())) totalProgress = dateDiff(chObj.getStartDate(),chObj.getEndDate());
    	else totalProgress = dateDiff(chObj.getStartDate(),nowTime);
    	chObj.setTotalProgress(totalProgress * 100 / maxProgress);
    	
    	Checkfeed fObj = new Checkfeed();
    	fObj.setChallengeId(chObj.getChallengeId());
    	fObj.setUserId(userId);
    	List<Checkfeed> clist = feedMapper.userfeedlist(fObj);
    	int userProgress = clist.size() * 100 / maxProgress;
    	if(userProgress < 0) userProgress = 0;
    	chObj.setUserProgress(userProgress);
    	return chObj;
	}
	
	@Override
	public List<Challenge> categoryUserList(int userId) throws Exception {
		return challengeMapper.categoryUserList(userId);
	}
	
	private int dateDiff(Date date1, Date date2) {
		long deltime = date2.getTime() - date1.getTime();
		long deldate = deltime / (24 * 60 * 60 * 1000);
		return (int)(deldate + 1);
	}
}

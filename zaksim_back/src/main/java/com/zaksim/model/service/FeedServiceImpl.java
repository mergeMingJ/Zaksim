package com.zaksim.model.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zaksim.model.Checkfeed;
import com.zaksim.model.Fcomment;
import com.zaksim.model.mapper.FeedMapper;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedMapper feedMapper;
	
	@Override
	public List<Checkfeed> feedlist(int challengeId) throws Exception {
		return feedMapper.feedlist(challengeId);
	}
	
	@Override
	public List<Checkfeed> userfeedlist(int challengeId, int userId) throws Exception{
		Checkfeed checkfeed = new Checkfeed();
		checkfeed.setChallengeId(challengeId);
		checkfeed.setUserId(userId);
		List<Checkfeed> list = feedMapper.userfeedlist(checkfeed);
		return list;
	}
	
	@Override
	public List<Checkfeed> feedCalander(int userId) throws Exception{
		return feedMapper.feedCalander(userId);
	}

	@Override
	public Checkfeed feedinfo(int feedId) throws Exception {
		return feedMapper.feedinfo(feedId);
	}

	@Override
	public boolean feedinsert(Checkfeed checkfeed) throws Exception {
		return feedMapper.feedinsert(checkfeed) == 1;
	}

	@Override
	public boolean feedupdate(Checkfeed checkfeed) throws Exception {
		return feedMapper.feedupdate(checkfeed) == 1;
	}

	@Override
	public boolean feeddelete(int feedId) throws Exception {
		return feedMapper.feeddelete(feedId) == 1;
	}
	
	@Override
	public boolean feeddeleteall(int challengeId) throws Exception	{
		return feedMapper.feeddeleteall(challengeId) == 1;
	}

	@Override
	public List<Fcomment> fcommentlist(int feedId) throws Exception {
		return feedMapper.fcommentlist(feedId);
	}

	@Override
	public boolean fcommentinsert(Fcomment fcomment) throws Exception {
		return feedMapper.fcommentinsert(fcomment) == 1;
	}

	@Override
	public boolean fcommentupdate(Fcomment fcomment) throws Exception {
		return feedMapper.fcommentupdate(fcomment) == 1;
	}

	@Override
	public boolean fcommentdelete(int fcommentId) throws Exception {
		return feedMapper.fcommentdelete(fcommentId) == 1;
	}

	@Override
	public boolean fcommentdeleteall(int feedId) throws Exception {
		return feedMapper.fcommentdeleteall(feedId) == 1;
	}
	
	@Override
	public boolean sameDate(Date date) throws Exception{
		Date nowTime = new Date();
		Calendar cal1 = Calendar.getInstance();
		Calendar cal2 = Calendar.getInstance();
		cal1.setTime(date);
		cal2.setTime(nowTime);
		boolean sameDay = cal1.get(Calendar.DAY_OF_YEAR) == cal2.get(Calendar.DAY_OF_YEAR) &&
		                  cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR);
		return sameDay;
	}

}

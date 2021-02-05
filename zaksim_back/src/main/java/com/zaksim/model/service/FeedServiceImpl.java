package com.zaksim.model.service;

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

}

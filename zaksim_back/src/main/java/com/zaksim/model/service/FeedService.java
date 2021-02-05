package com.zaksim.model.service;

import java.util.List;

import com.zaksim.model.Checkfeed;
import com.zaksim.model.Fcomment;

public interface FeedService {
	public List<Checkfeed> feedlist(int challengeId) throws Exception;
	public Checkfeed feedinfo(int feedId) throws Exception;
	public boolean feedinsert(Checkfeed checkfeed) throws Exception;
	public boolean feedupdate(Checkfeed checkfeed) throws Exception;
	public boolean feeddelete(int feedId) throws Exception;
	public boolean feeddeleteall(int challengeId) throws Exception;
	
	public List<Fcomment> fcommentlist(int feedId) throws Exception;
	public boolean fcommentinsert(Fcomment fcomment) throws Exception;
	public boolean fcommentupdate(Fcomment fcomment) throws Exception;
	public boolean fcommentdelete(int fcommentId) throws Exception;
	public boolean fcommentdeleteall(int feedId) throws Exception;
}

package com.zaksim.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zaksim.model.Checkfeed;
import com.zaksim.model.Fcomment;

@Mapper
public interface FeedMapper {
	List<Checkfeed> feedlist(int challengeId) throws Exception;
	List<Checkfeed> userfeedlist(Checkfeed checkfeed) throws Exception;
	List<Checkfeed> feedCalander(int userId) throws Exception;
	Checkfeed feedinfo(int feedId) throws Exception;
	int feedinsert(Checkfeed checkfeed) throws Exception;
	int feedupdate(Checkfeed checkfeed) throws Exception;
	int feeddelete(int feedId) throws Exception;
	int feeddeleteall(int challengeId) throws Exception;
	
	List<Fcomment> fcommentlist(int feedId) throws Exception;
	int fcommentinsert(Fcomment fcomment) throws Exception;
	int fcommentupdate(Fcomment fcomment) throws Exception;
	int fcommentdelete(int fcommentId) throws Exception;
	int fcommentdeleteall(int feedId) throws Exception;
}

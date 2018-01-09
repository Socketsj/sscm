package com.sscm.service;

import java.util.List;

import com.sscm.entity.Course;

public interface CourseService {
	public void delete(int cno);
	public void update(Course course);
	public void add(Course course);
	public int getNum();
	public int getByArgNum(String cname,String type);
	public List<Course> getCourse(int start,int end);
	public List<Course> getByArg(int start,int end,String cname,String type);
	public List<Course> getByNum(String cno);
}

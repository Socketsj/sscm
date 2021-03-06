package com.sscm.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.sscm.entity.DatatablesViewPage;
import com.sscm.entity.Teacher;

public interface TeacherService {
	public Teacher login(String username,String password);
	public int getNum();
	public int getNumByArgs(String tname,String tdept,String sdate,String edate);
	public List<Teacher> getAll(int start,int end);
	public List<Teacher> getByNo(String tno);
	public List<Teacher> getByArg(int start,int end,String tname,String tdept,String sdate,String edate);
	public void add(Teacher teacher) throws DuplicateKeyException;
	public void update(Teacher teacher);
	public void delete(String tno);
	public void changepwd(String tno, String pwd);
	public DatatablesViewPage<Teacher> queryTeachers(int start,int end,String tname,String tdept,String sdate,String edate);
	public DatatablesViewPage<Teacher> queryTeachers(String tno);
}

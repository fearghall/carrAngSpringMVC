package com.carr.springmvc.model;

//import java.text.DateFormat;
//import java.text.SimpleDateFormat;
//import java.util.Date;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class BookingForm {
	private String longname;
	String phone;
	private String comment;
	private String checkin;
	private String checkout;
	private String emailAddr;
	private int numrooms;
	private int numpeeps;

	boolean mailSent;
	
	public String getLongname() {
		return longname;
	}
	public void setLongname(String longname) {
		this.longname = longname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public int getNumrooms() {
		return numrooms;
	}	
	public void setNumrooms(int numrooms) {
		this.numrooms = numrooms;
	}
	public int getNumpeeps() {
		return numpeeps;
	}
	public void setNumpeeps(int numpeeps) {
		this.numpeeps = numpeeps;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getCheckin() {
		return checkin;
	}
	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}
	public String getCheckout() {
		return checkout;
	}
	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}
	public String getEmailAddr() {
		return emailAddr;
	}
	public void setEmailAddr(String emailAddr) {
		this.emailAddr = emailAddr;
	}
	public boolean isMailSent() {
		return mailSent;
	}
	public void setMailSent(boolean mailSent) {
		this.mailSent = mailSent;
	}
	
	/*private Date getDateFromString(String dateString) {
		try {
			DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
			Date date = df.parse(dateString);
			return date;
		} catch (Exception e) {
			//log.info("getDateFromString parse issue " +e.toString());
			throw new RuntimeException("Date parse Exception");
		}
	}*/
}
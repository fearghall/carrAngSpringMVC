package com.carr.springmvc.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;
import com.carr.springmvc.model.BookingForm;

@Service("mailService")
public class SendMailSSLService {
	static Logger logger = Logger.getLogger(SendMailSSLService.class.getName());
	Properties props = new Properties();

	public JavaMailSender getMailSender() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		InputStream is = null;
		try {
			is = new FileInputStream(new File("C:/spring-config.properties"));
			props.load(is);

			// Using gmail
			mailSender.setHost("smtp.gmail.com");
			mailSender.setPort(587);
			mailSender.setUsername(props.getProperty("mail.send.emailer"));
			mailSender.setPassword(props.getProperty("mail.send.password"));

			Properties javaMailProperties = new Properties();
			javaMailProperties.put("mail.smtp.starttls.enable", "true");
			javaMailProperties.put("mail.smtp.auth", "true");
			javaMailProperties.put("mail.transport.protocol", "smtp");
			// Needed for authentication reasons
			javaMailProperties.put("mail.smtp.ssl.trust", "smtp.gmail.com");
			javaMailProperties.put("mail.debug", "true");// Prints out everything on screen
			mailSender.setJavaMailProperties(javaMailProperties);
		} catch (IOException e) {
			logger.info("SendMailSSL sendMail Exception Thrown");
			logger.info("SendMailSSL sendMail " + e.toString());
			throw new RuntimeException(e);
		}
		return mailSender;
	}

	public boolean sendMail(BookingForm cust) {
		boolean sucessStatus = false;
		logger.info("Entering SendMailSSL sendMail : ");
		SimpleMailMessage message = new SimpleMailMessage();
		MailSender mailSender= getMailSender();
		
		message.setFrom(cust.getEmailAddr());
		message.setSubject("Carraroe House Online Booking");
		message.setText("A booking request has been made via the Carraroe House Website.\n\n "
				+ "The details are as follows: \n\n" + "Booking Name: " + cust.getLongname() + "\nCheck in date: "
				+ cust.getCheckin() + "\nCheck out date: " + cust.getCheckout() + "\nPhone Number : " + cust.getPhone()
				+ "\nGuest email address : " + cust.getEmailAddr() + "\nGuest number: " + cust.getNumpeeps()
				+ "\nGuest rooms: " + cust.getNumrooms() + "\nAdditional Comments: " + cust.getComment() + "");
		
		if(props.getProperty("mail.send.to.mam").equalsIgnoreCase("Y")) {
			message.setTo(props.getProperty("mail.to.address.home"));		
			System.out.println(message.toString());
			mailSender.send(message);
		}
		//Send to myself as well
		message.setTo(props.getProperty("mail.to.address.backup"));		
		mailSender.send(message);
		logger.info("Exiting SendMailSSL sendMail : ");
		sucessStatus = true;
		return sucessStatus;
	}
}
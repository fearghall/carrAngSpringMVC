package com.carr.springmvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.carr.springmvc.model.BookingForm;
import com.carr.springmvc.service.SendMailSSLService;
import org.apache.log4j.Logger;

@RestController
public class CarraroeBookingController {
	static Logger log = Logger.getLogger(CarraroeBookingController.class.getName());

	@Autowired
	SendMailSSLService mailService;  //Service which will send the email
	
	@RequestMapping(value = "/chouse/post", method = RequestMethod.POST, consumes="application/json")   
	public ResponseEntity<Void> processThisJSON(@RequestBody BookingForm form) {
		boolean sucessStatus = false;
		try {
			sucessStatus = mailService.sendMail(form);			
		} catch (Exception e) {
			log.info("CHRestService processThisJSON Exception Thrown");
			log.info(e.toString());
		}
		log.info("Data Received @POST @Path/post @Consumes MediaType.APPLICATION_JSON Formdata:: " + form.toString());
		if (sucessStatus) {
			HttpHeaders headers = new HttpHeaders();
	        return new ResponseEntity<Void>(headers, HttpStatus.OK);
		} else {
			//Return error status
			HttpHeaders headers = new HttpHeaders();
	        return new ResponseEntity<Void>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
}
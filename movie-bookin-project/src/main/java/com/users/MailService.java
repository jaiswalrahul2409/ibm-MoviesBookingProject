package com.users;

import java.util.Date;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService implements Mail{

	@Autowired
	private JavaMailSender javaMailSender;
	@Override
	public void send(String toAddress, String subject, String content) throws Exception{
		MimeMessage mimeMessage=javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,true);
		mimeMessageHelper.setTo(toAddress);
		mimeMessageHelper.setSubject(subject);
		mimeMessageHelper.setText(content);
		mimeMessageHelper.setSentDate(new Date());
		javaMailSender.send(mimeMessage);
	}

}


package com.douzone.frontdev.ch08.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="xmlresult")
public class XmlResult {
	private String result;  // success 이거나 fail
	private Object data;    //성공이면 set data, fail이면 null임
	private String message; // result가 fail이면 message가 set
	
	private XmlResult() {
		
	}

	private XmlResult(Object data) {
		result = "success";
		this.data = data;
	}

	private XmlResult(String message) {
		result = "fail";
		this.message = message;
	}
	
	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "JsonResult [result=" + result + ", data=" + data + ", message=" + message + "]";
	}

	public static XmlResult success(Object data) {
		return new XmlResult(data);
	}

	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}
	
	
	
}

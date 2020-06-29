


package com.qa.tests;


import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class ApiTest {

	String URI="https://dog.ceo/api";

	@Test
	public void apitesting() throws InterruptedException {

		//https://dog.ceo/api/breeds/list/all
		RestAssured.baseURI=URI;
		Thread.sleep(3000);
		RequestSpecification httprequest=RestAssured.given();
		Response response=httprequest.request(Method.GET,"/breeds/list/all");
		Thread.sleep(2000);
		String responsebody=response.getBody().asString();
		Thread.sleep(3000);
		System.out.println("All Breeds:   "+ responsebody);
		Assert.assertEquals(responsebody.contains("retriever"), true,"response body contains Retriever");
		System.out.println("Retriever is within the list ");

	}


	@Test
	public void retrieverbreed() throws InterruptedException {

		//https://dog.ceo/api/breed/retriever/list
		RestAssured.baseURI=URI;
		Thread.sleep(3000);
		RequestSpecification httprequest=RestAssured.given();
		Response response=httprequest.request(Method.GET,"/breed/retriever/list");
		Thread.sleep(2000);
		String responsebody=response.getBody().asString();
		Thread.sleep(3000);
		System.out.println("Retriever Breed list:   "+ responsebody);

	}

	@Test
	public void subbreedretriever() throws InterruptedException {

		//https://dog.ceo/api/breed/retriever/golden/images/random

		RestAssured.baseURI=URI;
		Thread.sleep(3000);
		RequestSpecification httprequest=RestAssured.given();
		Response response=httprequest.request(Method.GET,"/breed/retriever/golden/images/random");
		Thread.sleep(2000);
		String responsebody=response.getBody().asString();
		Thread.sleep(3000);
		System.out.println("SubBreed Retriever:   "+ responsebody);


	}

}









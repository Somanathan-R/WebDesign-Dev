package com.example.demo.service;

import org.springframework.stereotype.Service;

@Service
public class DemoService {
public Integer getData(Integer a, Integer b)
{
	Integer c=a+b;
	return c;
}
}

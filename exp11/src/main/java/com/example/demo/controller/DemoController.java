package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.DemoService;

@RestController
@RequestMapping
public class DemoController {
@Autowired
DemoService demoService;
@GetMapping("/index")
public Integer getData(@RequestParam Integer a, @RequestParam Integer b) {
	return demoService.getData(a, b);
}

}

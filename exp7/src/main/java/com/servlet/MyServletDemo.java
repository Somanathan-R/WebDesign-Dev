package com.servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class to create Http Servlet
public class MyServletDemo extends HttpServlet {

   public void doGet(HttpServletRequest request, 
      HttpServletResponse response)
      throws ServletException, IOException 
   {
		   response.setContentType("text/html");

		   int G1 = Integer.parseInt(request.getParameter("G1"));

		   int G2 = Integer.parseInt(request.getParameter("G2"));

		   int G3 = Integer.parseInt(request.getParameter("G3"));

		   int G4 = Integer.parseInt(request.getParameter("G4"));

		   int G5 = Integer.parseInt(request.getParameter("G5"));


		   int avg = (G1+G2+G3+G4+G5)/5;

		   PrintWriter obj = response.getWriter();

		   obj.append("<h1>Grade:"+calculateGrade(avg)+"</h1>");


		   }


		   private char calculateGrade(int score) {

		   if (score >= 90) return 'A';

		   else if (score >= 80) return 'B';

		   else if (score >= 70) return 'C';

		   else if (score >= 60) return 'D';

		   else return 'F';

		   }



//      // Setting up the content type of webpage
//      response.setContentType("text/html");

//      // Writing message to the web page
//      PrintWriter out = response.getWriter();
//      out.println("<h1>" + "som" + "</h1>");
   }

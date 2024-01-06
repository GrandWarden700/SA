<%@ page import="java.io.*" %>
<%
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    
    String filePath = application.getRealPath("/sa/users.txt");
    try (BufferedWriter bw = new BufferedWriter(new FileWriter(filePath, true))) {
        bw.write( "\r\n" + username + "," + password );  
        bw.newLine();
        out.print("User registered successfully!");
    } catch (IOException e) {
        out.print("Error: " + e);  
    }
%>
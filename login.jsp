<%@ page import="java.io.BufferedReader"%>
<%@ page import="java.io.FileReader"%>

<%
    String filePath = application.getRealPath("/sa/users.txt");

    String username = request.getParameter("username");
    String password = request.getParameter("password");

    try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
        
        String line;
        while ((line = br.readLine()) != null) {
        
            String[] user = line.split(",");
            String savedUsername = user[0];
            String savedPassword = user[1];
            
            if (username.equals(savedUsername) && password.equals(savedPassword)) {
%>
                <h2>Welcome <%= username %> </h2>
<%
                return;
            } 
        }
        
%>
        <h2>Login failed</h2>
<%
        
    } catch (Exception e) {
        out.print("錯誤:" + e.getMessage());
    }
%>
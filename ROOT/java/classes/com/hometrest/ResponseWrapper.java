package com.hometrest;

import java.io.PrintWriter;
import java.io.StringWriter;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletResponseWrapper;

public class ResponseWrapper extends HttpServletResponseWrapper {

    private StringWriter buffer;

    public ResponseWrapper(HttpServletResponse response) {
        super(response);
        buffer = new StringWriter();
    }

    public PrintWriter getWriter() {
        return new PrintWriter(buffer);
    }

    public String getOutput() {
        return buffer.toString();
    }
}

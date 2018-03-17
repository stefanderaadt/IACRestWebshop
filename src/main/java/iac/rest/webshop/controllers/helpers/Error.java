package iac.rest.webshop.controllers.helpers;

public class Error {
    private String title;

    private String message;

    public Error(String title, String message) {
        this.title = title;
        this.message = message;
    }
}

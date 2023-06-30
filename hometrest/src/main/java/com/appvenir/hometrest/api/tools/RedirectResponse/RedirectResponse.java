package com.appvenir.hometrest.api.tools.RedirectResponse;

import org.springframework.stereotype.Component;

@Component
public class RedirectResponse {

      private boolean redirect;
      private String redirectLink;

    // Getters and setters

    public boolean isRedirect() {
        return redirect;
    }

    public void setRedirect(boolean redirect) {
        this.redirect = redirect;
    }

    public String getRedirectLink() {
        return redirectLink;
    }

    public void setRedirectLink(String redirectLink) {
        this.redirectLink = redirectLink;
    }
}

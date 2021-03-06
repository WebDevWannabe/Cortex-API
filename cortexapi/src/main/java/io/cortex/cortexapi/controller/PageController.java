package io.cortex.cortexapi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {

    @RequestMapping("/")
    public String showIndexPage() {
        return "index";
    }

    @RequestMapping("/use-case")
    public String showUseCasesPage() {
        return "use-case";
    }

    @RequestMapping("/support")
    public String showSupportPage() {
        return "support";
    }

    @RequestMapping("/about")
    public String showAboutPage() {
        return "about";
    }

    @RequestMapping("/sign-in")
    public String showSignInPage() {
        //get data
        return "sign-in";
    }

    @RequestMapping("/try-it")
    public String showTryItPage() {
        return "try-it";
    }
}

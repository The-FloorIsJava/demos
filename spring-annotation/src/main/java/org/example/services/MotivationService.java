package org.example.services;

import org.springframework.stereotype.Component;

@Component // spring goes ahead and makes an instance of this object, defaulted as a singleton BEAN
public class MotivationService {

    public MotivationService(){
        System.out.println("Constructing a motivation service....");
    }
    public String provideMotivationForTheThing(){
        return "Don't quit, suffer now and live the rest of your life like a champion!";
    }
}

package org.example.models;

import org.example.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PreDestroy;

@Component("myCoach")
public class BaseballCoach implements Coach{

    private MotivationService motivationService;

    @Autowired // this autowired annotation tells spring to INJECT the dependency here
    public BaseballCoach(MotivationService motivationService) {
        System.out.println("Constructing a baseball coach....");
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkouts() {
        return "Swing the bat 1000x - Metal Bat";
    }

    @Override
    public String getMotivationToDoTheThing() {
        return "Baseball Coach says: " + motivationService.provideMotivationForTheThing();
    }

    @PreDestroy // only works with singleton objects
    public void customDestroy(){
        System.out.println("####################################################");

        System.out.println("BaseballCoach Bean is now in the dugout");

        System.out.println("####################################################");
    }
}

package org.example.example.models;

import org.example.services.MotivationService;

public class BaseballCoach implements Coach{

    private MotivationService motivationService;

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
}

package org.example.example.models;

import org.example.services.MotivationService;

public class FootballCoach implements Coach {
    private String email;
    private String teamName;
    private MotivationService motivationService;

    @Override
    public String getDailyWorkouts() {
        return "Run 10k, 100 push-up, 100 sit-ups - Saitama";
    }

    @Override
    public String getMotivationToDoTheThing() {
        if(motivationService == null){
            return "Sorry no motivation to do the thing";
        }
        return "Coach says " + motivationService.provideMotivationForTheThing();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public MotivationService getMotivationService() {
        return motivationService;
    }

    public void setMotivationService(MotivationService motivationService) {
        this.motivationService = motivationService;
    }

}

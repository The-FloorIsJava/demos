package org.example.models;

import org.example.services.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Scope("prototype")
@Component // by default it camel cases the class name, so the beanName = "footballCoach"
public class FootballCoach implements Coach {
    @Value("${coach-email}")
    private String email;
    @Value("FloorIsJava")
    private String teamName;
    private MotivationService motivationService;

    @Override
    public String getDailyWorkouts() {
        return "Run 10k, 100 push-up, 100 sit-ups - Saitama";
    }

    @Override
    public String getMotivationToDoTheThing() {
        if(motivationService == null){
            return "heloo";
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
    @Autowired
    public void setMotivationService(MotivationService motivationService) {
        System.out.println("Establishing the motivation service with football coach.....");
        this.motivationService = motivationService;
    }

    @PostConstruct
    public void customInit(){
        System.out.println("####################################################");

        System.out.println("Hey the initialization of the bean has been completed.....");

        System.out.println("####################################################");
    }

    @PreDestroy // only works with singleton objects
    public void customDestroy(){
        System.out.println("####################################################");

        System.out.println("Bean is now in the promised land!");

        System.out.println("####################################################");
    }

}

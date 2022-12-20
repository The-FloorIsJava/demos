package org.example;

import org.example.models.Coach;
import org.example.models.FootballCoach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringDriver {
    public static void main(String[] args) {

//        MotivationService motivationService = new MotivationService();
//
//        Coach footballCoach = new FootballCoach();
//        Coach baseballCoach = new BaseballCoach(motivationService);
//
//        System.out.println(footballCoach.getDailyWorkouts());
//        System.out.println(footballCoach.getMotivationToDoTheThing());
//
//        System.out.println(baseballCoach.getDailyWorkouts());
//        System.out.println(baseballCoach.getMotivationToDoTheThing());

        // SPRING!!!!!!! WOOOOOO
        System.out.println("Creating the bean container.....!!!!");

        try(AnnotationConfigApplicationContext beansContainer = new AnnotationConfigApplicationContext(AppConfig.class)){
            System.out.println("Bean container created");

            Coach myCoach = beansContainer.getBean("myCoach", Coach.class);
            System.out.println(myCoach.getDailyWorkouts());
            System.out.println(myCoach.getMotivationToDoTheThing());

            System.out.println("---------------------Football Coach---------------------------");

            FootballCoach footballCoach = beansContainer.getBean("footballCoach", FootballCoach.class);
            System.out.println(footballCoach.getDailyWorkouts());
            System.out.println(footballCoach.getMotivationToDoTheThing());
            System.out.println(footballCoach.getEmail());
            System.out.println(footballCoach.getTeamName());

            System.out.println("----------------------Assistant Coach--------------------------");
            FootballCoach assistantCoach = beansContainer.getBean("footballCoach", FootballCoach.class);
            System.out.println(assistantCoach.getDailyWorkouts());
            System.out.println(assistantCoach.getMotivationToDoTheThing());
            System.out.println(assistantCoach.getEmail());

            System.out.println(assistantCoach);
            System.out.println(footballCoach);

        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
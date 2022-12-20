package org.example;

import org.example.models.BaseballCoach;
import org.example.models.Coach;
import org.example.models.FootballCoach;
import org.example.services.MotivationService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;

@Configuration
@PropertySource("classpath:app.properties")
@ComponentScan("org.example")
public class AppConfig {
}

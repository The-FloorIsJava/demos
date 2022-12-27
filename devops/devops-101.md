# DevOps

-   Portmanteau of **Dev**elopment and **Op**eration**s**
-   most modern way of approacvhing applications and software
-   **Development**
    -   testing and creating of code
-   **Operations**
    -   deploying, maintaing and making publically available applications that are written in development
-   DevOps
    -   developers and IT operations
    -   collaborative effort between these teams throughout the product lifecycl
    -   **_LIFECYCLE_**
        -   _PLAN_
            -   Adopting that agile practice
            -   used to improve speed and quality
            -   A LOT goes into this, make sure you're comfortable with compromise
        -   _BUILD_
            -   writing the code
            -   utilizing git to work in a team or alone
            -   branching
            -   re-wrtiing
            -   commits
            -   heavy development focus
        -   Continuous Integration and Deployment
            -   CI/CD pipelines
            -   **_Continuous Integration_**
                -   Software development practice wehre you contianously add code to a remote repo
                -   OFTEN this code is tested to verify that it works correct
                -   **Triggers**
                    -   This handles these tests and validations at commits
                    -   can also handle the compilation of a project such as maven
            -   **_Continuous Delivery_**
                -   extension of the integration
                -   after passing all tests or validtions in production environment
                -   automatically deploy all the code changes testing/development stage/deployment
                -   Any time you push your code that calls a trigger as long as it passes the approriate validations in integration this will build immediately and can deploy to a testing/development
            -   **_Continuous Deployment_**
                -   one step further than the previous
                -   you have to pass all previous stages
                -   there is no human intervetion and only a failed test will prevent a new change to be deployed
        -   **Monitor**
            -   constantly checking for any issues in logs or anything that might fail or any bugs
        -   **Operate**
            -   end-to-end devliery of IT services
        -   **Continous Feedback**
            -   customer feedback to it support, which then leads it down the line to developers

![](https://wac-cdn.atlassian.com/dam/jcr:aa29a13c-67a8-424b-a21b-ad10fe6897df/DevOps%20infinity%20wheel_SIMPLE.png?cdnVersion=484)

## Benefits

-   **Speed**
    -   Teams that practice DevOps release deliverables more frequently, with higher quality and stability.
    -   A Report found that elite teams deploy 208 times more frequently and 106 times faster than low-performing teams.
    -   Continuous delivery allows teams to build, test, and deliver software with automated tools.
-   **Improved Collaboration**
    -   culture of collaboration between developers and operations teams, who share responsibilities and combine work.
    -   This makes teams more efficient and saves time related to work handoffs and creating code that is designed for the environment where it runs.
-   **Rapid Deployment**
    -   teams improve products rapidly.
    -   A competitive advantage can be gained by quickly releasing new features and repairing bugs.
-   **Quality and reliability**
    -   Practices like continuous integration and continuous delivery ensure changes are functional and safe, which improves the quality of a software product.
    -   Monitoring helps teams keep informed of performance in real-time.
-   **Security**
    -   By integrating security into a continuous integration, continuous delivery, and continuous deployment pipeline, DevSecOps is an active, integrated part of the development process.
    -   Security is built into the product by integrating active security audits and security testing into agile development and DevOps workflows.

## Challenges

-   DevOps isn't a single individuals job!
-   Can require overhauling structures and practices
-   Tough to break people from their siloed ways

# AWS

## Services

-   **CodeBuild**
    -   AWS Fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy
    -   don’t need to provision, manage, and scale your own build servers
    -   scales continuously and processes multiple builds concurrently, so your builds are not left waiting in a queue.
    -   you are charged by the minute for the compute resources you use when building. (Free tier = 100 min/month)
-   **CodePipeline**
    -   AWS Fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.
    -   automates the build, test, and deploy phases of your release process every time there is a code change
    -   Enables you to rapidly and reliably deliver features and updates
    -   You can easily integrate AWS CodePipeline with third-party services such as GitHub.
    -   You only pay for what you use. There are no upfront fees or long-term commitments.
-   **CodeDeploy**
    -AWS Fully managed deployment service that automates software deployments to a variety of compute services such as - Amazon EC2 - AWS Fargate - AWS Lambda - on-premises servers
    -   Makes it easier for you to rapidly release new features
    -   helps you avoid downtime during application deployment
    -   handles the complexity of updating your applications
    -   You can use AWS CodeDeploy to automate software deployments, eliminating the need for error-prone manual operations
# AWS - Amazon Web Services

Terminology:

**Cloud**

-   The delivery of different services over the internet provided by another company that provisions the resources reuqested.
-   Commonly used for data storgae, computing power and a variety of other services.
-   There is no single “Cloud” but rather many companies provide Cloud Computing Services with their own infrastructure.
    -   Microsoft Azure
    -   GCP - Google Cloud Platform
    -   Oracle
    -   AWS - Amazon Web Services (our focus)

**Infrastructure as a Service (IaaS)**

-   means of delivering computing infrastructure as on-demand services.
-   user purchasing/provisioning of:
    -   servers,
    -   software data center space, or
    -   network equipment
-   All to rent those resources as a fully outsourced service can demand model.
-   Allows dynamic scaling and the resources are distributed as a service.
-   generally includes multiple-user on a single piece of hardware.

**Platform as a Service (PaaS)**

-   a cloud delivery model for applications composed of services managed by a third party.
-   provides elastic scaling of your application which allows developers to:
    -   build applications and services over the internet
    -   the cloud provider takses the majority of resposibility for handling what infrastructure is required
    -   deployment models include public, private and hybrid.

**Software as a Service (SaaS)**

-   allows users to run existing online applications and it is a model software that is deployed as a hosting service
-   usually an online browser over the web.
-   used for the development and deployment of modern applications.

![](https://www.redhat.com/cms/managed-files/iaas-paas-saas-diagram5.1-1638x1046.png)

## AWS

Amazon Web Services (AWS) is a collection of hundreds of cloud computing services that provide the building blocks for IT infrastructure.

-   A small business (or an individual developer) doesn’t need to go buy a bunch of hardware and build everything from scratch. Amazon provides all of these assets for us, and we can provision them. It’s less hefty of an investment for us little people.
-   “AWS offers the building blocks of an IT infrastructure for individuals or companies to use… usually for a fee.”
    -   There are hundreds of different services offered by AWS
    -   You pay for what you use.
        -   This is pretty much always cheaper than trying to run your own IT room.
    -   Highly scalable.
        -You can easily upsize/downsize the tools you’re using
    -   Highly Available.  
         -Amazon has locations all over the world with resources for computing. (
    -   Availability zones are the actual locations where infrastructure exists.
        -   They currently exist in 7 continents in the world and more are being added regularly

## Some AWS Services We’ll Use:

**RDS**

-   Relational Database Service: Creates a virtual, scalable, Relational Database. Creates the environment to host the database and has support for many types of relational databases. (PostgreSQL, Oracle DB, MySQL); schema - based storage

**EC2**

-   Elastic Compute Cloud: Virtual computer/server.

**EBS**

-   Elastic Block Storage: This is solid state storage used for an EC2. Virtual harddrives.

**AMI**

-   Amazon Machine Image: Blueprint for an operating system(OS). Your EC2 will have to mount an AMI in order to have an operating system.

**S3**

-   Simple Storage Service: This provides object storage repositories up to 5000+ TB. Good for static data storage. - can store anything from files, images, videos, etc

**Security Groups**

-   These function like a firewall for instances (EC2, RDS etc) restricting traffic by IP, protocol or port.

# AWS Regions & Availability Zones

AWS spans multiple availability zones within multiple geographic regions around the world. Amazon plans to develop more regions.

## Region

An AWS Region is a geographical location with a collection of availability zones mapped to physical data centers in the region.

-   physically isolated/independent from every other region in terms of resources.
-   each region, you will find two or more availability zones
-   each zone hosted in separate data centers from other zones

## Availability Zone

-   “An availability zone is a logical data center in a region. Anybody in a region has access to any availability zone within that region.”
-   Each zone in a region has redundant and separate :
    -   power
    -   networking
    -   connectivity
-   The above helps to reduce the likelihood of multiple zones failing simultaneously. This is known as **Resilence**

[Click here for Setting up our AWS](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)

# Creating and Configuring an RDS

## Relational Database Service.

-   It’s the cloud database we use with AWS.
-   Creates the environment to host our postgres databases on the cloud.
-   basically just a server, stripped down to focus on DBs
-   a remote database hosted by AWS

1. Log into AWS and find RDS in the nav menu -> database instances -> create database
2. Select standard create to make sure we use free tier, and choose postgres, free tier
    - You will want postgres version 10-ish for free tier.
    - Give your instance identifier something apparent (like batch name), leave the username as postgres, and give it a password
    - For instance configuration, make sure to choose db.t2.micro, for free tier.
    - Storage defaults are mostly fine - 20gb is the minimum, which we want. After 30gb across all of your AWS service they’ll start charging you. But **TURN OFF AUTO SCALING** We don’t want to accidentally go over 30gb.
    - Turn on public access so we can access it outside of AWS.
    - Go ahead and create a new VPC security group

-   Click additional configuration, give your database the name postgres and **turn off automatic backups** and performance insights, cause it CAN end up charging you if you use too much space.
-   Give it some time to create the resources your provisioned. Wait for a created message.

-   **Once created**, we can click on our new database, and see the endpoint we’ll use to reach our database, and all the other details including the security group
-   We have to CONFIGURE the security group to make sure we can access our database from our computer!
    -   Click the security group you created.
    -   Click the security group id, and click edit inbound rules
        -   then click add rule **IF** you don’t already have a postgres rule that’s auto generated with port 5432.
    -   set Type to all traffic
    -   Source Type to anywhere ipv4
-   Finally, go back to your RDS and copy the endpoint.

## In DBeaver

-   Create a new postgres connection, and paste the endpoint into the Host name
-   Provide the username and password given for your remote server
-   **Note** you can’t see what’s in your database from AWS. That’s what you’ll need DBeaver for.

Now we have a remote database that anyone with the endpoint and password can access and change!!

# Creating and Configuring an EC2

**Elastic Cloud Compute**

-   it’s a virtual computer on some Amazon server
    -   _EBS (Elastic Block Storage)_:
        -   This is solid state storage used in our EC2s. Virtual harddrives.
    -   _AMI (Amazon Machine Image)_:
        -   Blueprint for an operating system (OS). Your EC2 will have to mount an AMI in order to have an OS.
-   EC2s let us run any process you would run on your machine, on a virtual machine.
-   This is huge for you and your team all connect to the same EC2, you all have access to the exact same computer basically.

## Creation of EC2

-   Search for EC2, click “instances” and launch a new instance
-   Choose your AMI, t2.micro, EBS, Security Group:
    -   You first have to mount your ami (amazon machine image)
    -   We’re gonna be using Linux. (Amazon Linux 2 AMI)
-   Then we have to choose what type of instance we want to spin up:
    -   we’re using t2.micro because it’s free and general purpose.
    -   **Note** its very limited specs, which will be more than enough for our needs.
-   Then we’ll create a new key pair.
    -   Add a key (name of the EC2 - for instance JavaFS)
        -   What this does is allow us to access our EC2 using a secure shell.
        -   We need matching keys on our EC2 and on our machine in order to pass the security check.
        -   **make sure to DOWNLOAD the .pem file!!**
-   The rest of the defaults are fine
-   Launch!

## Configure security group

-   Go to your instance -> security -> click on your security group
    -   edit inbound rules -> set type to “All traffic”,
    -   Source to “All IPv4”.
-   Go to your instance -> click connect -> scroll down and click connect again

## Problems?

Timeout when you try to ssh?

-   You should go into your ec2, and add a rule to your security group.

Permission denied public key?

-   Chmod 400 on your .pem file. 760 also helped, also try ssh-ing from the keys directory.

**Warning:** unprotected private key file?

-   Try ssh -i [.pem file name] ec2-user@[your ip address]

**Worst case** you’ll have to try building the EC2 from scratch cause something small must’ve gotten messed up, and if it still fails then it’s a deeper issue to dig into.
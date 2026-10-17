# Original internship report — text-only transcription

Submitted by **Shreya Gajjar**, .

This is a text extraction,  supplied by the user. It includes the complete document-body text, including its wider internship and IoT sections. Images, handwritten signatures, page layout, headers, footers, and formatting are not reproduced. Extraction may join text in tables or affect spacing. Historical statements describe the original project, not the revised Ledger Lab code. No authorship declarations have been changed.

The full original Word document is retained in the downloadable local package. Its direct GitHub upload was not executed because the automatic approval review could not process the large binary payload.

---
PREVENTING DOUBLE SPENDING ATTACKS IN CRYPTOCURRENCY BLOCKCHAINS USING NETWORK OBSERVER AND PEER-ALERT SYSTEM

A PROJECT REPORT

Submitted by

SHREYA GAJJAR

201040107003

In partial fulfillment for the award of the degree of

BACHELOR OF ENGINEERING

in

Computer Engineering

Gujarat Power Engineering and Research Institute, Mehsana

Gujarat Technological University, Ahmedabad [April-2024]

Gujarat Power Engineering and Research Institute

Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Mehsana

CERTIFICATE

This is to certify that the project report submitted along with the project entitled PREVENTING DOUBLE SPENDING ATTACKS IN CRYPTOCURRENCY BLOCKCHAINS USING NETWORK OBSERVER AND PEER-ALERT SYSTEM has been carried out by SHREYA GAJJAR under my guidance in partial fulfillment for the degree of Bachelor of Engineering in Computer Engineering, 8th Semester of Gujarat Technological University, Ahmedabad during the academic year 2023-24.

Prof. Amrita ChitranshiProf. Avani Raval

Internal GuideHead of the Department

Gujarat Power Engineering and Research Institute

Near Mevad Toll-booth, Ahmedabad - Mehsana Express Highway, Mehsana

DECLARATION

We hereby declare that the Internship / Project report submitted along with the Internship / Project entitled Preventing double-spending attacks in cryptocurrency blockchains using network observers and peer-alert systems  submitted in partial fulfillment for the degree of Bachelor of Engineering in Computer Engineering to Gujarat Technological University, Ahmedabad, is a bonafide record of original project work carried out by me / us at Graduate School of Engineering and Technology ( GTU-GSET ). under the supervision of Prof. Deepak Upadhyay and that no part of this report has been directly copied from any students’ reports or taken from any other source, without providing due reference.

Name of the StudentSign of Student

ACKNOWLEDGEMENT

I am very thankful for giving me the opportunity to undertake my internship training at the prestigious " Graduate School of Engineering and Technology-GTU ". It was a very good learning experience for me to have at this site.

First, I would like to thank the Head of The Department Prof. Avani Raval Gujarat Power Engineering and Research Institute, Mehsana for giving permission to commence this Internship.

Further, I would like to express my sincere gratitude to my Industrial Mentor Prof. Deepak Upadhyay  for continuously guiding me at the company and dispel all my doubts with patience. Also, I am very obliged to my Internal Mentor Prof. Amrita Chitranshi for helping me throughout my internship and giving me necessary suggestions and advice along with their valuable coordination. Without their continuous support it would not have been possible to complete my internship.

I own my wholehearted thanks and appreciation to the entire staff of the company for their cooperation and assistance during my internship.

ABSTRACT

This report encapsulates the pivotal internship experience I underwent at Graduate School of Engineering and Technology-GTU, a vanguard in the cybersecurity domain, as a requisite for the Computer Engineering program at Gujarat Power Engineering and Research Institute, Mahesana. Spanning from 15-01-2024 to 15-04-2024, my tenure was characterized by an immersive engagement in the various subdomains of cyber security, network security protocols, cyber threat intelligence, Digital Forensic, IoT security. Under the tutelage of industry stalwarts, I was instrumental in fortifying cybersecurity frameworks, deploying threat mitigation strategies,  concurrently augmenting my skill set in cybersecurity software, analytical techniques.

This professional journey not only enriched my technical prowess but also honed my analytical and problem-solving capabilities, situating me favorably for a future within the cybersecurity sphere. The insights garnered from this experience are poised to significantly influence my professional outlook and aspirations in the evolving landscape of cyber defense.

List Of Figures

Table 1.1 Company Details1

Figure 2.1 Task shared with external faculty 4

Figure 3.1  Footprinting Techniques10

Figure 3.2  Network Scanning Process  11

Figure 4.1 Working of Normal Network in Cooja simulation12

Figure 4.2 Data Collection of Node in Network 12

Figure 4.3 Information status of Nodes13

Figure 4.4  Sensor Data of Node Connection13

Figure 4.5 Power Consumption of  Nodes in Normal Network14

Figure 4.6 Power Consumption with one Dynamic Node ( Node with Mobility)14

Figure 4.7 Data Collection  with one Dynamic Node ( Node with Mobility)15

Figure 4.8 Working and Temperature of Nodes ( With Malicious ) 15

Figure 4.9  Node Information  ( With Malicious ) 16

Figure 4.10  Output Panel that Showing 6rd packet is Dropped   ( With Malicious )16

Figure 5.1  Blockchain Architecture17

Figure 5.2  Model Overview17

Figure 5.3  Output of  CryptoBlockchain.js12

Figure 5.4  Additional functionalities  12

Figure 5.5    Blockchain is valid or Not13

Figure 5.6  Authentication error13

Figure 5.7   Mining reward14

Figure 5.8  Unique Transaction with Signature14

Figure 5 .9 10 units is deducted at the same time15

Figure 5.10  Aborted error15

Figure 5.11  Creating four new transactions in the blockchain16

Figure 5.12  Displaying the current blockchain with the genesis block16

 Figure 5.13  Mining blocks to perform the transactions17

 Figure 5.14   A double spending attack occurs in the blockchain17

 Figure 5.15  Number of transactions reduces from four to two17

 Figure 5.16  Block is replaced with a new genesis block17

 Figure 5.17   Balances of each of the addresses are updated accordingly12

TABLE OF CONTENTS

ACKNOWLEDGEMENTi

ABSTRACTii

LIST OF FIGURESiii

CHAPTER 1: Introduction1

Overview of the company/organization and its cybersecurity department.

Subdomains2

Objectives and goals of the internship program…………………………..2

 Technical Skills Learning2

Labs 2

Conclusion2

CHAPTER 2: Internship Activities3

List of Assigned Tasks3

2.2 List of Assigned Tasks ( Major)3       2.3 Tools and Technology 3

            2.3.1 Vulnerability Assessment and Penetration Testing (VAPT)3

            2.3.2 Security Operations Center (SOC)3

            2.3.3 Digital Forensic3

            2.3.4 IoT Security 3

            2.3.5 Network Security 3

 2.4 Additional Tools and Technologies4

CHAPTER 3:  Vulnerability Assessment and Penetration Testing (VAPT)6

Vulnerability Assessment (VA)6

Penetration Testing (PT)6

3.3  CEH and Its Relation to VAPT6

3.4 CEHv12 Module 1  Footprinting and Reconnaissance7

         3.4.1 Footprinting3

         3.4.2  Reconnaissance3

         3.4.3 Techniques and Tools3

3.5  CEHv12 Module 2  Scanning Networks7

         3.5.1 Key Concepts in Network Scanning for CEH3

CHAPTER 4: PROJECT I (Minor)11

4.1 Introduction11

4.2 Background and Literature Review12

4.3 Project Objectives and Scope 12

4.4 Scenario12

CHAPTER 5: PROJECT II 18

5.1 Introduction18

5.2 Objective19

5.3  Proposed System19

          5.3.1 Network observers18

          5.3.2 Peer Alert Systems 19

 5.4 Cryptography Blockchain Architecture19

 5.5 Double Spending Attack19

 5.6 Implementation19

          5.6.1 Additional Security18

          5.6.2 Performing Transactions 19

          5.6.3  Signature18

          5.6.4 Double Spending Attack 19

          5.6.5 Network observers18

           5.6.6 Peer Alert Systems 19

CHAPTER 6: LIMITATIONS AND SCOPE20

        6.1 Limitations20

6.2 Scope20

CHAPTER 7: CONCLUSION AND SUMMARY21

        7.1 Conclusion21

7.2 Summary for Internship Review21

CHAPTER 8: References21

8.1 References21

8.2 Appendices:21

Feedback Form22

                  CHAPTER 1

OVERVIEW OF COMPANY

History/ Overview

Graduate School of Engineering and technology (GSET) is GTU managed PG Engineering College and is running various AICTE approved post graduate programs .

Table 1.1 Company details

         Institute

GRADUATE SCHOOL OF ENGINEERING AND TECHNOLOGY-GTU

       Managed By

GUJARAT TECHNOLOGICAL UNIVERSITY

           Website

https://set.gtu.ac.in/

          Address

Graduate School of Engineering and Technology Academic Block 5, GTU-Chandkheda Campus, Nr .Vishwakarma Government Engineering College, Nr.Visat Three roads, Visat-Gandhinagar Highway, Chandkheda, Ahmedabad-382424-Gujarat. 

         Programs

M.E. Computer Engg. (specialization in Cyber Security),  M.E.   Electronics and Communication Engg. (specialization in Mobile  Communication and Network Technology) ,M.E. Computer Engg. (specialization in Internet of Things)  ,M.E. Computer Engg. (specialization in Artificial Intelligence and Data Science) and  M.E. Civil Engg.  (specialization in Structural Engg.).

         Industries

    Technology, education, and more

Mission

To develop state-of-art research facilities with well-equipped academic infrastructure.To establish strong collaborations with research organizations, Institute of national importance and Industries that promote research and consultancies.To encourage innovative practices to produce innovators and entrepreneurs.To leverage International linkages of the University to establish strong international outreach.

Team

The GSET has a team of experienced professors who believe in quality teaching and providing exceptional knowledge to all students. With years of experience, we work with our proven strategies that pledge to provide the required results.

Subdomains

VAPT  ( Vulnerability Assessment and Penetration Testing)

SOC ( Security Operations Center )

Digital Forensics

Network Security

Information Security 

IOT Security 

Cloud Security 

 Objectives and goals of the internship program

Learning and skill development

Exploration and career clarification

Networking

Contributing to projects and tasks

Feedback and evaluation

Professional development

Resume building

Cultural fit and company experience

 Technical Skills Learning

Introduction to the Cybersecurity Landscape

Technical Skills Acquired

Soft Skills Development

Certifications and Courses

Real-World Applications

Challenges and Learnings

 Future Learning Goals

Visuals and Infographics

1.5  Labs

VAPT

SOC

Digital Forensics

IOT Security

1.6 Conclusion

The GSET team believes To create an ecosystem in education and research that provides socially responsible, globally acceptable technocrats, innovators and entrepreneurs.

CHAPTER  2

                                INTERNSHIP ACTIVITY

List of Assigned Tasks ( Minor)

Research over interested subdomain 

Gathering information about current startups and roles in Cyber Security

List of Courses from online platform to complete

CVE for subdomains 

Collection of Research Paper 

Cheat Sheet Folder 

List and Report of Tools of  Interested Subdomain

Location of Password and logs store in MAC , Windows and linux OS 

Figure 2.1 Task shared with external faculty 

List of Assigned Tasks ( Major)

Explore the  Subdomains

List of Tools Use for Subdomains

Installation, Understanding and Working of Verious Cyber Security tools

IOT Security minor Project 

2.3  Tools and Technology

2.3.1 Vulnerability Assessment and Penetration Testing (VAPT)

Nmap: Used for network discovery and security auditing. Mention any specific scripts or features you used.

Metasploit: Highlight any successful penetration tests by utilizing Metasploit frameworks to exploit vulnerabilities.

Wireshark: Discuss how you used Wireshark for network traffic analysis to identify suspicious activities or malfunctions.

 2.3.2  Security Operations Center (SOC)

Splunk: Discuss your experience using Splunk for log management and analysis, creating dashboards, and developing alerts to monitor security events in real-time.

SIEM Tools (e.g., IBM QRadar, LogRhythm): Detail your exposure to SIEM tools, focusing on how you analyzed logs to identify potential security incidents and contributed to incident response processes.

 2.3.3  Digital Forensic

Autopsy: Explain how you used Autopsy for digital investigations, including file system analysis and recovering deleted files, to support incident response efforts.

FTK Imager: A digital forensics tool used for imaging and data preview. It's widely recognized for its ability to quickly and efficiently acquire forensic images.

 2.3.4 IoT Security

Shodan: Detail your use of Shodan for discovering IoT devices connected to the internet, assessing their exposure and identifying potential vulnerabilities.

2.3.5  Network Security

Wireshark: Share your experience using Wireshark for network traffic analysis, including packet inspection and protocol analysis to identify malicious activities.

Palo Alto Networks Firewall: Recognized for its ability to identify and control applications, users, and content by using a comprehensive approach to network security.

 2.4  Additional Tools and Technologies

      Kali Linux: A Debian-based Linux distribution aimed at advanced Penetration Testin and      Security Auditing, which includes numerous tools for information security tasks.  

 Qualys Guard: A cloud-based vulnerability management tool that provides asset discovery, network security, threat protection, and compliance monitoring.

 Hashcat: An advanced password recovery tool, known for its speed and versatility in cracking encrypted passwords using CPUs and GPUs.

 Tcpdump: A powerful command-line packet analyzer; allows the user to display TCP/IP and other packets being transmitted or received over a network to which the computer is attached.

 ELK Stack (Elasticsearch, Logstash, Kibana): For SOC operations, the ELK Stack is invaluable for its real-time logging and interactive data visualization capabilities, offering deep insights into security data.

                                             CHAPTER  3

VULNERABILITY ASSESSMENT AND PENETRATION TESTING

(VAPT)

Vulnerability Assessment and Penetration Testing (VAPT) is a critical framework in cybersecurity designed to identify, classify, remediate, and mitigate vulnerabilities within a system. VAPT combines two approaches—Vulnerability Assessment (VA) and Penetration Testing (PT)—to provide a comprehensive evaluation of the security posture of an information system or network. Here's an overview of both components and their significance in cybersecurity:

3.1 Vulnerability Assessment (VA)

Objective: The primary goal of a vulnerability assessment is to identify and list vulnerabilities existing in a system.

Process: It involves the systematic review of security weaknesses in the information system. This includes scanning systems, networks, and software to detect known vulnerabilities, such as outdated software versions, missing patches, or misconfigurations.

Tools: Tools like Nessus, Qualys, and OpenVAS are commonly used for automated scanning and detection of vulnerabilities.

Outcome: The outcome is a comprehensive report listing all identified vulnerabilities, often ranked by their severity or potential impact on the system.

   3.2 Penetration Testing (PT)

Objective: Penetration testing aims to exploit the vulnerabilities in a system to determine whether unauthorized access or other malicious activity is possible.

Process: Penetration testing involves simulating cyberattacks under controlled conditions to validate the exploitable vulnerabilities. It not only proves the existence of vulnerabilities but also assesses the extent of damage or access an attacker could achieve.

Types: Penetration testing can be white box (with full knowledge of the system), black box (with no prior knowledge), or grey box (with partial knowledge).

Tools: Tools such as Metasploit, Burp Suite, and Kali Linux (which includes a suite of penetration tools) are used for various penetration testing activities.

Outcome: The deliverable is a detailed report that includes the exploited vulnerabilities, the data that was accessed, and recommendations for securing the system.

3.3  CEH and Its Relation to VAPT

 Broad Coverage: CEH certification provides a comprehensive overview of ethical hacking and cybersecurity, covering topics well beyond just VAPT. It includes modules on reconnaissance, scanning networks, enumeration, system hacking, malware threats, sniffing, social engineering, denial-of-service attacks, session hijacking, evasion techniques, hacking web servers and applications, SQL injection, hacking wireless networks, hacking mobile platforms, cloud computing, and cryptography, among others.

VAPT Focus: Among its many modules, CEH does delve deeply into both vulnerability assessment and penetration testing. It educates candidates on how to identify vulnerabilities in systems and networks and then apply this knowledge in conducting penetration testing to assess the security of a system. This makes CEH professionals well-versed in VAPT practices.

Tools and Techniques: CEH training includes the use of various tools and techniques that are essential for conducting effective vulnerability assessments and penetration tests. This practical aspect of the training ensures that CEH certified professionals are not only knowledgeable about the theoretical aspects of cybersecurity but are also capable of applying this knowledge in real-world scenarios.

Ethical Hacking Mindset: A significant part of the CEH curriculum is devoted to instilling an ethical hacking mindset, which involves thinking like a hacker (but one with permission) to better defend against future attacks. This perspective is crucial for effective VAPT activities, as it enables professionals to anticipate potential security threats and vulnerabilities.

3.4 CEHv12 Module 1  Footprinting and Reconnaissance

 Footprinting and reconnaissance are crucial initial stages in the process of information gathering and security assessment, often associated with ethical hacking, cybersecurity, and penetration testing. These stages are about collecting as much information as possible about a target system, network, or organization to identify potential vulnerabilities and the best way to approach an attack or defense. Understanding these phases helps in strengthening the security posture of an organization by identifying and mitigating potential threats before they can be exploited.

Footprinting and reconnaissance represent the initial phase in the ethical hacking and cybersecurity assessment process, laying the groundwork for a systematic approach to uncovering and exploiting vulnerabilities within a system or network. In the context of the Certified Ethical Hacker (CEH) certification, provided by the EC-Council, these activities are emphasized as critical steps for gathering comprehensive information about a target before attempting to breach its defenses. This phase is characterized by its focus on collecting as much information as possible without directly engaging the target system, thereby minimizing the risk of detection.

3.4.1 Footprinting

Footprinting is the process of collecting publicly available information about a target to create a unique blueprint or profile. The goal is to gather critical data that can be used to execute more targeted attacks or for defensive purposes. 

Passive Footprinting: Involves collecting information without directly interacting with the target system. This is often done through online resources, social media, websites, public records, and other sources where the target's digital footprint is visible without alerting the target.

Active Footprinting: Involves directly interacting with the target system to gather information. This can include using tools to query websites or networks (like whois, traceroute, and DNS queries) to obtain data on domain registration, network infrastructure, and system enumeration.

3.4.2  Reconnaissance

Reconnaissance is a broader term that encompasses footprinting and other methods of information gathering. It is the act of reconnaissance to collect data on a target's security posture. This phase can include both the passive collection of information available online and active scanning techniques to identify open ports, services, and vulnerabilities in a system. Reconnaissance aims to gather actionable intelligence that can be used for further exploitation.

                                                       Figure 3.1  Footprinting Techniques

3.4.3 Techniques and Tools

Public Sources: Utilizing public databases, websites, WHOIS information, and social media to gather information about the target.

Network Enumeration: Using tools like DNS queries, network mapping, and traceroute to understand the structure and components of the target’s network.

Search Engine Discovery and Reconnaissance: Leveraging search engines to find information that the target organization has inadvertently exposed on the internet.

Social Engineering: Gathering information through human interaction, including techniques like phishing, pretexting, and baiting.

3.5  CEHv12 Module 2  Scanning Networks

Network scanning is a crucial phase in the network security and management process, where various tools and techniques are employed to identify and enumerate the devices, services, and vulnerabilities within a network. This activity is fundamental for both attackers and defenders: attackers use it to find points of exploitation, while defenders use it to discover vulnerabilities that need patching or to ensure that the network's security posture is as intended.Footprinting and reconnaissance represent the initial phase in the ethical hacking and cybersecurity assessment process, laying the groundwork for a systematic approach to uncovering and exploiting vulnerabilities within a system or network.

 In the context of the Certified Ethical Hacker (CEH) certification, provided by the EC-Council, these activities are emphasized as critical steps for gathering comprehensive information about a target before attempting to breach its defenses. This phase is characterized by its focus on collecting as much information as possible without directly engaging the target system, thereby minimizing the risk of detection.    

                                                     Figure 3.2  Network Scanning Process  

3.5.1 Key Concepts in Network Scanning for CEH

Live Host Discovery: Techniques to identify active devices on the network. This can be done using ping sweeps, ICMP echo requests, or more stealthy methods to evade detection by firewalls or intrusion detection systems.

Port Scanning: Enumerating open ports on targeted hosts to discover accessible services. Techniques vary from simple TCP connect scans to more sophisticated SYN scans, UDP scans, and others designed to minimize detection.

Service and OS Detection: Determining what services are running on open ports and identifying operating system versions. This information helps in understanding potential vulnerabilities specific to those services or OS versions.

Vulnerability Scanning: Automated scanning of systems for known vulnerabilities using tools like Nessus or OpenVAS. This step is crucial for identifying and mitigating potential security risks.

Security Posture Assessment: Analyzing the data gathered through scanning to assess the security posture of the network. This involves identifying vulnerabilities, potential entry points for attackers, and prioritizing them for remediation.

CHAPTER 4

PROJECT I (Minor)

Analyzing Selective Forwarding Attacks in RPL with Contiki OS and Cooja Simulation.

    4.1 Introduction

In the evolving landscape of the Internet of Things (IoT), the security of networked devices stands as a critical concern. IoT networks, characterized by their interconnectivity of everyday devices to the internet, are increasingly becoming integral to various sectors including healthcare, smart homes, and industrial control systems. This burgeoning integration, while offering unprecedented convenience and efficiency, also opens up new vulnerabilities and attack vectors for malicious entities. Among these, the security of network communications is paramount, as IoT devices often transmit sensitive data that could be compromised.

The Routing Protocol for Low-power and Lossy Networks (RPL) emerges as a cornerstone in this context, designed specifically to cater to the unique requirements of IoT networks. RPL facilitates efficient routing in environments characterized by high packet loss rates and limited power availability, common in IoT deployments. However, the reliance on RPL also introduces specific vulnerabilities, notably the threat of selective forwarding attacks. In such attacks, a malicious node within the network selectively drops packets, disrupting the network's functionality. This threat underscores the necessity of investigating and mitigating selective forwarding attacks to ensure the robustness and reliability of IoT networks.

Contiki OS, renowned for its lightweight and flexible design, offers an ideal platform for developing and testing IoT applications. Its compatibility with low-power IoT devices and support for simulating complex network topologies make it a preferred choice for security research in IoT networks. Coupled with the Cooja simulator, which allows for the detailed simulation of networks comprising both real and virtual nodes, researchers can meticulously analyze network behaviors under various conditions, including attack scenarios. 

This study focuses on the simulation of selective forwarding attacks within an RPL-based IoT network using Contiki OS and the Cooja simulator. A significant aspect of our investigation centers on the role of malicious nodes — nodes programmed or compromised to perform selective forwarding attacks. By understanding the behavior and impact of these malicious nodes, the research aims to illuminate potential weaknesses within the RPL protocol and explore effective countermeasures.

Moreover, the project distinguishes between static and dynamic nodes, as well as nodes with and without mobility, to comprehensively assess the effects of node behavior on the network's vulnerability to selective forwarding attacks. Static nodes, fixed in their position, contrast with dynamic nodes, which may change location, potentially altering the network topology. Similarly, nodes with mobility introduce the challenge of maintaining consistent network connectivity and routing paths, further complicating the network's defense against selective forwarding attacks. By examining these different node types and behaviors, the study aims to provide nuanced insights into securing RPL-based IoT networks against selective forwarding attacks, thereby contributing to the overall security and reliability of IoT systems.

Through this project, we delve into the complexities of IoT network security, leveraging the capabilities of Contiki OS and the Cooja simulator to not only understand the threats posed by selective forwarding attacks but also to explore strategic defenses. The outcome of this research is anticipated to offer valuable contributions to the field of IoT security, particularly in enhancing the resilience of RPL-based networks against sophisticated attack mechanisms.

4.2 Background and Literature Review

IoT Security Concerns

The proliferation of the Internet of Things (IoT) has interconnected billions of devices, embedding the internet into daily life and generating vast amounts of data. This advancement, however, brings to the forefront the importance of network security, especially for protocols like the Routing Protocol for Low-power and Lossy Networks (RPL). Designed for IoT's unique constraints, RPL facilitates efficient data transmission across constrained devices but is also susceptible to security threats, including selective forwarding attacks that can significantly undermine network integrity and reliability.

Selective Forwarding Attacks

Selective forwarding attacks involve malicious nodes within an RPL network deliberately dropping packets, disrupting data flow. This can critically impact applications requiring reliable data transmission, such as health monitoring systems. The selective nature of these attacks makes detection and mitigation challenging, emphasizing a notable vulnerability in RPL-based networks.

Contiki OS and Cooja Simulator

Contiki OS is a lightweight, open-source operating system optimized for IoT devices, enabling efficient development and deployment of IoT applications. It works hand-in-hand with the Cooja simulator, a tool that simulates Contiki OS nodes within IoT networks, allowing researchers to analyze network behavior under various scenarios, including security breaches. This combination is crucial for studying and enhancing IoT security.

Previous Work

While numerous studies have investigated RPL's susceptibility to attacks, including selective forwarding, gaps remain in understanding how different node behaviors affect network security and the development of effective countermeasures. Moreover, there is a continuous need for research utilizing Contiki OS and Cooja to explore new threats and protection strategies. This project aims to fill these gaps by focusing on the dynamics of selective forwarding attacks within RPL-based IoT networks, leveraging the capabilities of Contiki OS and Cooja for comprehensive analysis and insights.

        4.3 Project Objectives and Scope

Objectives

Understand RPL's Behavior Under Selective Forwarding Attacks: To study how selective forwarding attacks affect the performance and reliability of RPL-based IoT networks.

Identify RPL Vulnerabilities: To pinpoint the weaknesses in RPL that are exploited by selective forwarding attacks.

Explore Mitigation Strategies: To develop and assess methods for reducing the impact of selective forwarding attacks on RPL networks.

Scope

Simulation Environment: Utilizes Contiki OS and the Cooja simulator for simulating attacks in a controlled setting.

Attack Focus: Primarily concentrates on selective forwarding attacks, noting their relationship with other security threats for context.

Node Behaviors: The research will examine the effects of selective forwarding attacks considering various node behaviors, including static and dynamic nodes, as well as nodes with and without mobility. However, the study will acknowledge the limitations posed by the simulation environment in fully replicating real-world node mobility patterns.

Mitigation Limitations: Investigates mitigation strategies that can be implemented within the Contiki OS and Cooja simulator, recognizing that real-world applicability may require further exploration.

                                 Figure 4.1 Working of Normal Network in Cooja simulation 

Figure 4.2 Data Collection of Node in Network 

                                                Figure 4.3 Information status of Nodes

                                            Figure 4.4  Sensor Data of Node Connection 

                                 Figure 4.5 Power Consumption of  Nodes in Normal Network

        Figure 4.6 Power Consumption with one Dynamic Node ( Node with Mobility)

                Figure 4.7 Data Collection  with one Dynamic Node ( Node with Mobility)

4.4 Scenario: Selective Forwarding Attack with Every 3rd Packet Dropped

Network Setup

A simulated RPL-based IoT network in Contiki OS and Cooja includes one root node and several sensor nodes. A malicious node is introduced to execute the selective forwarding attack.

Attack Mechanism

The malicious node is programmed to drop every 3rd packet it receives instead of forwarding it. This selective dropping aims to disrupt network reliability subtly.

Objectives

Evaluate the impact on network performance, focusing on packet loss, latency, and reliability.

Examine RPL protocol resilience against selective forwarding attacks.

Explore detection and mitigation strategies for such attacks.

Data Collection and Analysis

Metrics like packet loss rate and network latency are monitored to assess the attack's effect. The analysis will inform on the network's vulnerability and potential security enhancements.

Figure 4.8 Working and Temperature of Nodes ( With Malicious ) 

                                Figure 4.9  Node Information  ( With Malicious ) 

      Figure 4.10  Output Panel that Showing 6rd packet is Dropped   ( With Malicious ) 

                                                  CHAPTER 5

                                                 PROJECT II 

Preventing double-spending attacks in cryptocurrency blockchains using network observers and peer-alert systems

  5.1 Introduction

This project explores innovative strategies to enhance the security of cryptocurrency blockchains against double-spending attacks. By implementing network observers and developing a comprehensive peer-alert system, the project aims to detect and mitigate such attacks, ensuring the integrity and trustworthiness of transactions.

5.2 Objective

In this project, to overcome the issues in the existing system, network observers are used that can track anomalous transactions performed without authorization. Additionally, to notify the sender and receiver about the unauthorized transaction, a peer alert system is designed such that the message is passed from the fraudulent node to the sender and receiver nodes.

5.3  What Is a Blockchain?

A blockchain is a distributed database or ledger shared among a computer network's nodes. They are best known for their crucial role in cryptocurrency systems for maintaining a secure and decentralized record of transactions, but they are not limited to cryptocurrency uses. Blockchains can be used to make data in any industry immutable—the term used to describe the inability to be altered.

Because there is no way to change a block, the only trust needed is at the point where a user or program enters data. This aspect reduces the need for trusted third parties, which are usually auditors or other humans that add costs and make mistakes.

5.4  How Does a Blockchain Work?

You might be familiar with spreadsheets or databases. A blockchain is somewhat similar because it is a database where information is entered and stored. But the key difference between a traditional database or spreadsheet and a blockchain is how the data is structured and accessed.

A blockchain consists of programs called scripts that conduct the tasks you usually would in a database: Entering and accessing information and saving and storing it somewhere. A blockchain is distributed, which means multiple copies are saved on many machines, and they must all match for it to be valid.

The blockchain collects transaction information and enters it into a block, like a cell in a spreadsheet containing information. Once it is full, the information is run through an encryption algorithm, which creates a hexadecimal number called the hash.

The hash is then entered into the following block header and encrypted with the other information in the block. This creates a series of blocks that are chained together.

5.5 Transaction Process

 Transactions follow a specific process, depending on the blockchain they are taking place on. For example, on Bitcoin's blockchain, if you initiate a transaction using your cryptocurrency wallet—the application that provides an interface for the blockchain—it starts a sequence of events.

In Bitcoin, your transaction is sent to a memory pool, where it is stored and queued until a miner or validator picks it up. Once it is entered into a block and the block fills up with transactions, it is closed and encrypted using an encryption algorithm. Then, the mining begins.

The entire network works simultaneously, trying to "solve" the hash. Each one generates a random hash except for the "nonce," short for number used once.

Every miner starts with a nonce of zero, which is appended to their randomly-generated hash. If that number isn't equal to or less than the target hash, a value of one is added to the nonce, and a new block hash is generated. This continues until a miner generates a valid hash, winning the race and receiving the reward.

Figure 5.1  Transaction Process

Once a block is closed, a transaction is complete. However, the block is not considered to be confirmed until five other blocks have been validated. Confirmation takes the network about one hour to complete because it averages just under 10 minutes per block (the first block with your transaction and five following blocks multiplied by 10 equals about 60 minutes).

Not all blockchains follow this process. For instance, the Ethereum network randomly chooses one validator from all users with ether staked to validate blocks, which are then confirmed by the network. This is much faster and less energy intensive than Bitcoin's process.

5.6 Proposed System

5.6.1 Network observers

The network observers are placed between each pair of nodes.

A sender node that contains the transaction amount, transaction ID and sender details will transfer this information to the neighboring node.

The neighboring node will then transfer this to the corresponding forward node, after performing the transaction step. This continues till the receiver node receives the amount.

The observers within each pair of nodes, will keep a record of the user ids, the number of transactions and amounts issued by them.

With this record, an observer will check the frequency of node communications in its node pair based on the number of transactions issued by the user.

If the frequency is higher than what is required, the anomaly will be logged, and the transaction will be aborted with an acknowledgement sent back to the sender node.

 5.6.2 Peer Alert Systems

When a network observer observes an anomaly at one of the transaction steps between a node-pair, the surrounding nodes are alerted about the fraudulent transaction.

This will help the neighboring nodes terminate their connections with the fraudulent node pair, such that their transactions can be performed along other safe routes.

5.7 Cryptography Blockchain Architecture

Cryptography is a foundational aspect of blockchain architecture, providing the mechanisms    for secure transactions, data integrity, confidentiality, and authentication within a blockchain network.

Cryptographic Hash Functions

A cryptographic hash function is a mathematical algorithm that takes an input (or 'message') and returns a fixed-size string of bytes. The output, known as the hash value or hash, appears random and changes significantly with even a small alteration to the input. In blockchain, hash functions are used to:

Create a unique hash for each block: Each block in the blockchain contains a unique hash of its own data as well as the hash of the previous block. This creates a chain of blocks, where altering the data in any block would invalidate all subsequent blocks because it would change the computed hashes.

secure transactions: Transactions are hashed, and these hashes are used in the process of block creation, ensuring the integrity and immutability of transaction data.

Public Key Cryptography (Asymmetric Cryptography)

Public key cryptography, also known as asymmetric cryptography, uses a pair of keys for encryption and decryption—a public key and a private key. In blockchain:

Digital Signatures: Users sign transactions with their private key, which can then be verified by anyone using the corresponding public key. This proves the origin of the message (authentication) and that the message has not been tampered with (integrity).

Wallet Addresses: A user's public key is transformed through a hash function (and sometimes additional encoding methods) to generate a blockchain address. This address acts as a public identifier on the blockchain, while the private key remains confidential and is used to access and send cryptocurrencies or interact with smart contracts.

Cryptography's Role in Blockchain Security and Trust

Immutable Ledger: Cryptographic hashes ensure that once a transaction has been added to the blockchain, it cannot be altered or removed without detection, creating an immutable record of transactions.

Decentralization and Trust: The combination of cryptographic techniques allows blockchain networks to function without a central authority. Trust is established through cryptographic proofs rather than through an institution or intermediary.

Security: The use of cryptographic signatures and hash functions secures transactions against tampering and fraud, making blockchain networks highly resistant to attacks.

                                      Figure 5.2  Blockchain Architecture

5.8 Double Spending Attack

                                                    Figure 5.3  Model Overview

A double spending attack in the context of cryptocurrency and blockchain technology refers to a situation where someone successfully spends the same digital currency twice. This is a potential issue in digital cash schemes because, unlike physical cash, digital tokens consist of digital files that can easily be duplicated or falsified without the proper safeguards.

Blockchain technology aims to prevent double spending through a combination of cryptographic techniques and a consensus mechanism. Here's a basic outline of how blockchains like Bitcoin aim to prevent double spending:

Public Ledger: All transactions are recorded on a public ledger. Once a transaction is confirmed, it's nearly impossible to alter. This transparency helps prevent double spending because everyone can see the transactions that have occurred.

Network Confirmation: Transactions are grouped into blocks and added to the blockchain through a process called mining (in proof-of-work systems) or a similar mechanism (like proof-of-stake in other blockchains). A transaction is considered confirmed once it's included in a block and additional blocks are added on top of it, making it increasingly difficult to reverse.

Consensus Mechanism: Blockchains use a consensus mechanism to agree on which blocks get added to the chain. In proof-of-work (PoW), this involves miners solving complex mathematical problems to propose new blocks. The network reaches consensus when a majority agree on the next valid block. This mechanism makes it very hard for a single entity to manipulate the blockchain to allow double spending.

5.9 Implementation

To start the initial blockchain, run the following command after entering the directory from the command line or terminal:

node CryptoBlockchain.js

                            Figure 5.4  Output of  CryptoBlockchain.js

 5.9.1 Additional Security

To increase security, a random nonce generator is used, that will be used in the hash creation. Moreover, to increase the time taken to mine individual blocks, a difficulty index is used to append additional zeros to the generated hash, which increases the mining time complexity. Also to validate the cryptocurrency blockchain, for every pair consisting of the current block and its preceding block, a two-fold validation methodology is utilized.

The hash of the current block is recomputed with the same nonce, and the original and recomputed hash values are compared.

The preceding hash of the current block and the hash of the preceding block are compared.

      If a mismatch is found in either of these two steps, the validation function returns an error.

The resulting cryptocurrency blockchain after integrating these additional functionalities is as follows:

                        Figure 5.5  Additional functionalities 

Here, the red highlights denote the appended zeros based on the difficulty index and the green highlights are the random nonces generated to compute the hash for every new block added.

When we observe and log the output of the check chain validity function, before tampering with any one of the blocks, it returns the value true, implying that the blockchain is valid.

     console.log("Is the blockchain valid?"+ smashingCoin.checkChainValidity());

                        Figure 5.6    Blockchain is valid or Not

If instead we try to change the transfer quantity of block 1 from 50 to 200 in the chain, the function returns a value of false, implying an authentication error.

smashingCoin.blockchain[1].data = {amount: 200};

                                  Figure 5.7  Authentication error

       5.7.2 Performing Transactions

To perform transactions between the intended sender and recipient blocks or nodes, their addresses are mined, such that the transaction amount can be deducted from the sender node and added to the receiver node. An array contains the records of pending transactions for every block starting with a null amount transaction for the genesis block, and subsequently stores every new transaction.

An example for demonstration is as follows, the first block sends 100 cryptocurrency units to the second block. The second block in turn returns 50 cryptocurrency units back to the first block. Hence the transaction array will contain the details of the transactions with amounts null, 100 and 50 respectively. After every successful transaction for a particular genesis block, a mining reward of 100 points is added to its balance.

smashingCoin.createTransaction( new Transaction("addr1","addr2",100));

smashingCoin.createTransaction( new Transaction("addr2","addr1",50));

console.log("Starting the miner...");

smashingCoin.minePendingTransactions("myAddress");

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress('myAddress'));

console.log("Starting the miner again...");

smashingCoin.minePendingTransactions("myAddress");

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress('myAddress'));

                              Figure 5.8   Mining reward

5.7.3 Signature

To ensure that every transaction is unique, it is signed with a signature which is generated using the private and public key and calculated hash for a block, using the elliptic library (based on elliptic curve cryptography). This is also used as a security measure to authenticate every transaction. The following image describes a transaction of 10 cryptocurrency units from the genesis block, and a reception of 100 cryptocurrency units by the genesis block.

const tx1 = new Transaction(myWalletAddress,'public_key',10);

tx1.signTransaction(myKey);

smashingCoin.addTransaction(tx1);

console.log("Starting the miner...");

smashingCoin.minePendingTransactions(myWalletAddress);

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress(myWalletAddress));

console.log("Starting the miner again...");

smashingCoin.minePendingTransactions(myWalletAddress);

console.log("Your balance is: "+smashingCoin.getBalanceOfAddress(myWalletAddress));

                  Figure 5.9  Unique Transaction with Signature

       5.7.4 Double Spending Attack

When a sender tries to perform the same transaction (with the same amount) twice, but with two different receivers, even though his initial balance is not sufficient to satisfy both the transactions, a double spending attack occurs. This can be illustrated in the below example. Consider a sender to have 10 cryptocurrency units, who plans to give these 10 units to 2 different receivers, concurrently, across separate blocks. For both these transactions to occur, a total of 20 units should be available with the sender, whereas he has just 10, implying that he plans to reuse the same money of the first transaction, in the second transaction, such that the 10 units is deducted at the same time (so only 10 units is deducted from his balance finally).

const recv_address= fetchAddress();

const tx1 = new Transaction(myWalletAddress,recv_address,10);

tx1.signTransaction(myKey);

global.smashingCoin.addTransaction(tx1);

console.log(global.smashingCoin.pendingTransactions)

new_address= fetchAddress();

const dsa_tx = new Transaction(myWalletAddress,new_address,10);

dsa_tx.signTransaction(myKey);

global.smashingCoin.addTransaction(dsa_tx);

console.log(global.smashingCoin.pendingTransactions)

                 Figure 5 .10 10 units is deducted at the same time

As seen above, the same sender hash address (highlighted in yellow) is involved in two transactions of 10 cryptocurrency units each (underlined in blue), but with different receiver hash addresses. Thus, if these 2 transactions are performed simultaneously (i.e. at the same timestamp), only 10 units will be deducted from his balance at the same time, whereas his actual deduction amount should be 20. The sender can thus exploit this issue to his advantage, and perform many such transactions, but by paying only half the actual amount.

     5.7.5 Network Observers

A network observer will check the number of pending transactions from a particular sender address in a blockchain. If the payment amount of two pending transactions from that address is the same, and the total amount is greater than the initial balance of the sender, a transaction aborted error will be displayed, and the user will be prompted to either cancel the last transaction with the same amount, or to try performing the transaction later.

if(total>balance && num>1)

{

console.log("\nYour transaction has been aborted due to a suspected double-spending attack.");

console.log("\nPlease cancel your last transaction or try again later.");

}

                             Figure 5.11  Aborted error 

       5.7.6 Peer Alert Systems

In order to disconnect from the block where the fraudulent transaction or double spending attack has taken place, the neighboring blocks are alerted. Any subsequent transactions that are scheduled for this block are redirected to other routes, and these neighboring blocks terminate their connections with it. The sender (who wanted to conduct the double spending attack), has to either withdraw any one of the transactions within a given timeout period, or will be blocked temporarily before being able to perform any new transactions again.

      Figure 5.12  Creating four new transactions in the blockchain 

     Figure 5.13  Displaying the current blockchain with the genesis block

              Figure 5.14  Mining blocks to perform the transactions

A double spending attack occurs in the blockchain. The network observer throws an error, asking the user to delete the last transaction, or be temporarily suspended. After this, the peer alert system will terminate connections of the other blocks to the fraudulent blocks (alerting neighboring blocks) as shown below:

  Figure 5.15   A double spending attack occurs in the blockchain

Therefore, due to the double spending attack, the number of transactions reduces from four to two (the ones involved in the attack are aborted). The peer alert system will nullify the preceding hash of blocks that had fraudulent blocks preceding them, due to the fact that the preceding hash is used as one of the parameters to calculate the current hash of any block.

       Figure 5.16  Number of transactions reduces from four to two

To overcome this issue of having a null preceding hash, this block is replaced with a new genesis block, with a preceding hash of '0'. This will also lead to a new current hash being generated, that can be used to perform the same transaction as before (Change of transaction route).

                                 Figure 5.17 Block is replaced with a new genesis block

Finally, after only genuine transactions are contained in the blockchain, they are processed, and the balances of each of the addresses are updated accordingly.

Figure 5.18   Balances of each of the addresses are updated accordingly

CHAPTER 5: Testing

 Testing plan

Functional Testing: Verify that all website features and functionalities work correctly.

Compatibility Testing: Test the website across different browsers, operating systems, and devices to ensure consistent performance.

Usability Testing: Evaluate the website's user interface, navigation, and overall user experience.

Performance Testing: Assess the website's speed, responsiveness, and ability to handle expected traffic volumes.

Security Testing: Identify and address vulnerabilities to protect the website and user data.

Testing Strategy

Objective: Define the overall objective of the testing strategy, such as ensuring the website functions correctly, performs well, and provides a good user experience.

Testing Types: Identify the key types of testing that will be performed, such as functional testing, compatibility testing, usability testing, and performance testing.

Test Coverage: Determine the scope of testing, including the critical functionalities, user flows, and different devices and browsers that will be tested.

Test Environment: Specify the test environment, including the hardware, software, and network configurations that will be used for testing.

Test Data: Prepare the necessary test data required to perform the different types of testing, including sample user accounts and relevant data for specific scenarios.

Test Techniques: Define the specific techniques and ap

CHAPTER 6

                                  LIMITATIONS AND SCOPE

 Limitations

Technical Constraints: The effectiveness of network observers and peer-alert systems may be limited by technical constraints such as network latency, bandwidth limitations, and processing power of the involved nodes.

Scalability: Implementing network observers and peer-alert systems across a large-scale cryptocurrency blockchain network may present challenges in terms of scalability, potentially leading to delays or inefficiencies in detecting double-spending attacks.

Dependency on Network Participation: The efficacy of the prevention mechanism relies on active participation from network nodes to report and validate transactions, which could be hindered if nodes are compromised or if there is insufficient incentive for participation.

False Positives/Negatives: There is a possibility of false positives or false negatives in identifying double-spending attacks, which could lead to unnecessary transaction rejections or successful attacks going undetected, respectively.

Regulatory and Legal Considerations: Depending on the jurisdiction, regulatory and legal constraints may impact the implementation and operation of the proposed prevention mechanism, potentially limiting its effectiveness or requiring additional compliance measures.

6.2 Scope

Blockchain Focus: The project will specifically target preventing double-spending attacks within cryptocurrency blockchains, with a focus on enhancing the security and integrity of transactions.

Network Observers: The scope includes the design and implementation of network observers capable of monitoring transaction activity and identifying potential instances of double-spending in real-time.

Peer-Alert Systems: Development of peer-alert systems to disseminate alerts and notifications to network nodes in order to facilitate rapid response and mitigation strategies against identified double-spending attempts.

Evaluation and Testing: The project will involve the evaluation and testing of the proposed prevention mechanism using simulated double-spending attacks and real-world data to assess its effectiveness and performance under varying conditions.

Documentation and Reporting: Documentation of the project's methodology, findings, and recommendations will be included to provide insights for stakeholders and contribute to the body of knowledge in cryptocurrency security.

CHAPTER 7

 CONCLUSION AND SUMMARY 

 Conclusion

In conclusion, the development and implementation of network observers and peer-alert systems represent a significant advancement in the field of cybersecurity, particularly in the context of preventing double-spending attacks within cryptocurrency blockchains. Despite the inherent limitations and challenges, our project has demonstrated the potential for these mechanisms to enhance the security and integrity of blockchain transactions. By leveraging real-time monitoring and rapid response capabilities, we have laid the groundwork for a proactive approach to combating double-spending attacks, mitigating risks, and safeguarding the trustworthiness of cryptocurrency networks.

 Summary for Internship Review

During my internship, I had the opportunity to engage in a wide array of cybersecurity activities, spanning from advanced blockchain security to fundamental ethical hacking techniques. Primarily, I contributed to a groundbreaking project focused on preventing double-spending attacks in cryptocurrency blockchains, where I assisted in the development and implementation of network observers and peer-alert systems. Concurrently, I undertook a mini-project targeting selective forwarding attacks, deepening my understanding of network-level vulnerabilities and mitigation strategies. Furthermore, I actively participated in Certified Ethical Hacker (CEH) modules, particularly modules 2 and 3, which emphasized the importance of footprinting, reconnaissance, and network scanning in ethical hacking practices. Through these diverse experiences, I not only gained practical skills in enhancing blockchain security and mitigating network vulnerabilities but also deepened my knowledge of ethical hacking methodologies essential for assessing and fortifying system defenses. This internship has been instrumental in broadening my expertise in cybersecurity and preparing me for future challenges in the field.

CHAPTER 8

 REFERENCES AND DEPENDENCIES

8.1 References

Primary Sources:Research Papers, articles, and reports.

Expert Interview: Prishita Ray, MIT

For JavaScript: https://www.javatpoint.com

https://www.youtube.com

International Journal of Research Publication and Reviews (https://www.ijrpr.com/ )

8.2Technological Dependencies

Utilization of blockchain network monitoring tools for detecting irregularities in transactions.

Implementation of peer-alert systems to notify nodes of potential double-spending attempts.

Integration of cryptographic protocols to enhance transaction security.

Deployment of Contiki OS and Cooja simulation environment for emulating RPL-based wireless sensor networks.

Implementation of selective forwarding attack models within the simulation environment.

Utilization of network analysis tools for monitoring network behavior and identifying anomalous patterns indicative of selective forwarding attacks.

.

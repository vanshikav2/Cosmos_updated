# COSMOS
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?
Check out our Notion Page: http://burnt-plantain-1a3.notion.site/

 > Short (1 - 2 min' read)
 * A marketplace for the transaction of data built on Blockchain technology
   
 * Problem: Give the average individual access to profit off the data market.

  In the wake of the AI boom, the demand for diverse and high-quality data has surged, while the supply struggles to keep pace. To address this gap, we are developing a digital marketplace that directly connects data buyers—such as big data corporations, marketing firms, and healthcare organizations—with the producers of data, most notably the everyday individual. Our platform aims to unlock new sources of valuable data, fostering a more dynamic and efficient data ecosystem to meet the growing demands of AI-driven industries.

**Why BlockChain?**

Blockchain technology, particularly Ethereum's ability to store data on a private chain, empowers our project by providing a secure, transparent, and efficient way to manage data transactions. Its decentralized nature eliminates the need for intermediaries, reducing fees and speeding up transactions. With blockchain, all transactions are transparent and easily verifiable, ensuring trust and preventing fraud. Additionally, the data stored on the blockchain is immutable, safeguarding its integrity and making it tamper-resistant. This combination of efficiency, security, and transparency creates a more reliable platform for data transactions.

**Ideal UseCase:**

Problem: Pharmaceutical companies need access to comprehensive patient data, including health records, genomic data, and lifestyle information, to develop personalized treatment plans. 
 
 Solution: 
* Pharmaceutical companies can bypass traditional data brokers by directly purchasing health records from 1,000 users on our platform who meet specific criteria. This process is faster and more cost-effective, as it eliminates the need for a middleman. 
* Users are compensated for their data, and they have control over the level of access provided. For example, they can choose to share encrypted files with limited-time access, ensuring privacy and data security. This approach streamlines the acquisition of critical health data for developing personalized treatments while empowering users with control over their information.


#### Q2: Who are your target users?

  ## Customers:

- Big Data Technology companies
    - User app experience data, reviews, frequency of us
- Healthcare Companies
    - Medical histories, lab results, exercise habits, fitness tracker datas, user prescriptions
- Social media platforms (e.g. Facebook, Twitter, Instagram)
- E-commerce giants (e.g. Amazon, Alibaba)
    - Browsing patterns, Consumer Preferences, Purchase History, User price sensitivity data
- Search engines (e.g. Google, Bing)
- Advertising technology companies (e.g. The Trade Desk, Criteo)
    - Demographic Data, Behavioural Data, Social Media Data, Browsing Data
- Data brokers (e.g. Acxiom, Experian)
- Market research firms (e.g. Nielsen, IRI)
- Financial services companies (e.g. Visa, Mastercard)
    - Financial behaviour, Credit Data, Risk Data
- Telecommunications providers (e.g. Verizon, AT&T)
- Real Estate and Property Development Companies
    - Demographic data(age, income, family size), geolocation data, data that can predict house purchase intent

## Users

- Average Person
    - Already accumulating potentially useful data
    - Needs a safe seamless store of their data
    - Looking to Generate Passive income
- Current Holders of Large User data
    - Hospitals - patient reports & records
    - Search Engines - User digital behaviour

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

> Short (1 - 2 min' read max)

Our product offers users the opportunity to generate passive income from the data they have already created, turning their existing information into a valuable asset.
For data buyers, our platform streamlines the process of finding individuals with the specific data they need, eliminating the time-consuming search. Additionally, by cutting out the middlemen who typically aggregate data, buyers can obtain high-quality datasets at significantly lower prices. This direct, efficient marketplace benefits both users and buyers, making data transactions faster, cheaper, and more transparent.

Unlike competitors who purchase data from users and offer compensation in cryptocurrency, our platform takes a different approach. We connect users with multiple companies, providing them with more opportunities to profit from their data. Additionally, instead of selling the data outright, we offer buyers limited access rights to use the data, ensuring that the user's data retains its value for future transactions. This flexible model allows users to control how their data is accessed, maximizing its long-term potential and giving them more control over their privacy and earnings.

#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

<!---  * At least 5 user stories concerning the main features of the application - note that this can broken down further
 * You must follow proper user story format (as taught in lecture) ```As a <user of the app>, I want to <do something in the app> in order to <accomplish some goal>```
 * User stories must contain acceptance criteria. Examples of user stories with different formats can be found here: https://www.justinmind.com/blog/user-story-examples/. **It is important that you provide a link to an artifact containing your user stories**.
 * If you have a partner, these must be reviewed and accepted by them. You need to include the evidence of partner approval (e.g., screenshot from email) or at least communication to the partner (e.g., email you sent) --->

1. As a user with potentially valuable data, I want to create an account, and upload my data in order to accrue passive income.
   
   Acceptance criteria: Upon creating an account, the user is prompted to upload their data. The user selects a category of data and is instructed how to format it. From the user dashboard they are able to upload additional data and view accrued income. They are able to withdraw funds from the platform.

3. As a user with a collection of data (e.g. search engine owner), I want to upload large amounts of data at once in order to accrue passive income.

   Acceptance criteria: In the user dashboard, the user is able to upload a collection of data points. The user is prompted to enter metadata such as description. They can view accrued income on the dashboard and withdraw funds.

5. As a data broker, I want to browse and find the data I need in order to purchase and export it.
   
   Acceptance criteria: There is a feed where you can search and filter for collections of data or individual peopele's entries. The user can select multiple listings and purchase them. The user is able to view transaction history and manage their purchased data on their dashboard.

7. As a user looking to verify an individual's data, I want to find someone's data in order to verify ownership.
   
   Acceptance criteria: The user can search for individual entries and find a user's data, then request permission to view it. The owner of the data can verify that they own this data, and then grant access to the user. The user can view this data.

9. As an admin, I want to be able to bundle and sell users' data in a collection to negotiate pricing with data brokers.
    
   Acceptance crieteria: The admin user is able to create a collection of data and list it for a price. Upon sale of the collection, funds are distributed to the owners of the data. 

#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

<!--- > Short (1-2 min' read max)
 * What is the technology stack? Specify languages, frameworks, libraries, PaaS products or tools to be used or being considered. 
 * How will you deploy the application?
 * Describe the architecture - what are the high level components or patterns you will use? Diagrams are useful here. 
 * Will you be using third party applications or APIs? If so, what are they? -->
**Our MockUp is in our deliverables folder**

## Tech Stack

- Database - NoSQL
    - Could also employ the InterPlanetary File System (Later Iteration)
- Blockchain - Ethereum
- Smart Contracts for storing metadata - Solidity
    - Could also employ these tools:
        - Remix IDE: A web-based IDE for writing, testing, and deploying smart contracts.
        - Hardhat or Truffle: Development frameworks for building, testing, and deploying smart contracts.
        - Web3.js or Ethers.js: JavaScript libraries to interact with the Ethereum blockchain.
- Smart Contracts for Transactions - Solidity
    - Tokenising - Selling Data as Non-fungible Tokens
        - Require the user data hash codes to be tokenised, and sold on a marketplace
        - TOKENISING means creating a unique tag for the user’s data that shows current ownership of the data, and other metadata
        - Pros:
            - Allows for secondary market trades on the data
            - Allows for royalties to be collected on sold data
            - Easier to connect with other Chains because there are existing protocols for that
        - Cons:
            - Expensive
    - Direct Data Transactions Using Smart Contracts (No tokens)
        - Pros:
            - Cheaper Gas Costs - costs of operations on the blockchain
            - Simpler to implement
        - Cons:
            - Harder to connect with other chains - we will need to design our programs for working with other chains
            - Ambiguous ownership - we would have to design a way to track ownership of user data
            - Less liquid - We would have to design a way to perform secondary trades or loyalties if needed.

----
## Intellectual Property Confidentiality Agreement 
<!-- > Note this section is **not marked** but must be completed briefly if you have a partner. If you hav e any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Your partner cannot ask you to sign any legal agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

Briefly describe which option you have agreed to. -->

> We have agreed to this: https://creativecommons.org/licenses/by-nc/4.0/
----
In summary, the team may use the code as they wish, but only members of this team can use this code for commercial purposes.
## Teamwork Details

#### Q6: Have you met with your team?

<!-- Do a team-building activity in-person or online. This can be playing an online game, meeting for bubble tea, lunch, or any other activity you all enjoy.
* Get to know each other on a more personal level.
* Provide a few sentences on what you did and share a picture or other evidence of your team building activity.
* Share at least three fun facts from members of you team (total not 3 for each member). -->

Yes, met on zoom and had an icebreaker where we shared our goals for the project, funfacts and interest in blockchain technology. Here are our fun facts:
* Leslie - Once used to do 8 min planks, and organised a high-school basketball competition.
* Kailas - Named after a mountain in Tibet, and used to run a food tech startup.
* Blake - I'm a member of Mensa Canada, and played hockey in division 1 at UofT and won the championship one year.
* Hao Lui - participating in the TCBL Amateur Basketball League and plays a game with my friends every Sunday, and was born in China, I came to Canada after completing the complete Chinese-style education and college entrance examination.
* Vanshika - Legally, her first name is the same as her last name and I have been boxing for about 8 years now.

![image](https://github.com/user-attachments/assets/dd1f4deb-aadb-46c2-827e-e39dfd222984)

#### Q7: What are the roles & responsibilities on the team?

Describe the different roles on the team and the responsibilities associated with each role. 
 <!-- * Roles should reflect the structure of your team and be appropriate for your project. One person may have multiple roles.  
 * Add role(s) to your Team-[Team_Number]-[Team_Name].csv file on the main folder.
 * At least one person must be identified as the dedicated partner liaison. They need to have great organization and communication skills.
 * Everyone must contribute to code. Students who don't contribute to code enough will receive a lower mark at the end of the term.

List each team member and:
 * A description of their role(s) and responsibilities including the components they'll work on and non-software related work
 * Why did you choose them to take that role? Specify if they are interested in learning that part, experienced in it, or any other reasons. Do no make things up. This part is not graded but may be reviewed later. -->

Team Roles Can be Found Here: https://burnt-plantain-1a3.notion.site/Team-Tracker-107fedce4cdf804a900ae9e99f7f9a4f?pvs=74


#### Q8: How will you work as a team?

<!-- Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You should have 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * You must keep track of meeting minutes and add them to your repo under "deliverables/minutes" folder
   * You must have a regular meeting schedule established for the rest of the term. -->

As a team, we will:

* Meet every Thursday from 8:20pm to 9:00pm via Zoom to review the previous deliverable, discuss the upcoming one, and assign tasks accordingly.
* Conduct pulse checks every Tuesday to assess the progress of deliverables and provide any additional support needed to meet deadlines.
* Since there is no project partner, meeting minutes will be recorded and shared to ensure everyone stays aligned.
  
#### Q9: How will you organize your team?

List/describe the artifacts you will produce in order to organize your team.       

 <!-- * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done? (You must grant your TA and partner access to systems you use to manage work)
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion? -->
     
 To organize our team effectively, we will produce and maintain the following artifacts:

* To-Do Lists and Task Boards:

We will use a ClickUp task board to track all tasks and deliverables, where each task is clearly defined with deadlines, priorities, and assigned team members. This board will be accessible to our TA and team members.

* GitHub Workflow:

Each team member will clone the repository to their local device and use pull requests to fetch the latest version of the code, allowing them to test their changes locally. Once their code has been fully tested and is ready to be integrated, they will push their changes to the main repository. In the event of any merge conflicts, our Development Manager, Blake, will resolve these conflicts before the merge request is approved.

* Task Prioritization:

The two project managers, Leslie and Andy, will review the tasks for each deliverable, prioritizing them based on deadlines and complexity. They will then present the prioritized tasks to the team for collaborative input on solutions.

* Task Assignment:

Blake, our development manager and scrum master, will break down coding tasks into smaller, well-defined units with acceptance criteria. Blake will then assign these tasks to team members based on their expertise, while overseeing the status and addressing conflicts in our GitHub repository.

* Tracking Progress:

We will conduct pulse checks on Tuesdays to assess the progress of each task. Our ClickUp account is integrated with Discord via a bot to provide real-time updates and communication, making it easy for everyone to track the status of tasks from inception to completion.

* Meeting Minutes:

One of the project managers will document meeting minutes during every Zoom session to ensure all discussions, decisions, and action points are recorded and shared with the team.
This structure ensures clear task assignments, transparent tracking, and smooth coordination throughout the project.

#### Q10: What are the rules regarding how your team works?

<!-- **Communications:**
 * What is the expected frequency? What methods/channels will be used? 
 * If you have a partner project, what is your process for communicating with your partner?
 
**Collaboration: (Share your responses to Q8 & Q9 from A1)**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 * How will you address the issue if one person doesn't contribute or is not responsive? -->

Communications:

We use Discord as our primary communication platform. The server is structured with specific channels:

* General Conversation: For informal discussions and team bonding.
* Task-Specific Channels: For targeted questions and task-related discussions.
* Notes-and-Resources Channel: For sharing meeting minutes, project documentation, and helpful resources.
* Task-Tracker Channel: Integrated with ClickUp to provide real-time updates on task assignments and progress.
  
Collaboration:
  Collaboration is open and inclusive. Everyone has access to each other and the project resources. Team members are expected to prioritize their assigned tasks first, but we encourage helping others when needed. We strive to complete the project efficiently while being mindful of individual timelines and workloads. Flexibility and communication are key, ensuring that even if someone falls behind, the team supports them to stay on track.
  
<!-- ## Organisation Details

#### Q11. How does your team fit within the overall team organisation of the partner?
 * Given the team structure of your partner, what role do you think your team will play?
* Examples include product development that includes developing new features, or quality assurance that includes developing features that test the product reliability, or software maintenance that includes fixing crucial bugs in the product.
* Provide examples of why you think you fit this role.

#### Q12. How does your project fit within the overall product from the partner?
* Look at the big picture of the product and think about how your project fits into this product.
* Is your project the first step towards building this product? Is it the first prototype? Are you developing the frontend of a product whose backend is developed by the partner? Are you building the release pipelines for a product that is developed by the partner? Are you building a core feature set and take full ownership of these features?
* You should also provide details of who else is contributing to what parts of the product, if you have this information. This is more important if the project that you will be working on has strong coupling with parts that will be contributed to by members other than your team (e.g. from partner).
* You can be creative for these questions and even use a graphical or pictorial representation to demonstrate the fit. -->

## Potential Risks

#### Q13. What are some potential risks to your project?
 * Financial risk exists if there is no successful private blockchain Ethereum financial solution implemented enough.
 * 
   We need to make sure that as a team we have a strong financial solution to support our blockchain so that it can sustain itself. There are large costs with hosting a large web database blockchain.
 * Project risks surrounding contributions and code management.

   With multiple people working on the same project, we may undergo issues in terms of our code repository.
 
 * Security, what if our project is comprimised?
   
   We need to keep security in mind to make sure that the end product is not comprimised as it is hosting lots of information and possibly sensitive information as a blockchain and database.

#### Q14. What are some potential mitigation strategies for the risks you identified?

 * We are looking into fees/staking ETH to make up the financial portion of the business that is necessary.
   
 * We are using ClickUp for task management and plan on 2 weekly meetings or whatever is necessary.
   
 * We will work on input sanitation etc. to make sure our software is as safe as possible.

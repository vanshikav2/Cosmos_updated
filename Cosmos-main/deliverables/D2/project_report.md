# Project Report - The Code Breakers (Team 23)

## Problem and Partner
In the wake of the AI boom, the demand for diverse and high-quality data has surged, while the supply struggles to keep pace. To address this gap, we are developing a digital marketplace that directly connects data buyers—such as big data corporations, marketing firms, and healthcare organizations—with the producers of data, most notably the everyday individual. Our platform aims to unlock new sources of valuable data, fostering a more dynamic and efficient data ecosystem to meet the growing demands of AI-driven industries.

## Existing Software/Infrastructure
The project will leverage the Ethereum blockchain and Infura, a robust and scalable infrastructure that provides access to Ethereum nodes, to host and test "The Code Breakers" work and contracts.

## Project Division
We divided the project among three subteams: the front-end team, the back-end team, and the database team.

The front-end team was responsible for developing the user interface and user experience of the marketplace.
The back-end team was responsible for developing the smart contracts that will govern the transactions on the marketplace.
The database team was responsible for developing the database that will store the data and user information.
We decided to divide the project this way because it allowed each team to focus on their area of expertise. This also allowed us to develop the marketplace in a more efficient and timely manner.

## Subteam Responsibilities
#### The Front-End Team
The front-end team developed the user interface and user experience of the marketplace. They used React to create a user-friendly and responsive interface. They also implemented the login functionality, the buy data functionality, and the sell data functionality.

#### The Back-End Team
The back-end team developed the smart contracts that will govern the transactions on the marketplace. They used Solidity to write the contracts. The contracts are designed to be secure and efficient. They also handle the exchange of data and the transfer of funds.

#### The Database Team
The database team developed the database that will store the data and user information. They used a NoSQL database to store the data. The database is designed to be scalable and efficient.

## Software Architecture Diagram
The diagram shows the three main components of the marketplace: the front-end, the back-end, and the database. The front-end is responsible for interacting with the users. The back-end is responsible for handling the transactions. The database is responsible for storing the data and user information.

![image](https://github.com/user-attachments/assets/5e1d8e52-88cd-4178-a666-f55145a00d3a)

###### Interactions:

Users interact with the Front-End through the user interface for tasks like login, browsing data, and uploading/downloading data.
The Front-End communicates with the Back-End via API endpoints to request data or initiate transactions.
The Back-End handles transaction logic, executes smart contracts, and interacts with the Blockchain via Infura.
The Back-End also interacts with the Database to store and retrieve data, user information, and metadata.
The Database stores and manages the data, ensuring its availability and integrity.
The Ethereum Blockchain provides a secure and transparent platform for recording transactions and ensuring data immutability.

This architecture ensures a clear separation of concerns and allows for efficient data management, secure transactions, and a user-friendly interface.

Tools/Technologies:

Front-End: React
Back-End: Node.js, Solidity, Infura
Database: NoSQL (e.g., MongoDB)
Blockchain: Ethereum

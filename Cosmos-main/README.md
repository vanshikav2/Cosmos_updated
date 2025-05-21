# **Project 23 - The Code Breakers**

## **Partner Intro**

Since this is a student project, we will supply the primary and secondary points of contact:

**Project Manager:**
Leslie Wodu - gesi.wodu@mail.utoronto.ca  

**Development Manager:**
Blake Burns - blake.burns@mail.utoronto.ca  

We are a combined team of eight University of Toronto students, working collaboratively on GitHub and Discord. We have no external partners and operate entirely within our internal team.

---

## **Project Description**

We are developing a blockchain-based product enabling users to buy and sell data securely and transparently on the web.  

In the age of Big Data, accessing specific datasets (e.g., medical data about certain diseases) can be challenging. Our solution is a decentralized Ethereum blockchain application that creates a marketplace for data transactions while ensuring security, transparency, and user privacy.

---

## **Key Features**

1. **Data Uploading:** Users can bring their data into the blockchain, where it is securely stored for marketplace transactions.
2. **Data Buying:** Buyers can purchase datasets for a defined time or via a downloadable link, paying in ETH (Ethereum cryptocurrency).
3. **Data Selling:** Sellers can list their data for sale, set prices, and receive payments in ETH upon successful transactions.
4. **Marketplace:** A centralized interface for users to browse, buy, or sell datasets in an organized manner.

These features work together to create a seamless, secure, and decentralized platform for data exchange.

---

## **Instructions for Users**

1. **Accessing the Application:**
   - Visit our website to access all functionalities.
   - Register on the platform using the **Register Page**. This action adds your profile to our database and blockchain.

2. **Navigation:**
   - The website includes multiple pages for user actions (e.g., Profile, Upload Data, Buy Data, Sell Data).
   - Navigate easily using the top navigation bar, which includes links like "Home," "Profile," and "Marketplace."

3. **Performing Actions:**
   - **Upload Data:** Go to the Profile page, select the upload option, and follow the instructions.
   - **Buy Data:** Browse listings in the Marketplace, choose datasets, and confirm payment via MetaMask.
   - **Sell Data:** List your datasets with the desired price, and the platform will handle the transaction securely.

---

## **Development Requirements**

Our tech stack consists of the following:

### **1. Backend**
   - **Solidity:** 
     - Used to write the smart contracts that power the decentralized marketplace. 
     - Key functionalities include managing dataset listings, executing transactions in ETH, and ensuring secure data ownership transfers.
     - The smart contracts are designed to emit events after transactions, which can be captured by the backend to update the database.
   - **Node.js:** 
     - Serves as the primary backend server, handling API requests between the frontend, MongoDB, and Ethereum blockchain.
     - Facilitates communication with the blockchain using libraries like `web3.js` or `ethers.js`.
     - Hosts the RESTful API for CRUD operations on marketplace data, enabling features like browsing, buying, and selling datasets.
     - Middleware like `Express.js` is used for routing and handling incoming requests efficiently.
   - **MongoDB:** 
     - Acts as the off-chain database for storing metadata about datasets, such as titles, descriptions, file sizes, pricing, and transaction history.
     - Used to track user activity and ownership, ensuring that buyers and sellers have an accessible record of their transactions.
     - Features like indexing and aggregation pipelines are utilized to support fast search and analytics.

### **2. Frontend**
   - **HTML5, CSS3, JavaScript:** 
     - The core technologies for building the user interface.
     - Used to design an intuitive marketplace interface with features like search filters, dataset previews, and dynamic forms for uploading and managing listings.

### **3. Blockchain**
   - **Ethereum:** 
     - Hosts the decentralized application, ensuring transparency and security for all marketplace transactions.
     - Uses the Rinkeby or Goerli test networks during development for cost-effective and safe testing.
     - Transactions, such as buying and selling datasets, are executed using ETH and are immutably recorded on the blockchain.
   - **Truffle:** 
     - Provides a framework for developing, testing, and deploying smart contracts on Ethereum.
     - Facilitates automated testing of smart contract functionality, ensuring the robustness of critical features like payments and ownership transfers.
   - **Ganache:** 
     - A local Ethereum blockchain used during development to test transactions and smart contracts in a controlled environment.
     - Enables developers to simulate real blockchain interactions without incurring gas costs.
     - Comes with a built-in GUI for monitoring accounts, transactions, and events.

### **Integration and Workflow**
- **Frontend-Backend Communication:** 
  - The frontend communicates with the backend via RESTful APIs to interact with MongoDB and Ethereum. Actions like uploading datasets or viewing transaction histories are facilitated through these APIs.
  - MetaMask integration allows users to sign Ethereum transactions directly from their browsers.
- **Backend-Blockchain Connection:** 
  - The Node.js server communicates with Ethereum smart contracts using `web3.js` or `ethers.js` to execute transactions and retrieve on-chain data.
  - Events emitted by the blockchain (e.g., purchase confirmations) are captured and used to update the MongoDB database.
- **Testing Frameworks:**
  - Use tools like Mocha and Chai for backend testing and Truffle for smart contract testing.
  - Frontend testing is conducted with libraries like Jest or Cypress to ensure consistent user experiences.

### **Setup Instructions**
1. Install Node.js and MongoDB.
2. Configure the MongoDB database for local deployment.
3. Ensure the web directory (HTML, CSS, JavaScript) is correctly set up.
4. Run the Node.js server to start the application.

---

## **Deployment and Workflow**

1. **GitHub Workflow:**
   - Code is submitted via GitHub with pushes, pulls, and reviews by the Development Manager.
   - Regular weekly meetings (or biweekly as needed) ensure an agile workflow with code review, task allocation, and issue resolution.

2. **Local Deployment:**
   - The prototype is currently deployed locally.
   - Once the prototype is finalized, we aim to deploy the application in a production environment.

3. **Task Management:**
   - Tasks are managed via **ClickUp** to track progress and assign responsibilities.

---

## **Coding Standards and Guidelines**

1. **Documentation:** Use extensive comments and inline documentation for clarity.
2. **Standard Practices:** Adhere to industry coding standards for simplicity and maintainability.

---

## **Licenses**

The project uses a **Creative Commons Attribution-NonCommercial 4.0 International License**:
[Learn more about this license](https://creativecommons.org/licenses/by-nc/4.0/).  

This ensures the code is open for sharing but protected from unauthorized commercial use.

---

## **Future Maintenance**

1. **Codebase Updates:**
   - **Database Integration with MongoDB:**
     - Establish a seamless connection between the MongoDB database and the frontend to enable full functionality for data uploads and marketplace interactions:
       - Implement an API layer using Node.js and Express.js to handle CRUD operations for data uploads, purchases, and marketplace listings.
       - Create RESTful endpoints for interacting with the MongoDB database, ensuring proper data validation and error handling.
       - Use middleware such as `mongoose` for schema validation to enforce consistent data formatting for uploaded datasets.
     - Add real-time updates to the frontend using WebSocket connections or polling mechanisms, so users immediately see new datasets or purchase confirmations reflected in the UI.
     - Example workflow:
       1. A user uploads a dataset via the frontend.
       2. The frontend sends a POST request to the API.
       3. The API validates the data and stores it in MongoDB, returning a confirmation to the frontend.

   - **Improving Upload Functionality:**
     - Replace the current placeholder "Upload" button with functionality that directly connects to the MongoDB backend:
       - Include a progress indicator on the frontend to show users the status of their upload.
       - Implement file validation in both the frontend (e.g., acceptable formats) and backend (e.g., file size limits).
       - Automatically generate metadata for uploaded datasets, such as file type, size, and upload timestamp, and store it in MongoDB.

   - **Ethereum Backend Integration:**
     - Connect Ethereum smart contracts to MongoDB to track marketplace transactions:
       - Record transaction details (e.g., buyer, seller, dataset ID, and ETH amount) in MongoDB for auditability and analytics.
       - Update smart contract functions to emit events after successful transactions. These events can be captured using a Node.js listener, which then updates the MongoDB database.
       - Use `web3.js` or `ethers.js` to bridge the gap between the frontend and the Ethereum backend, ensuring smooth interaction with MetaMask for signing transactions.
     - Replace the current placeholder "Buy" button with a fully functional workflow:
       - Trigger a smart contract function to process the transaction and transfer ownership of the dataset.
       - Update the MongoDB database to reflect the new owner and transaction details.

   - **Improved Testing and Debugging:**
     - Write unit and integration tests to ensure database and blockchain connectivity:
       - Test API endpoints using tools like Postman or automated test suites (e.g., Jest or Mocha).
       - Simulate user workflows (e.g., uploading a dataset, purchasing it, and confirming ownership) to validate end-to-end functionality.
       - Include mock transactions on a local Ganache instance to test Ethereum and MongoDB interactions.

   - **Scalability and Optimization:**
     - Optimize database queries for scalability, such as indexing frequently searched fields (e.g., dataset categories, prices).
     - Add pagination to API responses to handle large marketplace datasets efficiently.
     - Set up a caching layer (e.g., Redis) to reduce MongoDB load for frequently accessed data, such as popular datasets.

   - **Error Handling and Logging:**
     - Implement comprehensive error handling for all API endpoints, ensuring that users receive clear feedback for issues like invalid file uploads or failed transactions.
     - Add logging to track database and Ethereum interactions using tools like `winston` or `Morgan`. These logs will help identify and resolve connectivity issues quickly.
2. **Documentation:**
   - Maintain detailed change logs and update the README with any structural changes.
3. **Handover Notes:**
   - Ensure seamless knowledge transfer for future developers by keeping ClickUp, GitHub issues, and documentation up to date.
4. **Additional Features:**
   - **Enhanced Buyer-Seller Matching Algorithms:**
     - Implement algorithms like QAOA (Quantum Approximate Optimization Algorithm) and Grover’s search to optimize marketplace transactions by improving buyer-seller matching:
       - Use QAOA to analyze user behavior, dataset characteristics, and demand trends for efficient matchmaking.
       - Incorporate Grover’s search for faster query handling when buyers search for specific datasets, reducing time complexity for large datasets.
   - **Cross-Chain Compatibility:**
     - Integrate support for multiple blockchain networks (e.g., Ethereum, Polygon, and Binance Smart Chain) to improve scalability and accommodate users with diverse preferences.
     - Develop interoperable smart contracts that enable seamless dataset and transaction transfers across chains.
     - Use blockchain bridges or oracles to synchronize user activity and transaction histories across multiple networks.
   - **Dynamic Pricing and Tiered Access Models:**
     - Enable sellers to set dynamic pricing based on data usage patterns, time-bound access, or demand spikes.
     - Introduce tiered access levels:
       - **Basic Access:** Limited previews or time-restricted access to datasets.
       - **Full Access:** Unlimited downloads with higher pricing tiers.
   - **Improved Data Format Support:**
     - Update the marketplace to handle diverse dataset formats, including CSV, JSON, and multimedia files, ensuring broader usability for buyers and sellers.
     - Extend smart contract logic to support metadata for these formats, improving searchability and categorization efficiency.
   - **Decentralized Storage Enhancements:**
     - Transition data storage to IPFS or similar decentralized solutions to ensure secure and scalable off-chain storage.
     - Link IPFS hashes to Ethereum smart contracts, enabling transparency and immutability in data transactions.
   - **Analytics Dashboard:**
     - Build a seller analytics dashboard to provide insights into dataset performance, buyer preferences, and marketplace trends.
     - Incorporate visualizations such as charts and graphs powered by off-chain data analysis tools.

---

## **System Deployment**

### **Steps to Deploy Locally**
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd decentralized-data-marketplace

### Install Dependencies
```bash
npm install
```
Start Ganache
Ensure Ganache is running on port 7545.

## Configure truffle-config.js
```bash
javascript
Copy code
development: {
   host: "127.0.0.1",
   port: 7545,
   network_id: "*",
}
```
## Compile and Migrate Contracts
```bash
Copy code
truffle compile
truffle migrate
```

## Launch the Frontend
```bash
Copy code
npm start
```

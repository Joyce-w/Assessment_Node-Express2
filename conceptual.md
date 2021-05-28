### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    JWT stands for Json web token and is made up of different parts that work together to help authenticate and puts users in a session.
- What is the signature portion of the JWT?  What does it do?
    The signature portion consists of a header and a payload that is turned into base64, hashed in an algorithm that is shown in the header. The signature contains the secret key to verify the sender as who they say they are to ensure the message was not altered.
- If a JWT is intercepted, can the attacker see what's inside the payload?
    Payload is encoded and not encrypted so an attacker who intercepts the JWT will be able to see it's contents.
- How can you implement authentication with a JWT?  Describe how it works at a high level.
    Authentication can be implemented with a 'jsonwebtoken' package which contains a verify()  method to check that the jwt generated token has a signature that matches the secret key from the application server. 
- Compare and contrast unit, integration and end-to-end tests.
    - **Unit test** only tests one small piece like functions outputting what they should. Simple and easy
    - **Integration** tests multiple units and how they interact together, like testing a route with a session.
    - **Unit-to-unit** test the entire process from beginning to end for functinality. Takes more time and does not tell you what part is non-functional, but can test user experience, forms, responses, etc.
- What is a mock? What are some things you would mock?
    A mock is mainly used in unit testing. Isolates the behavior you replace other objects by mock that stimulate their behavior. Can be faster and dont need an API response time but can be difficult to set up.
- What is continuous integration?
    Continuous integration is constantly integrating small code changes rather than a large portion. This encourages continuous testing and prevents code from sitting and waiting to be tested all together for long periods of time.
- What is an environment variable and what are they used for?
    An environment variable is available when node starts up giving access to global objects. These objects can be PORT, secret keys, db setting, etc. These can be changed or added depending on what is needed. 
- What is TDD? What are some benefits and drawbacks?
    Test driven development takes approaching an app by writing tests first. In a way it is backwards planning by thinking out what tests are needed in order to get certain features to write features. TDD helps you think about your code before you start but sometimes can create features that wont be easily tested.
- What is the value of using JSONSchema for validation?
    JSONSchema is used to validate the format of incoming request data to prevent any errors that may occur later. These can be verifying a year as a type of integer and not string, or has a minimum of 4 characters in length, etc.
- What are some ways to decide which code to test?
    Testing routes or models are a must in code testing. Within the testing itself, APIs should be tested rather than dbs. More specific example would be testing whether a return has a certain length or value rather than testing if there is something in the db.
- What are some differences between Web Sockets and HTTP?
    Web Sockets are stateful meaning they are constantly connected. HTTP on the other hand are stateless and gets connections cut after a request or response is made.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
    Express was not enjoyable to use at the start due to the amount of requirement code needed on every file as well as a seperate file for app.js, config.js, db.js, etc.. BUT after getting used to it, I like them about the same! The package.json file is useful because it shows the versions and packages that were installed all in once place.

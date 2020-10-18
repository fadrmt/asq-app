# Asq: A Simple Q&A Application

*Asq* is a simple web application that allows visitors to view questions and answers previously posted, as well as submit their own. It is built using Docker, Django REST Framework and ReactJS with a PostgreSQL database. 

## Features
+ Users can view all previously posted questions
+ Users can search questions by question title
+ Users can submit their own question
+ Users can view all answers to a question
+ Users can submit their answers to a question

## Installation

Docker and Docker Compose must first be installed. See [this link](https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=94798094) for full instructions.

To run this application, clone this repository and navigate to the project folder. Then run the following command:

```
sudo docker-compose up --build
```

Once the containers are up, open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

You may run the script `sample_tests.sh` on your project directory to test if the backend API is working.

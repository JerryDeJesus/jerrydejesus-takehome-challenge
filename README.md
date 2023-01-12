# raffle-takehome-challenge

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Raffle-Takehome-Coding-Challenge

Coding challenge where you build a Raffle App including a RestAPI and connected Web Client (React)

## Prerequisites

- Node.js account
- Knowledge or JavaScript and React
- Knowledge of RestAPIs
- Knowledge of Databases

## Getting Started

0. Create a new repo for your app (e.g. {your-name}-takehome-polleverywhere)
1. Create a new Node + Express app for your API
2. Create a new React App.
   - You may use `create-react-app` or any other starter app
3. Complete all Technical Requirements listed below
   a. Create an API with all routes listed below (this will require database tables, the database structure is up to you)
   b. Create a Front-end that allows the user to view & create Raffles, as well as, select winners 

## Technical Requirements

Create a client for a Raffle application. Users are able to:

- Create raffles
- List all raffles
- Add participants users to raffles
- Draw a winner from a raffle, etc.

**Notes**:

- You may use any 3rd-party libraries or packages for functionality or styling.
  - We recommend you use something like Bootstrap or Material UI or others to style you app.

### API

Use the details and endpoints of the API below to guide the development of your API. This API should accept and return JSON payloads.

| Method | Endpoint                        | Description                                                | Example JSON Body Payload                                                                              |
| ------ | ------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `GET`  | `/api/raffles`                  | List all raffles                                           | n/a                                                                                                    |
| `POST` | `/api/raffles`                  | Create a raffle                                            | `{ "name": "My first Raffle", "secret_token": "s3CrE7" }`                                              |
| `GET`  | `/api/raffles/:id`              | Retrieve a raffle by id                                    | n/a                                                                                                    |
| `GET`  | `/api/raffles/:id/participants` | Retrieve all participants of a raffle                      | n/a                                                                                                    |
| `POST` | `/api/raffles/:id/participants` | Sign up a participant for a raffle                         | `{ "firstname": "Jane", "lastname": "Doe", "email": "jdoe@email.com", "phone": "+1 (917) 555-1234", }` |
| `PUT`  | `/api/raffles/:id/winner`       | Pick a winner from the participants at random for a raffle | `{ "secret_token": "s3CrE7" }`                                                                         |
| `GET`  | `/api/raffles/:id/winner`       | Retrieve the winner of a raffle                            |                                                                                                        |

#### Notes

- A `secret_token` must be provided when creating a raffle. This token can be any random string and will be used when picking a winner for the raffle. Only if the creation token matches the one in the PUT request to pick a winner the raffle will be performed and a winner will be awarded.
- When adding a participant to a raffle all fields are required but `phone`

### Wireframes

Your application doesn't have to look exactly as the wireframes below, however it should have all the main components, accomplish all the functionality and be visually pleasing.

- Web Wireframes can be found [here](./Web-Raffle-App-Wireframes.pdf)

### App Pages/Views

As a guide for your work, you may use the wireframes above and follow the directions below to create your Front-end.

#### Home `/`

Display a form to add a new raffle with name and token fields and a submit button. Show a success message upon successful raffle creation and an error message otherwise.

Should also display a list of all raffles and when you click in one of the raffles of the list it should take the user to that raffle's page/view.

#### Single Raffle `/raffles/:id`

Displays a nav bar or navigation menu that would take the user to **All Raffles**, **Participants** and **Pick Winner** pages/views.

Below the navbar display a form to add a new participant to the Raffle. The form must include First Name, Last Name, Email and Phone inputs. The phone input should be optional and all others required. Include two buttons one to submit and another to reset the form.

#### Raffle Participants `/raffles/:id/participants`

Display the total number of participants and a list of all users and their information.

#### Pick Winner `/raffles/:id/winner`

Displays a form where a user (the raffle admin) can input their secret token and pick a winner at random for the raffle. If a winner has already been picked this page/view should display a card with the user information and a celebratory image and never show the form again.

## Submission Guidelines

- We think this challenge would take ~10 hours to complete, so allocate your time appropriately.
- You must submit your solution no later than **Tuesday January 17th @ 10:00am**
- Include a README.md file with instructions on how to run your project.
- For any questions reach out to @Billy Taggart in the [Pursuit Core Workspace](https://pursuit-core.slack.com/)

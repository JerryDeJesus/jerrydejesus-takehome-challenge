# Raffle-Takehome-Coding-Challenge

A Full Stack Web App, Raffle App, including a RestAPI and connected Web Client (React)

## Getting the Repo Started

- Fork the most recent version from GitHub.
- `git clone` the forked repo to your local machine.
- In the terminal, navigate to each the frontend AND backend and for EACH, run `npm install` to install the necessary dependencies included in their  respective `package.json` files.
- go into `package.json` and put `server.js` as the value for the key `main`
- Do not forget to create and include a `.env` file on BOTH the frontend AND backend roots.


This **.env** file should be included in the backend root:
```
PORT=8888
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=raffle_takehome
PG_USER=postgres
PG_PASSWORD=""
```

, while this **.env** file should be included in the frontend root:

```
REACT_APP_API_URL=http://localhost:8888
```

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

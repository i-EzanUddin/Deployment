require("dotenv").config()

const express = require('express')
const all = express()
const port = 4000
const requirePort = process.env.PORT || port
const mydata = {
  "login": "i-EzanUddin",
  "id": 231765363,
  "node_id": "U_kgDODdB1cw",
  "avatar_url": "https://avatars.githubusercontent.com/u/231765363?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/i-EzanUddin",
  "html_url": "https://github.com/i-EzanUddin",
  "followers_url": "https://api.github.com/users/i-EzanUddin/followers",
  "following_url": "https://api.github.com/users/i-EzanUddin/following{/other_user}",
  "gists_url": "https://api.github.com/users/i-EzanUddin/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/i-EzanUddin/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/i-EzanUddin/subscriptions",
  "organizations_url": "https://api.github.com/users/i-EzanUddin/orgs",
  "repos_url": "https://api.github.com/users/i-EzanUddin/repos",
  "events_url": "https://api.github.com/users/i-EzanUddin/events{/privacy}",
  "received_events_url": "https://api.github.com/users/i-EzanUddin/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Syed Ezan Uddin",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "FASTian'29,      \r\nASTROPHILE,     \r\nA PASSIONATE PROGRAMMER  ",
  "twitter_username": null,
  "public_repos": 45,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-09-11T19:32:00Z",
  "updated_at": "2026-03-25T23:25:15Z"
}

all.get("/",(req,res) => {
    res.send("Welcome to my own server")
})

all.get("/instagram", (req,res) => {
    res.send(`<h1>Welcome to my instagram page</h1>`)
})

all.get("/github", (req, res) => {
    res.json(mydata)
})

all.listen(requirePort,() =>{
    console.log(`On port ${requirePort}`)
})
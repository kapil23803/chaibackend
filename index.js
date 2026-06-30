require('dotenv').config()
const express = require('express')
// imoport express from "express"
const app = express()

const port = 3000

const githubData = {
  "login": "kapil23803",
  "id": 194982858,
  "node_id": "U_kgDOC58zyg",
  "avatar_url": "https://avatars.githubusercontent.com/u/194982858?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kapil23803",
  "html_url": "https://github.com/kapil23803",
  "followers_url": "https://api.github.com/users/kapil23803/followers",
  "following_url": "https://api.github.com/users/kapil23803/following{/other_user}",
  "gists_url": "https://api.github.com/users/kapil23803/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kapil23803/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kapil23803/subscriptions",
  "organizations_url": "https://api.github.com/users/kapil23803/orgs",
  "repos_url": "https://api.github.com/users/kapil23803/repos",
  "events_url": "https://api.github.com/users/kapil23803/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kapil23803/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-14T17:11:26Z",
  "updated_at": "2025-01-15T09:36:34Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('hiteshdotcom')
})
app.get('/login',(req,res) => {
    res.send('<h1>please login at chai aur code </h1>')
})
app.get('/youtube',(req,res) => {
    res.send("<h2>chai aur code</h2>")
})

app.get('/github',(req,res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
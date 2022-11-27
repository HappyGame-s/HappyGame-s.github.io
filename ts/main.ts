async function getgit (owner:string, repo:string, path:string) { 
    // A function to fetch files from github using the api 
    
  let data = await fetch (
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  )
    .then (d => d.json ())
    .then (d =>
      fetch (
        `https://api.github.com/repos/${owner}/${repo}/git/blobs/${d.sha}`
      )
    )
    .then (d => d.json ())
    .then (d => JSON.parse (atob (d.content)));

    return data;
}


var gg:any;
getgit("HappyGame-s", "HappyGame-s", "shop.json").then(
    (value) => {
        gg = value;
    }
);
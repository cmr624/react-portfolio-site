# Projects

## Structure Debrief

Currently, I have the following in nodepersonalsite:

### Project-Specific Pages

```javascript
{
        "name": "Clarify",
        "coverURL": "/images/projects/clarifyMockUp.gif",
        "sections":[
          {
            "title": "Project Description",
            "description":"lorem ipsum",
            "list": null
          },
          {
            "title": "Technologies Used",
            "description":null,
            "list": ["Node JS", "Socket.io", "etc"]
          },
          {
            "title": "More Information",
            "description":"lorem ipsum",
            "list": null
          }
        ],
        "links":[
          {
            "type":"fa fa-newspaper-o",
            "description":"Article Link",
            "link":"url.url"
          }
        ],
        "images":[
          {
            "path":"/images/projects/clarifyLogo.png",
            "topCaption":"Clarify",
            "bottomCaption":"Won top prize at HackNYU 2018",
            "active":"active"
          }
        ]
}
```

Since we're moving to MongoDB, we're having express serve up this JSON instead of hard-coding it (finally). The problem is we need to do a bit of research on how MongoDB works to best put these into collections.

### High Level Goals

Quick definition - "project" is the word we'll use for something that has both these properties:

1. its own rendered web page
2. some sort of preview generated from the content in the actual routed web page

So if we're talking about routes, we'll have first

`/webdev`

which is an index page with all my webdev projects, has some text about them, then a list of all my projects, like this website, which would be the route

`/webdev/reactportfoliosite`

which would be that full rendered web page. but in `webdev` it still looks in the db for "preview" content and renders it in the components. Here we can also do fun things like grouping by tags, or sorting alphabetically, or whatever.

# Recipes

## Basic Pages
- [ ] `/recipes/` - Home page for the website. Have access to `/recipes/signup` and `recipes/signin`
- [ ] `/recipes/signin` - Sign in using your credentials to the account. Once signed in, site redirects to `/recipes/dashboard`
- [ ] `/recipes/signup` - Sign up with a username, password, and an "affiliation" text field. Once signed up, site redirects to `/recipes/dashboard`
- [ ] `/recipes/dashboard` - A user dashboard. Here, a user can access their favorite recipes, organize them in collections, and access `/recipes/search` and `/recipes/add`
- [ ] `/recipes/search` - An overall "search" interface where users can
  - [ ] Search for recipes based on 
    - [ ] Ingredients
    - [ ] Key words
    - [ ] Tags (dinner, cuban, appetizer, soup, etc.)
    - [ ] Collection (dinner recipes, alyssa's recipes, etc.)
    - [ ] Author
  - [ ] Users can click a "favorite" button to add it to their own private collection, favorites, or whatever collection they'd like
- [ ] `/recipes/add`- A UI to add recipes into the app, should be able to add all of these fields
  - [ ] Upload picture
  - [ ] Title
  - [ ] Author
  - [ ] Time to cook for recipe
  - [ ] # of servings
  - [ ] Ingredient list
    - [ ] Quantity
    - [ ] Ingredient name
  -  [ ] Steps list
     -  [ ] This should be a numbered list of steps.
  - [ ] Metadata (this refers to data that isn't directly shown on the recipe page, but is important to know about the recipe - AKA collections, tags, or key words)
- [ ] `/recipes/chicken-parm` - Here's an example recipe.
  - [ ] The content that needs to be displayed is all of the content referred to above in the `/recipes/add` specification. 
  - [ ] However, there should be the ability to do the following
    - [ ] Share toolbar (share on twitter, facebook, messages, etc.)
    - [ ] # of servings is adjustable. For example, if you make a recipe for 10 people, I should be able to change that number to 5, and all ingredients will change by half. 


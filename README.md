# Project Name : Visa Navigator [Assignment Category: Sunflower]

## Here is the short description about this Project

This is Visa Navigator platform where you can create, Read, update, delete visas..


## Key features of this Project

1. Displaying all Visa on All Visa Page :
```bash
  `fetch()`  from MongoDb visas Collection. 
```
2. In `all visa` page user can see visa Card with see details button by clicking `See Details` Button user Can see visa details also can have a button for applying that visa. 

3.In`see Details ` page if user click apply button it will open modal take some info such as names etc than post those info with the help of `POST` to mongodb `applications` collection .

4. In `Add Visa` page it's a private route only logged in user can add Visa through a `add visa form` by clicking add visa button this visa will be stored in `mongodb visas` collection with `POST` Method. these newly added visa will be displayed in `My Added Visas` page. 

5. In `My Added Visas` page logged user can see their added visas also they can update and delete their added visa by clicking update and delete button.

6. user's applied visa will be displayed in `My Applications page` where they also can cancel their application by clicking cancel button.


## Technologies used in this project

```bash 
   * `Firebase`  we have used `Firebase` to Render our whole application Authentications and we also hosted our website in Firebase.

```bash 
   * `React`  we have used `React` to Render our whole application design.
```bash 
   * `ContextAPI`  we have used `ContextAPI ` to share data across whole website.

```bash
   * `sweetalert2` - we have used `sweetalert2` to generate all the alearts.
  ```
```bash
   * `react-simple-typewriter` - we have used `react-simple-typewriter` to generate all the Writing animations.
  ```

```bash
   * `Tailwind-Meterial` - we have used `Tailwind-Meterial` to create our carousel components
```

```bash
   * `React-Router` - we have used `React-Router` to write our Routes.
 ```

## React Router Functionalities used in this project

```bash 
   *  `loader` `useLoaderData()`  we have used this to fetch our data for different lesson route.

```bash 
   *  `navigate` `useNavigate()`  we have used this to Redirecting to Home Route.
```bash 
   *  `Link`   we have used this to Define Link Buttons.

```bash 
   *  `error` `useRouteError()`  we have used this to handle and displaying when some hits wrong Routes.
```

## Project Requirements Document's Link: https://docs.google.com/document/d/1V7YZXJbhnlJpqLZonXKU_Xxl5slLF8H6t4tAYiYbh0s/edit?tab=t.0

## Project's Live  Link

### [Live Link]: https://visa-navigator-bceb2.web.app/


## Project's Repository link 

### [Repository link Client] : https://github.com/programming-hero-web-course2/b10-a10-client-side-ChowdhuryJoy108




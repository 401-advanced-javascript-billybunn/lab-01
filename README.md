![CF](http://i.imgur.com/7v5ASc8.png) LAB 01
=================================================

## LAB: Node Ecosystem

### Author: Billy Bunn

### Links and Resources
* [repo](https://github.com/401-advanced-javascript-billybunn/lab-01)
<!-- * [travis](http://xyz.com) -->
<!-- * [back-end](http://xyz.com) (when applicable) -->
<!-- * [front-end](http://xyz.com) (when applicable) -->

<!-- #### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments) -->

### Modules
#### `arithmetic.js`
Exports an `arithmetic` object with several methods that perform math operations on given inputs. Also includes a helper function to validate input. See those functions below.

##### Exported Values and Methods
###### `everyValueIsANumber(values) -> null (if any value is NaN)
A helper function to validate arguments passed in to each arithmetic method below. Checks if every value passed in is a number. Returns null if input is invalid.

###### `arithmetic.add(a, b, …) -> a + b + …`
Adds an indefinite number of numbers, separated by commas.  Returns null if input is invalid. 
Method uses a REST parameter (spread operator) to allow users to add any number of number values, separated by commas.

###### `arithmetic.subtract(a, b, …) -> a - b - …`
Subtracts an indefinite number of numbers, separated by commas. Returns null if input is invalid. 
Method uses a REST parameter (spread operator) to allow users to subtract any number of number values, separated by commas.

###### `arithmetic.multiply(a, b, …) -> a * b * …`
Multiplies an indefinite number of numbers, separated by commas. Returns null if input is invalid. 
Method uses a REST parameter (spread operator) to allow users to multiply any number of number values, separated by commas.

###### `arithmetic.divide(a, b) -> a / b`
Divides one number by another.  Returns null if input is invalid.


#### `greet.js`
##### Exported Values and Methods
###### `greet(string) -> 'hello string'`
Takes in any string and returns a string with 'hello ' before whatever was passed in. Returns null if the type of value passed in to the function is not `string`.


### Setup
<!-- #### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db -->
Requires `node` installed.

#### Running the app
`node index.js` Returns several sample function calls to the console.
<!-- * Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it. -->
  
#### Tests
* Tests are run with `npm test`
* **arithmetic.js** - methods will be invoked with one or more numbers passed into the methods and separated by commas (max of 2 arguments for arithmetic.divide()), otherwise, function will return `null`.
* **greet.js** - function will invoked with a string passed into it, will return `null` otherwise.
<!-- * **Assertions to be made**:  -->

<!-- #### UML
Link to an image of the UML for your application and response to events -->

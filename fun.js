//Constructor for class movie

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
//   getPG

function getPG(movies) {
    const pgMovies = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].rating === "PG") {
        pgMovies.push(movies[i]);
      }
    }
    return pgMovies;
  }

//   instance of class movie
const movie = new Movie("Casino Royale", "Eon Productions", "PG-13");


// Typescript class for the UML diagram of class Circle:

class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    getRadius(): number {
      return this.radius;
    }
  
    setRadius(radius: number): void {
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference(): number {
      return 2 * Math.PI * this.radius;
    }
  
    toString(): string {
      return `Circle with radius ${this.radius}`;
    }
  }

//   person class to hold all details
class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getOccupation() {
      return this.occupation;
    }
  
    setOccupation(occupation) {
      this.occupation = occupation;
    }
  }
//   Uber class in Javascript to calculate the price of an Uber ride  
class Uber {
    constructor(distance, duration, surge = 1) {
      this.distance = distance; // distance in miles
      this.duration = duration; // duration in minutes
      this.surge = surge; // surge multiplier, defaults to 1 (no surge)
    }
  
    calculatePrice() {
      const baseFare = 2.5;
      const perMileRate = 1.5;
      const perMinuteRate = 0.25;
      const surgeMultiplier = this.surge;
  
      const distanceFare = this.distance * perMileRate;
      const durationFare = this.duration * perMinuteRate;
      const subtotal = baseFare + distanceFare + durationFare;
      const total = subtotal * surgeMultiplier;
  
      return `$${total.toFixed(2)}`;
    }
  }
  
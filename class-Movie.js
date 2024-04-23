

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


class Movie {
       
    constructor(title, studio, rating = "PG") {   // (constructor - a) & (default rating declaration - b)
        
        this.title = title;
        this.studio = studio;
        this.rating = rating;
   
    }
    
    static getPG(input) {  // (c)
        
        let ratingPG = input.filter(movie => movie.rating === "PG");
        
        return ratingPG; 
    
    }

}

const movie1 = new Movie ("Casino Royale", "Eon Productions", "PG13"); // (d)

const movie2 = new Movie ("Ghilli", "Sri Surya Movies"); // (example for dafault rating when no rating provided - b)

const movie3 = new Movie ("Attahasam", "Vijayam Cine");

const movie4 = new Movie ("Virumaandi", "Raj Kamal Films");


let movieArray = [movie1, movie2, movie3, movie4];

let pgMovies = Movie.getPG(movieArray);


console.log(movie1); // (output for - d)

// (output for - d) => Movie { title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}

console.log(movie2); // (output for - b)

// (output for - b) => Movie { title: 'Ghilli', studio: 'Sri Surya Movies', rating: 'PG' }

console.log(pgMovies);  // (output for - c)

/* (output for - c) => [
  Movie { title: 'Ghilli', studio: 'Sri Surya Movies', rating: 'PG' },
  Movie { title: 'Attahasam', studio: 'Vijayam Cine', rating: 'PG' },
  Movie { title: 'Virumaandi', studio: 'Raj Kamal Films', rating: 'PG' }
] */
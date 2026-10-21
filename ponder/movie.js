
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },

        {
        title: "Coco",
        date: "November 22, 2017",
        description: "A young boy travels to the Land of the Dead to discover his family's history and follow his passion for music.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg",
        imgAlt: "Movie poster for Coco featuring Miguel and characters from the Land of the Dead",
        ages: "7+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "Inside Out",
        date: "June 19, 2015",
        description: "A young girl navigates a new life while her emotions work together inside her mind.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg",
        imgAlt: "Movie poster for Inside Out featuring the five emotions",
        ages: "6+",
        genre: "Family/Comedy",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A clownfish travels across the ocean to find his missing son with the help of a forgetful fish.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
        imgAlt: "Movie poster for Finding Nemo featuring Nemo and other sea creatures",
        ages: "6+",
        genre: "Family/Adventure",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "The Lion King",
        date: "June 24, 1994",
        description: "A young lion must overcome loss and accept his destiny as the future king of the Pride Lands.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/lionking.jpg",
        imgAlt: "Movie poster for The Lion King featuring Simba",
        ages: "6+",
        genre: "Family/Adventure",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "Up",
        date: "May 29, 2009",
        description: "An elderly man ties thousands of balloons to his house and sets off on an adventure with a young boy.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/up.jpg",
        imgAlt: "Movie poster for Up featuring a flying house lifted by colorful balloons",
        ages: "6+",
        genre: "Family/Adventure",
        stars: "⭐⭐⭐⭐⭐"
        },
        {
        title: "The Incredibles",
        date: "November 5, 2004",
        description: "A family of superheroes must work together to stop a dangerous villain and protect the world.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/incredibles.jpg",
        imgAlt: "Movie poster for The Incredibles featuring the superhero family",
        ages: "7+",
        genre: "Action/Family",
        stars: "⭐⭐⭐⭐"
        }
    ];

    movies.forEach(movie => {

        // Code for going through each movie and creating content for that movie
        let article = `
            <article class="movie">
                <h2>${movie.title}</h2>
                <img src=${movie.imgSrc} alt=${movie.imgAlt}
                <p><strong>Release Date:</strong>${movie.date}</p>
                <p><strong>Recommended Age:</strong>${movie.ages}</p>
                <p><strong>Genre:</strong>${movie.genre}</p>
                <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
                <p id='desc'>${movie.description}</p>
            </article>

        `

        // add it to the section
        document.querySelector("#movie-list").innerHTML += article;

        
    });

    /*     <article class="movie">
      <h2>Spider-Man: Into the Spider-Verse</h2>
      <img src="https://wddbyui.github.io/wdd131/images/spiderman.png" alt="Miles Morales swinging through the city">
      <p><strong>Release Date:</strong> Dec 14, 2018</p>
      <p><strong>Recommended Age:</strong> 10+</p>
      <p><strong>Genre:</strong> Action/Adventure</p>
      <p><strong>Rating:</strong> <span>⭐⭐⭐⭐⭐</span></p>
      <p id='desc'>Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.</p>
    </article> */
          
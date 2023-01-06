let products = {
    data: [
      {
        productName: "Apni Kaksha(NOTES)",
        category: "C",
        
        image: "apni-kaksha.png",
        url: "https://drive.google.com/drive/folders/1SEfL7Yw3nJfVLToz9MAuAm2_NoCCk1qD",
      },
      {
        productName: "Apni Kaksha(Tutorial)",
        category: "C",
        
        image: "apni-kaksha.png",
        url: "https://www.youtube.com/watch?v=irqbmMNs2Bo",
      },

      {
        productName: "Code With Harry",
        category: "C",
        
        image: "code-with-harry.jpeg",
        url: "https://drive.google.com/file/d/1aV6Uu6iwQAbhbNM8FddhveYord50K6E_/view?usp=share_link",
      },
      {
        productName: "Code With Harry(Concepts)",
        category: "Java",
        url: "https://www.codewithharry.com/tutorial/cplusplus/",
        image: "code-with-harry.jpeg",
      },


      
      {
        productName: "Code With Harry(Notes)",
        category: "Java",
        url: "https://drive.google.com/file/d/1G26cRcPHI4Pvw7WHtc1Jq4zGHb6abudI/view?usp=share_link",
        image: "code-with-harry.jpeg",
      },
      {
        productName: "Code with harry(tutorial)",
        category: "C++",
       url:"https://www.codewithharry.com/tutorial/cplusplus/",
        image: "code-with-harry.jpeg",
      },
      {
        productName: "Code with harry(concepts)",
        url:"https://www.codewithharry.com/tutorial/cplusplus/",
        category:"C++",
        image:"css.png",
      },
      {
        productName: "Code With Harry",
        category: "HTML",
        url:"https://drive.google.com/file/d/1OylX0FGLFKdnn4_5_zhUTLRQktrOehRe/view?usp=share_link",
        image: "code-with-harry.jpeg",
      },
      {
        productName: "Code with harry",
        category: "CSS",
       url:"https://www.codewithharry.com/videos/css-in-one-video/",
        image: "code-with-harry.jpeg",
      },
      {
        productName: "stanford edu",
        category: "CSS",
       url:"https://drive.google.com/file/d/1TKoi5OzL7u4R8cHRGDjuTanTkT2esHNo/view?usp=share_link",
        image: "css.png",
      },
      {
        productName: "Geeks for geeks",
        category: "HTML",
        url:"https://www.geeksforgeeks.org/html/",
        image: "gfg-logo.png",
      },
      {
        productName: "Code with harry",
        category: "Javascript",
        url:"https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
        image: "code-with-harry.jpeg",
      },
      
      {
        productName: "Code With Harry",
        category: "Python",
        url:"https://drive.google.com/file/d/1Pis2tJkbL8d9bNNUOvEokvmCbKiiMyI-/view?usp=share_link",
        image: "code-with-harry.jpeg",
      },
      {
        productName: "Internet of things",
        category: "Python",
        url:"https://drive.google.com/drive/folders/1-aNel4gwTJPIa43BHEo-t4hIr6CDeT3R?usp=share_link",
        image: "python.jpeg",
      },
      {
        productName: "Igdtuw Resource Github",
        category: "Google-Sign-in",
        url:"https://github.com/Igdtuwresource/google-sign-in",
        image: "github.jpeg",
      },
      {
        productName:"Html + css project",
        category:"Pricing-Panel",
        url:"https://drive.google.com/drive/folders/1qk9vOOQovfOxnXnGI8AWqPYgitPDYj9G?usp=share_link",
        image: "css.png",
      }
      
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
   
    
    var a = document.createElement('a'); 
                  
                // Create the text node for anchor element.
                var link = document.createTextNode(i.category);
                  
                // Append the text node to anchor element.
                a.appendChild(link); 
                  
                // Set the title.
                a.title = i.category; 
                  
                // Set the href property.
                a.href = i.url; 
                  
                // Append the anchor element to the body.
                container.appendChild(a);
    
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
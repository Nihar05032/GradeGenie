const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebaropen = document.querySelector(".sidebaropen"),
      sidebarclose = document.querySelector(".sidebarclose");

      let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

      sidebaropen.addEventListener("click" , () =>{
        nav.classList.add("active");
      })
      body.addEventListener("click" , e =>{
        let clickElm = e.target;

        if(!clickElm.classList.contains("sidebaropen") && !clickElm.classList.contains("menu") ){
            nav.classList.remove("active"); 
        }
      })
      document.querySelector('.dropdown-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
      
      
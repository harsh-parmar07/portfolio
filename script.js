function toggleNav() {
    document.getElementById('navList').classList.toggle('show');
  }
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('responseMsg').textContent = "Thanks for your message!";
    this.reset();
  });
  
  const testimonials = [
    {
      text: "“Harsh is an incredibly fast learner and a great team player!”",
      author: "— Project Supervisor"
    },
    {
      text: "“He delivered a complex freelance platform on time with clean code and great UI.”",
      author: "— Team Lead"
    },
    {
      text: "“One of the most reliable developers I’ve worked with during my internship.”",
      author: "— Team Lead"
    }
  ];
  
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    document.getElementById("testimonialText").textContent = testimonials[currentIndex].text;
    document.getElementById("testimonialAuthor").textContent = testimonials[currentIndex].author;
  }, 5000);
  
  const sections = document.querySelectorAll('.fade-in');
  
  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
function closingApplication(){
    alert("The application period has closed. Thank you for your interest! Please stay tuned for future opportunities")
}

function handleEssayApplication(event){
    event.preventDefault();
    const currentDate = new Date();
    const targetDate = new Date('2024-12-14');

    if (currentDate > targetDate) {
      alert("The application period has closed. Thank you for your interest! Please stay tuned for future opportunities");
    } else {
        console.log("hello")
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd4iUY_ymNKloYRvbLdcgNBEfbJUaO6Z__An6Gmwoa9eLNuyw/viewform"; 
    }
}
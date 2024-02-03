

export const indexToDay = (index) => {
    switch (index) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "None of the above";
    }
  };

 export const hourToGreeting=(hours)=>{
    let timeGreeting=""
    if(hours>=6 && hours<12){
        timeGreeting="Good Morning"
    }else if(hours>=12 && hours<16){
        timeGreeting="Good Afternoon"
    }
    else if(hours>=16 && hours<20){
        timeGreeting="Good Evening"
    }
    else if(hours>=0 && hours<6){
        timeGreeting="Early Morning"
    }
    else{
        timeGreeting="It's Late Night go to sleep"
    }
    return timeGreeting
  }
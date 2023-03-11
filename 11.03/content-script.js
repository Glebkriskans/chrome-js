function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }


function deleteBlock(){
    if(!!document.getElementsByClassName(
        "ContributionCalendar-day"
    )){
        
        const arr = document.getElementsByClassName("ContributionCalendar-day")

        for(let index = 0; index < arr.length; index++){
            arr[index].style.background = generateColor()
        }

    
    }
}

deleteBlock();
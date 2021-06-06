const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real=document.getElementById('temp_real');
const temp_status=document.getElementById('temp_status');
const day=document.getElementById('day');
const today_date=document.getElementById('today_date');
var td= new Date().toDateString();
var ct= new Date().toLocaleTimeString();
const datahide=document.querySelector(".middleLayer")
var c=false;

day.innerText=td
today_date.innerText=ct

const getInfo=async(event)=>{
    
    city_name.style.color='yellow';
    let cityVal=cityName.value;
    event.preventDefault();
    if(cityVal=='')
    {
        const msg=cityName.innerText='Please write city name before search';
        alert(msg);
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cd767e39ae571cf507229c7e932de953`
            const response=await fetch(url);
            const data= await response.json();
            const arrData=[data]
            
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real.innerText=arrData[0].main.temp;
            
          
            const temp_mood=arrData[0].weather[0].main;
            if(temp_mood=='Clear'){
                temp_status.innerHTML='<i class="fas fa-sun" style="color:rgb(219, 188, 8);"></i>'
            }
            else if(temp_mood=='Clouds'){
                temp_status.innerHTML='<i class="fas fa-cloud" style="color:gray;"></i>'
            }
            else if(temp_mood=='Rain'){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:white;'></i>"
            }
            
            else{
                temp_status.innerHTML='<i class="fas fa-cloud" style="color:#009ad8;"></i>'
                
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            
            if(c)
            {
                city_name.style.color='red';
                c=false;
            }
            else{
                city_name.style.color='yellow';
                c=true;
            }
            
            city_name.innerText='Please enter the city name properly';
            
            
           datahide.classList.add('data_hide');
        }
    }
    
    

}
submitBtn.addEventListener('click',getInfo);

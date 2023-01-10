import Home from '../PortofolioContainer/Home/Home'
import AboutMe from '../PortofolioContainer/AboutMe/AboutMe';
import Resume from '../PortofolioContainer/Resume/Resume';
import ContactMe from '../PortofolioContainer/ContactMe/ContactMe';

/*
jadi disini kalau -1 artinya kembalikan nilai yang salah 
itu looping fungsinya buat di google bisa nampilin hasilnya dan biar kita ga ke apps js terus
jadi di tarok disini    
*/

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component : Home,
    },   
    {
        screen_name: "AboutMe",
        component : AboutMe,
    },
    {
        screen_name: "Resume",
        component : Resume,
    },
    {
        screen_name: "ContactMe",
        component : ContactMe,
    },
];
export const GET_SCREEN_INDEX = (screen_name) =>{
    if(!screen_name) return -1;
    for(let i=0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};
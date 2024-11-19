const give = document.getElementById('give');
const plagde = document.getElementById('plagde');

document.addEventListener('click', (e)=>{

    const target = e.target;
    let url = '';
    if(target && target.id === 'give'){
        url = "https://www.givingtuesday.org/";
        window.location.replace(url);

    }else if(target && target.id === 'plagde'){
        url = "https://www.givemiamiday.org/organization/cclsmiami";
        
        window.location.replace(url);
    } 

});
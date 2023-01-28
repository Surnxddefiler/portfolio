
const item="__description"
const button="__button"
const firstProject="__project__one"
const more="__more"
const showMore= (text)=>{
    let bob=document.getElementById(`${text}`)
    bob.classList.toggle("bob")
    document.getElementById(`${text+firstProject}`).style.display="block"
    document.getElementById(`${text+item}`).style.display="none"
    document.getElementById(`${text+more}`).style.display="block"
    if(document.getElementById(`${text+button}`).innerHTML=="show"){
        document.getElementById(`${text+button}`).innerHTML="hide"
    }
    else{
        document.getElementById(`${text+button}`).innerHTML="show"
        document.getElementById(`${text+firstProject}`).style.display="none"
        document.getElementById(`${text+item}`).style.display="block"
        document.getElementById(`${text+more}`).style.display="none"

    }
}
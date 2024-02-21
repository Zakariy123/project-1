const imageSlider = document.querySelector("#imageSlider")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

const images=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AUpd8XyZ-ArMVMk3Dq55SDE5dHGCYd-p5w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXujMSaALy6G74BA7FOlAr9nMZljBScHjnQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixAVQvv-hCdnC925RYYmsks2sF1vCDPxhyQ&usqp=CAU" ,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKS8evc9SbTjwnBJkqfU66lsSdhRFy-jj8w&usqp=CAU"   
]

let indexImage=0
function currenImage(){
    imageSlider.src=images[indexImage]
}
nextBtn .addEventListener("click", function(){
    indexImage++
    if(indexImage > images .length-1){
        indexImage=0
    }
    currenImage()
})

prevBtn .addEventListener("click", function(){
    indexImage--
    if(indexImage < 0){
        indexImage=0
    }
    currenImage()
})

currenImage()
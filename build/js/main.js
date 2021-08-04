window.addEventListener('DOMContentLoaded', () => {
    const reviewsBlock = document.querySelectorAll('.reviews__item'),
         arrowLeft = document.querySelector('.left'),
         arrwRight = document.querySelector('.right');
    let indexBlock = 0
        
    function hideVisibal(){
        reviewsBlock.forEach((i)=>{
            i.classList.remove('active')
            i.classList.add('none')
        })
    }
    function activeVisibal(g = 0){
        hideVisibal()
        reviewsBlock[g].classList.remove('none')
        reviewsBlock[g].classList.add('active')
    }
    hideVisibal()
    activeVisibal()
    //----------slider------------//
    arrowLeft.addEventListener('click', ()=>{
        if(indexBlock<reviewsBlock.length-1){
            indexBlock++
            hideVisibal()
            activeVisibal(indexBlock)
        }else{
            indexBlock=0
            hideVisibal()
            activeVisibal(indexBlock)
            console.log('----')
        }
    })
    arrwRight.addEventListener('click', ()=>{
        if(indexBlock==0){
            indexBlock=reviewsBlock.length-1
            hideVisibal()
            activeVisibal(indexBlock)
            console.log(indexBlock)
        }else{
            indexBlock--
            hideVisibal()
            activeVisibal(indexBlock)
        }
    })
    //-------//-slider-//---------//
})
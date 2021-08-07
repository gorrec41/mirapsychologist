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
    function left() {
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
    }
    function right() {
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

    }
    hideVisibal()
    activeVisibal()

    //----------slider------------//
    arrowLeft.addEventListener('click', ()=>{
        left()
    })
    arrwRight.addEventListener('click', ()=>{
        right()
    })
    
    //-------//-slider-//---------//
    //----------swaip------------//
    let initialPoint;
    let finalPoint;
    document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    initialPoint=event.changedTouches[0];
    }, false);
    document.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    finalPoint=event.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
    if (xAbs > yAbs) {
    if (finalPoint.pageX < initialPoint.pageX){
        left()}
    else{
        right()}
    }
    
    }
    }, false);
    //------//-swaip-//---------//
})
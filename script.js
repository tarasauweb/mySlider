function slider (valueSlide = 1) {
	const slidesBlock = document.querySelector('.slider .slides');
	if(slidesBlock){
		const btnPrev = document.querySelector('.btn-prev');
		const btnNext = document.querySelector('.btn-next');
		const divSlide = document.querySelector('.slide');
		let mainValue;
		const widthSlide = divSlide.clientWidth;
		const marginRightValue = parseInt(getComputedStyle(divSlide).marginRight.slice(0 , -2));
		

		function returnValue() {
			const slidesBlockStyle = getComputedStyle(slidesBlock).transform ;
			const arrValue = slidesBlockStyle.split(' ');
			let value = parseInt(arrValue[4].slice(0, -1));
			console.log(value);
			return value
		}
		const startValueTransformSlides = returnValue()
		btnNext.addEventListener('click' , ()=>{
			
			if(-mainValue>=returnValue()){
				mainValue = startValueTransformSlides
			}else{
				mainValue = returnValue() - widthSlide*valueSlide - marginRightValue*valueSlide
			}
			slidesBlock.style.transform = `translateX(${mainValue}px)`;

			console.log(mainValue)
			return mainValue
		})

		btnPrev.addEventListener('click' , ()=>{
			if(startValueTransformSlides == returnValue()){
				mainValue = startValueTransformSlides
			}
			else{
				mainValue = returnValue() + widthSlide*valueSlide + marginRightValue*valueSlide
			}
			
			console.log(mainValue)
			slidesBlock.style.transform = `translateX(${mainValue}px)`;
			
			return mainValue
		})
	}
	
}	

slider()
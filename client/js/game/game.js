let slctCaseTopLeft = document.querySelector('.case-morp-top-left');
var gagn = 0;

slctCaseTopLeft.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.top-left')){

        slctCaseTopLeft.append(crtDiv);
        crtDiv.classList.add('top-left');

        let crtImg = document.createElement('img');
        let slctDivTopLeft = document.querySelector('.top-left');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivTopLeft.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-top-left').setAttribute('data-game', 'croix');

        }

    };

});

let slctCaseTopMilled = document.querySelector('.case-morp-top-milled');

slctCaseTopMilled.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.top-milled')){

        slctCaseTopMilled.append(crtDiv);
        crtDiv.classList.add('top-milled');

        let crtImg = document.createElement('img');
        let slctDivTopMilled = document.querySelector('.top-milled');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivTopMilled.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-top-milled').setAttribute('data-game', 'croix');

        }

    };

});

let slctCaseTopBottom = document.querySelector('.case-morp-top-right');

slctCaseTopBottom.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.top-right')){

        slctCaseTopBottom.append(crtDiv);
        crtDiv.classList.add('top-right');

        let crtImg = document.createElement('img');
        let slctDivTopBottom = document.querySelector('.top-right');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivTopBottom.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-top-right').setAttribute('data-game', 'croix');

        }

    };

});

document.querySelector('.morp-content').addEventListener('click', () => {

    if(slctCaseTopLeft.getAttribute('data-game') === 'croix' || slctCaseTopMilled.getAttribute('data-game') === 'croix' || slctCaseTopBottom.getAttribute('data-game') === 'croix'){

        if(slctCaseTopLeft.getAttribute('data-game') === 'croix' && slctCaseTopMilled.getAttribute('data-game') === 'croix' && slctCaseTopBottom.getAttribute('data-game') === 'croix'){

            gagn = 1;

            document.querySelector('.test').innerHTML = 'salut';

        }
    
    }

});

let slctCaseMilledLeft = document.querySelector('.case-morp-milled-left');


slctCaseMilledLeft.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.milled-left')){

        slctCaseMilledLeft.append(crtDiv);
        crtDiv.classList.add('milled-left');

        let crtImg = document.createElement('img');
        let slctDivMilledLeft = document.querySelector('.milled-left');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivMilledLeft.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-milled-left').setAttribute('data-game', 'croix');

        }

    };

});

let slctCaseMilledMilled = document.querySelector('.case-morp-milled-milled');

slctCaseMilledMilled.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.milled-milled')){

        slctCaseMilledMilled.append(crtDiv);
        crtDiv.classList.add('milled-milled');

        let crtImg = document.createElement('img');
        let slctDivMilledMilled = document.querySelector('.milled-milled');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivMilledMilled.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-milled-milled').setAttribute('data-game', 'croix');

        }

    };

});

let slctCaseMilledRight = document.querySelector('.case-morp-milled-right');

slctCaseMilledRight.addEventListener('click', () => {

    let crtDiv = document.createElement('div');

    if(!document.querySelector('.milled-right')){

        slctCaseMilledRight.append(crtDiv);
        crtDiv.classList.add('milled-right');

        let crtImg = document.createElement('img');
        let slctDivTopBottom = document.querySelector('.milled-right');

        if(!document.querySelector('.croix') || !document.querySelector('.round')){

            slctDivTopBottom.append(crtImg);
            crtImg.classList.add('croix');
            crtImg.setAttribute('src', '../../res/img/png/croix.png');
            document.querySelector('.case-morp-milled-right').setAttribute('data-game', 'croix');

        }

    };

});

document.querySelector('.morp-content').addEventListener('click', () => {

    if(slctCaseTopLeft.getAttribute('data-game') === 'croix' || slctCaseTopMilled.getAttribute('data-game') === 'croix' || slctCaseTopBottom.getAttribute('data-game') === 'croix'){

        if(slctCaseTopLeft.getAttribute('data-game') === 'croix' && slctCaseTopMilled.getAttribute('data-game') === 'croix' && slctCaseTopBottom.getAttribute('data-game') === 'croix'){

            document.querySelector('.test').innerHTML = 'salut';

        }
    
    }

});
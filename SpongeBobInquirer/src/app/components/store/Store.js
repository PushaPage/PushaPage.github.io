let rerenderEntireTree;


export let questions = {

	ask1: 'Какой тропический плод исользует Спанч Боб вместо недвижимого имущества?',	
	ask2: 'Куда Спанч Боб ходит на работу?',
	ask3: 'Кто живет по соседству со Спанч Бобом?',
	ask4: 'Какими супергероями увлекаеться Спанч Боб?',
	ask5: 'Кто самый лучший друг Cпанч Боба?',

	inputPlaceholder: 'Введите правильный ответ...',
    selectDefault: 'Выберете правильный ответ...',
    selectName: 'selectAsk',
    patternText: `^[А-Яа-яЁё|a-zA-Z\s]+$`,
    checkProviso: '(Правельных ответов должно быть 2)'

};

let correctAnswers = {

	ans1: 'ананас',
	ans2: `В "Красти Краб"`,
	ans3_1: 'Сквидвард Квентин Тентаклс',
	ans3_2: 'Патрик Стар',    
    ans4: 'Морской Супермен и Очкарик',
    ans5: 'Патрик Стар'

};


export let answers = {

	answersRadioOne: [        

        		{ key: 1, id: 'radioAsk1', name: 'radioAsk1', ans: 'На завод' },
        		{ key: 2, id: 'radioAsk2', name: 'radioAsk1', ans: `В "Мусорное Ведро"` },
        		{ key: 3, id: 'radioAsk3', name: 'radioAsk1', ans: correctAnswers.ans2 },
        		{ key: 4, id: 'radioAsk4', name: 'radioAsk1', ans: 'Он не работает, он фрилансер' }
        	],       
           	  
    answersCheckBox: [

        		{ key: 1, id: 'CheckAsk1', name: 'check1', check: true, ans: 'Джамбо Креветка' },
        		{ key: 2, id: 'CheckAsk2', name: 'check2', check: true, ans: correctAnswers.ans3_1 },
        		{ key: 3, id: 'CheckAsk3', name: 'check3', check: true, ans: 'Миссис Пафф' },
        		{ key: 4, id: 'CheckAsk4', name: 'check4', check: true, ans: correctAnswers.ans3_2 },
        		{ key: 5, id: 'CheckAsk5', name: 'check5', check: true, ans: 'Бабл Бас' }
        	],
    
    answersSelect: [

        		{ key: 1, hidden: true, disabled: true, ans: questions.selectDefault },
        		{ key: 2, hidden: false, disabled: false, ans: 'Аквамен и Нептун' },
        		{ key: 3, hidden: false, disabled: false, ans: 'Мисс Невидимка и Профессор Магма' },
        		{ key: 4, hidden: false, disabled: false, ans: 'СпанчерМен и Патрикарик' },
        		{ key: 5, hidden: false, disabled: false, ans: 'Бэтман и Робин' },
        		{ key: 6, hidden: false, disabled: false, ans: correctAnswers.ans4 },
        		{ key: 7, hidden: false, disabled: false, ans: 'Пыхарь и Хроник' },
        	],

    answersRadioTwo: [

        		{ key: 1, id: 'radioAsk2_1', name: 'radioAsk2', ans: 'Улитка Гэри' },
        		{ key: 2, id: 'radioAsk2_2', name: 'radioAsk2', ans: 'Сэнди Чикс' },
        		{ key: 3, id: 'radioAsk2_3', name: 'radioAsk2', ans: correctAnswers.ans5 },
        		{ key: 4, id: 'radioAsk2_4', name: 'radioAsk2', ans: 'Сквидвард Квентин Тентаклс' }
        	]        
};



let resultTableStorage = JSON.parse(sessionStorage.getItem('resultTable')) || null;

let resultTableDefault = {

	ans1: '',
	ans2: '',
	ans3: '',	   
    ans4: '',
    ans5: '',

    point1: '',
	point2: '',
	point3: '',	   
    point4: '',
    point5: '',
    
    countText: '', 
    totalPoint: '',
    resultText: '',
    resultImg: '' 
}

let	resultTable = Object.assign({}, resultTableDefault);

if (resultTableStorage != null) resultTable = resultTableStorage;

let result_test = {

	failed: 'Тест не пройден',
	passed: 'Всего очков',
	looser: 'Вы ничего не знаете про Спанч Боба!',
	notEnough: 'О Cпанч Бобе вы знаете немного!',
	enough: 'Вы неплохо знаете Спач Боба!',
	winner: 'Спач Боба Вы знаете как самого себя!',

	loserImg: './img/patrick-result.png',
	notEnoughImg: './img/squidward-result.png',
	enoughImg: './img/sandy-result.png',
	winnerImg: './img/sponge-result.png'
}

export let result = {

	thead: [

	    	{ key: 1, value: '#' },
	    	{ key: 2, value: 'Вопрос' },
	    	{ key: 3, value: 'Ответ' },
	    	{ key: 4, value: 'Очки' }
	],

	sect1: 1,
    tbodysect1: [

		    { key: 1, value: questions.ask1 },
	    	{ key: 2, value: resultTable.ans1 },
	    	{ key: 3, value: resultTable.point1 }	

		    ],
	sect2: 2,
	tbodysect2: [

		    { key: 1, value: questions.ask2 },
	    	{ key: 2, value: resultTable.ans2 },
	    	{ key: 3, value: resultTable.point2 }	

		    ],
	sect3: 3,
	tbodysect3: [

		    { key: 1, value: questions.ask3 },
	    	{ key: 2, value: resultTable.ans3 },
	    	{ key: 3, value: resultTable.point3 }	

		    ],
	sect4: 4,
	tbodysect4: [

		    { key: 1, value: questions.ask4 },
	    	{ key: 2, value: resultTable.ans4 },
	    	{ key: 3, value: resultTable.point4 }	

		    ],
	sect5: 5,
	tbodysect5: [

		      { key: 1, value: questions.ask5 },
	    	  { key: 2, value: resultTable.ans5 },
	    	  { key: 3, value: resultTable.point5 }	

		    ],
	countText: resultTable.countText,
	total: resultTable.totalPoint,
	resultText: resultTable.resultText,
	resultImg: resultTable.resultImg
}


let stateInquirerStorage = JSON.parse(sessionStorage.getItem('stateInquirer')) || null;	


export let stateInquirerDefault = {

		openModal: false,
		submit: false,
		link: `/inquirer`,
    	inputAsk: '',    		
    	radioAsk1: '',
        radioAsk2: '',
        checkAsk1: '',
        checkAsk2: '',
        checkCount: 0,       
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        selectAsk: 'Выберете правильный ответ...'        

    }

export let stateInquirer = Object.assign({}, stateInquirerDefault);		

       if (stateInquirerStorage != null) stateInquirer = stateInquirerStorage;



export let getTest = (test) => {

	let points = 0;

	if (test.inputAsk.toLowerCase() === correctAnswers.ans1) {
		
		result.tbodysect1[1].value = test.inputAsk;
		result.tbodysect1[2].value = 20;
		points += 20;
		resultTable.ans1 = test.inputAsk;
		resultTable.point1 = 20;

	} else {

		result.tbodysect1[1].value = test.inputAsk;
		result.tbodysect1[2].value = 0;
		resultTable.ans1 = test.inputAsk;
		resultTable.point1 = 0;

	}

	if (test.radioAsk1 === correctAnswers.ans2) {
		
		result.tbodysect2[1].value = test.radioAsk1;
		result.tbodysect2[2].value = 20;
		points += 20;
		resultTable.ans2 = test.radioAsk1;
		resultTable.point2 = 20;

	} else {

		result.tbodysect2[1].value = test.radioAsk1;
		result.tbodysect2[2].value = 0;
		resultTable.ans2 = test.radioAsk1;
		resultTable.point2 = 0;
	}

	if (test.checkAsk1 === correctAnswers.ans3_1 || test.checkAsk1 === correctAnswers.ans3_2) {		

		result.tbodysect3[1].value = test.checkAsk1;
		result.tbodysect3[2].value = 10;		
		points += 10;
		resultTable.ans3 = test.checkAsk1;
		resultTable.point3 = 20;

	} else {		

	    result.tbodysect3[1].value = test.checkAsk1;
		result.tbodysect3[2].value = 0;
		resultTable.ans3 = test.checkAsk1;
		resultTable.point3 = 0;
	}
	
	if (test.checkAsk2 === correctAnswers.ans3_1 || test.checkAsk2 === correctAnswers.ans3_2) {		

		result.tbodysect3[1].value += ' ' + 'и' + ' ' + test.checkAsk2;
		result.tbodysect3[2].value += 10;		
		points += 10;
		resultTable.ans3 += ' ' + 'и' + ' ' + test.checkAsk2;
		resultTable.point3 += 10;

	} else {
		
		if (test.checkAsk2 === '') {
		
			result.tbodysect3[1].value += '';
			resultTable.ans3 += '';

		} else {	

			result.tbodysect3[1].value += ' ' + 'и' + ' ' + test.checkAsk2;
			resultTable.ans3 += ' ' + 'и' + ' ' + test.checkAsk2;			
		}

		result.tbodysect3[2].value += 0;
		resultTable.point3 += 0;
	}

	if (test.selectAsk === correctAnswers.ans4) {

		result.tbodysect4[1].value = test.selectAsk;
		result.tbodysect4[2].value = 20;
		points += 20;
		resultTable.ans4 = test.selectAsk;
		resultTable.point4 = 20;

	}

	if (test.selectAsk != correctAnswers.ans4) {		

		result.tbodysect4[1].value = test.selectAsk;
		result.tbodysect4[2].value = 0;
		resultTable.ans4 = test.selectAsk;
		resultTable.point4 = 0;		
	} 

	if (test.selectAsk === questions.selectDefault) {
		
		result.tbodysect4[1].value = '';
		result.tbodysect4[2].value = 0;
		resultTable.ans4 = ''; 
		resultTable.point4 = 0;
	}	

	if (test.radioAsk2 === correctAnswers.ans5) {
		
		result.tbodysect5[1].value = test.radioAsk2;
		result.tbodysect5[2].value = 20;
		points += 20;
		resultTable.ans5 = test.radioAsk2;
		resultTable.point5 = 20;

	} else {

		result.tbodysect5[1].value = test.radioAsk2;
		result.tbodysect5[2].value = 0;
		resultTable.ans5 = test.radioAsk2;
		resultTable.point5 = 0;
	}

	result.total = points;
	resultTable.totalPoint = points;

	if (points === 0) {

		result.countText = result_test.failed;
		resultTable.countText = result_test.failed;
	}

	else {

		result.countText = result_test.passed;
		resultTable.countText = result_test.passed;
	}

	if (points <= 20) {

		result.resultText = result_test.looser;		
		result.resultImg = result_test.loserImg;		
		resultTable.resultText = result_test.looser;		
		resultTable.resultImg = result_test.loserImg;
	}

    if (points > 20 && points <= 60) {

		result.resultText = result_test.notEnough;		
		result.resultImg = result_test.notEnoughImg;		
		resultTable.resultText = result_test.notEnough;		
		resultTable.resultImg = result_test.notEnoughImg;
	}

	if (points > 60 && points <= 90) {

		result.resultText = result_test.enough;		
		result.resultImg = result_test.enoughImg;		
		resultTable.resultText = result_test.enough;		
		resultTable.resultImg = result_test.enoughImg;

	}

	if (points === 100) {

		result.resultText = result_test.winner;	
		result.resultImg = result_test.winnerImg;		
		resultTable.resultText = result_test.winner;		
		resultTable.resultImg = result_test.winnerImg;
	}

	sessionStorage.setItem('resultTable', JSON.stringify(resultTable));
	
	rerenderEntireTree(result)
}

export let anewTest = () => {

	stateInquirer = Object.assign({}, stateInquirerDefault);
	resultTable = Object.assign({}, resultTableDefault);	
	

}

export let subscribe = (observer) => {

    rerenderEntireTree = observer;

} 






// весь наш код заворачиваем в анонимную, самовызываемую функцию
// чтоб не возникло неприятных сюрпризов
;(function(){

  var searchInput  = $('.js-search')[0];  // находим поле для поиска
  var searchButton = $('.js-button')[0];  // находим кнопочку
  var container    = $('.js-content')[0]; // находим контейнер для вывода списка

  // это шаблон для создания блока с результатом поиска
  // я сделал так что если в тексте будет {{имяСвойства}} 
  // то оно будет заменено на соответствующее значение
  var itemTemplate = [
    '<div class="media mt-3">',
      '<img src="{{imageUrl}}" class="mr-3" alt="{{name}}">',
      '<div class="media-body">',
        '<h5 class="mt-0 text-capitalize">{{name}}</h5>',
        '<div>{{email}}</div>',
        '<div>{{phone}}</div>',
        '<div>{{address}}</div>',
        '<div>{{age}}</div>',
        //'<div>{{}}</div>',
      '</div>',
    '</div>',
  ].join('');

  // масив со списком юзеров
  var data = [
    {
      imageUrl:'https://randomuser.me/api/portraits/women/75.jpg',
      name: 'olivia makki',
      phone:'09-167-498',
      address:'5351 korkeavuorenkatu"',
      email:'livia.maki@example.com',
      age: 22,
    },
    {
      imageUrl:'https://randomuser.me/api/portraits/women/66.jpg',
      name: 'emília jesus',
      phone:'45-168-235',
      address:'6375 rua alagoas',
      email:'emília.jesus@example.com',
      age: 25,
    },
    {
      imageUrl:'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'bob davies',
      phone:'051-737-8558',
      address:'1483 mill lane"',
      email:'bob.davies@example.com',
      age:25,
    },
    {
      imageUrl:'https://randomuser.me/api/portraits/women/78.jpg',
      name: 'elli lampinen',
      phone:'04-861-216',
      address:'4724 itsenäisyydenkatu',
      email:'elli.lampinen@example.com',
      age:39,
    },
    {
      imageUrl:'https://randomuser.me/api/portraits/women/60.jpg',
      name: 'virginia lozano',
      phone:'999-875-332',
      address:'6351 avenida del planetario',
      email:'virginia.lozano@example.com',
      age:26,
    },
  ];

  // обрабатываем клик на кнопку поиска
  searchButton.addEventListener('click', function (e) {
    var text = searchInput.value;

    var fieldName = 'name';

    if(text.match(/[1-9]{1,3}(?!-)/g)){        
      fieldName = 'age';
    }

    if(text.match(/([0-9]{1,4}\S+[^\s]|[-])/g)){        
      fieldName = 'phone';
    }
    if(text.match(/(\w*\.\w*\@\w*\.com|[@]|.com)/g)){        
      fieldName = 'email';
    }
    
    if(text.match(/([0-9]{4}\s\D+|["ä])/g)){        
      fieldName = 'address';
    }   

    
    // !!! ЗАДАНИЕ !!!
    // нужно модифицировать код так чтобы fieldName изменялся 
    // в зависимости от того то мы напишем в поле поиска
    // тоесть если мы напишем номер телефона то врезультате 
    // обьекты должны быть отфильтрованы по полю "phone"
    // если мы напишем только число то фильтровать должно по полю "age"
    // если мы пишем емейл то искаться соответственно должно по емейлу
    // по умолчанию пусть ищет по имени пользователя

    
    

    var filteredItems = filterItems(data, {
      key: fieldName, val: text
    });

    renderItems(filteredItems);
    searchInput.value = '';
  });

  
  // для удобства поиска елементов на странице напишу функцию (аля jQuery)
  // назову ее так же как и в жквери потому что мне так нравится:)
  function $ (selector) {
    return document.querySelectorAll(selector);
  }
  
  // эту функцию я решил сделать для удобства создания дом елементов 
  // из определенного шаблона
  function createItem(objectList, template, parent){
    
    for (let key in objectList) {
      template = template.replace(new RegExp('{{'+key+'}}', 'g'), objectList[key]);
    }
    if (parent) {
      parent.insertAdjacentHTML("beforeEnd", template);
    }
    return template;
  }
  
  // функция которая фильтрует масив обьектов
  // возвращает масив только тех обьектов
  // поля которых удовлетворяют нашим требованиям
  function filterItems(items, condition) {
    return items.filter(function(item, i){
      var pattern = new RegExp(condition.val, 'i');
      return pattern.test(item[condition.key]);
    });
  }

  // функция которая рисует список с результатами
  // на вход принимает масив обьектов items
  function renderItems(items) {
    // очистим контейнер
    container.innerHTML = '';
    // отрисуем результат
    items.forEach((item, i) => {
      createItem(item, itemTemplate, container);
    });
  }

  // при запуске скрипта сразу же отрисуем весь список
  renderItems(data);

}());
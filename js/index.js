/** Table */

var $table = $('#table');
var mydata =
    [
        {
            "id": 0,
            "name": "test0",
            "price": "valor"
        },
        {
            "id": 1,
            "name": "test1",
            "price": "valor"
        },
        {
            "id": 2,
            "name": "test2",
            "price": "valor"
        },
        {
            "id": 3,
            "name": "test3",
            "price": "valor"
        },
        {
            "id": 4,
            "name": "test4",
            "price": "valor"
        },
        {
            "id": 5,
            "name": "test5",
            "price": "valor"
        },
        {
            "id": 6,
            "name": "test6",
            "price": "valor"
        },
        {
            "id": 7,
            "name": "test7",
            "price": "valor"
        },
        {
            "id": 8,
            "name": "test8",
            "price": "valor"
        },
        {
            "id": 9,
            "name": "test9",
            "price": "valor"
        },
        {
            "id": 10,
            "name": "test10",
            "price": "valor"
        },
        {
            "id": 11,
            "name": "test11",
            "price": "valor"
        },
        {
            "id": 12,
            "name": "test12",
            "price": "valor"
        },
        {
            "id": 13,
            "name": "test13",
            "price": "valor"
        },
        {
            "id": 14,
            "name": "test14",
            "price": "valor"
        },
        {
            "id": 15,
            "name": "test15",
            "price": "valor"
        },
        {
            "id": 16,
            "name": "test16",
            "price": "valor"
        },
        {
            "id": 17,
            "name": "test17",
            "price": "valor"
        },
        {
            "id": 18,
            "name": "test18",
            "price": "valor"
        },
        {
            "id": 19,
            "name": "test19",
            "price": "valor"
        },
        {
            "id": 20,
            "name": "test20",
            "price": "valor"
        },
        {
            "id": 10,
            "name": "test10",
            "price": "valor"
        },
        {
            "id": 11,
            "name": "test11",
            "price": "valor"
        },
        {
            "id": 12,
            "name": "test12",
            "price": "valor"
        },
        {
            "id": 13,
            "name": "test13",
            "price": "valor"
        },
        {
            "id": 14,
            "name": "test14",
            "price": "valor"
        },
        {
            "id": 15,
            "name": "test15",
            "price": "valor"
        },
        {
            "id": 16,
            "name": "test16",
            "price": "valor"
        },
        {
            "id": 17,
            "name": "test17",
            "price": "valor"
        },
        {
            "id": 18,
            "name": "test18",
            "price": "valor"
        },
        {
            "id": 19,
            "name": "test19",
            "price": "valor"
        },
        {
            "id": 20,
            "name": "test20",
            "price": "valor"
        }
    ];

    function customSort(sortName, sortOrder, data) {
        var order = sortOrder === 'desc' ? -1 : 1
        data.sort(function (a, b) {
          var aa = +((a[sortName] + '').replace(/[^\d]/g, ''))
          var bb = +((b[sortName] + '').replace(/[^\d]/g, ''))
          if (aa < bb) {
            return order * -1
          }
          if (aa > bb) {
            return order
          }
          return 0
        })
      }


/* Date Picker */
(() => {
    const elemArr = document.querySelectorAll('.datepicker-input');

    for (let i = 0; i < elemArr.length; i++) {
        const datepicker = new Datepicker(elemArr[i], {
            buttonClass: 'btn',
            language: 'es'
        });
    }
})();

/* Drag and drop */

function AddListDragAndDrop(itemSelector, data) {
    for (const item in data) {
        if (Object.hasOwnProperty.call(data, item)) {
            const itemSelectorDOM = document.getElementById(itemSelector);
            const HtmlElement = document.createElement('div');
            const dataItem = data[item];
            HtmlElement.classList.add('list-group-item');
            HtmlElement.innerText = dataItem;
            itemSelectorDOM.appendChild(HtmlElement)
        }
    }
}

document.getElementById('example2Left') && new Sortable(example2Left, {
    group: 'shared',
    animation: 150
});

document.getElementById('example2Left') && new AddListDragAndDrop('example2Left', {
    0: 'Item Left 1',
    1: 'Item Left 2',
    2: 'Item Left 3'
});

document.getElementById('example2Right') && new Sortable(example2Right, {
    group: 'shared',
    animation: 150
});

document.getElementById('example2Right') && new AddListDragAndDrop('example2Right', {
    0: 'Item Left 1',
    1: 'Item Left 2',
    2: 'Item Left 1 esto es un item con un texto bastante largo para poner a prueba el componente'
});

document.getElementById('example3Left') && new Sortable(example3Left, {
    group: 'shared',
    animation: 150
});

document.getElementById('example3Left') && new AddListDragAndDrop('example3Left', {
    0: 'Item Left 1',
    1: 'Item Left 2',
    2: 'Item Left 1 esto es un item con un texto bastante largo para poner a prueba el componente'
});

document.getElementById('example3Right') && new Sortable(example3Right, {
    group: 'shared',
    animation: 150
});

document.getElementById('example3Right') && new AddListDragAndDrop('example3Right', {
    0: 'Item Left 1',
    1: 'Item Left 2',
    2: 'Item Left 1 esto es un item con un texto bastante largo para poner a prueba el componente'
});

/* Calendar events */

function viewResponsiveCalendar() {
    const calendarElement = document.querySelectorAll('.fc');
    if (document.body.clientWidth <= 768) {
        for (let i = 0; i < calendarElement.length; i++) {
            calendarElement[i].querySelector('thead') && calendarElement[i].querySelector('thead').remove();
            calendarElement[i].querySelector('.fc-today-button') && calendarElement[i].querySelector('.fc-today-button').remove();
            addClassCalendarElement(calendarElement[i].querySelectorAll('tbody[role=presentation]'), 'calendar-responsive-grid-flex');
            addClassCalendarElement(calendarElement[i].querySelectorAll('tbody[role=presentation] tr'), 'calendar-responsive-grid')
            addClassCalendarElement(calendarElement[i].querySelectorAll('tbody[role=presentation] tr td'), 'calendar-responsive-grid-td')
        }
    }
}

function addClassCalendarElement(calendarNodeList, classElement) {
    for (let i = 0; i < calendarNodeList.length; i++) {
        calendarNodeList[i].classList.add(classElement)
    }
}

const calendarEl = document.getElementById('calendar');
const calendar = calendarEl && new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
        {
            title: 'All Day Event',
            start: '2021-12-08',
            color: 'yellow',
            textColor: 'black',
            url: '/myfeed.php',
        },
        {
            title: 'Long Event',
            start: '2021-12-11',
            end: '2021-12-14'
        },
        {
            groupId: '999',
            title: 'Repeating Event',
            start: '2021-12-16'
        },
        {

            title: 'otro evento cargado dinamicamente',
            start: '2021-12-25',
            color: 'purple',
            textColor: 'white',
        }
    ]
});

function addDateYearFooter() {
    const date = new Date();
    const year = date.getFullYear().toString();
    document.querySelector('.js-date-year').innerText = year;
}

// Events

document.addEventListener('DOMContentLoaded', function () {
    if (calendar) {
        calendar.setOption('locale', 'es');
        calendar.render();
        viewResponsiveCalendar();
    }
    if($table.length > 0){
        $table.bootstrapTable({
            data: mydata,
            locale: 'es-SP'
          });
        $()

        // Cuando acaben de cargar los datos del $.ajax
        $table.closest('.fixed-table-body').find('.fixed-table-loading').addClass('hidden');
        
    }
    addDateYearFooter();
});

if (!!document.querySelector('.js-add-event')) {
    document.querySelector('.js-add-event').addEventListener('click', function (e) {
        e.preventDefault();
        calendar.addEvent(
            {
                title: 'Dani event',
                start: '2021-12-20',
                color: 'red',
                textColor: 'white',
                url: '/dani.php',
            }
        );
        viewResponsiveCalendar();

    });
}

document.addEventListener('click', function (e) {
    const targetEl = e.target;
    if (targetEl.classList.contains('fc-next-button') || targetEl.classList.contains('fc-prev-button') || (targetEl.parentElement && targetEl.parentElement.classList.contains('fc-next-button')) || (targetEl.parentElement && targetEl.parentElement.classList.contains('fc-prev-button'))) {
        e.preventDefault();
        viewResponsiveCalendar();
    }
});


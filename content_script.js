var myKanbanBoard = "https://kanbanflow.com/board/87d521d15744312d8d75fcfdf113cf44";

var iframe = document.createElement('iframe');
iframe.src = myKanbanBoard;
iframe.width = "100%";
iframe.height = "375px";

var container = document.getElementsByClassName('UI')[0];
container.insertBefore(iframe, container.firstChild);

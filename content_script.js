function inject_board() {
    chrome.storage.sync.get({
            kanbanId: ""
        }, function(items) {
            url = "https://kanbanflow.com/board/" + items.kanbanId + "#board-wrapper";
            var iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "360px";
            iframe.style.border = "0";
            iframe.style.opacity = "0.9";

            var container = document.getElementsByClassName('UI')[0];
            container.insertBefore(iframe, container.firstChild);

            var h3 = document.createElement('h3');
            h3.className = "Wr";

            var hider = document.createElement('img');
            hider.className = "Wp Wq";
            hider.src = "//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif";

            h3.appendChild(hider);

            h3_div = document.createElement('div');
            h3_div.className = "Wn";

            h3_text = document.createElement('span');
            h3_text.className = "qh";
            h3_text.innerText = "Kanban Board";
            h3_div.appendChild(h3_text);

            outer_div = document.createElement('div');
            outer_div.className = "nH Wg aAD aAr";

            outer_div.onclick = function() {
                if(iframe.style.display == "none") {
                    iframe.style.display = "";
                    hider.className = "Wp Wq";
                }
                else {
                    iframe.style.display = "none";
                    hider.className = "Wp Wo";
                }
            }

            h3.appendChild(h3_div);
            outer_div.appendChild(h3);

            container.insertBefore(outer_div, container.firstChild);
        }
    );
}

document.addEventListener('DOMContentLoaded', inject_board());

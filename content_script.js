function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function inject_board() {
    chrome.storage.sync.get({
            kanbanId: "",
            kanbanProvider: ""
        }, async function(items) {
            /* Slightly different formats depending on whether we're using
               KanbanFlow or Airtable */

            // Default to KanbanFlow for backwards compatibility
            var url = "https://kanbanflow.com/board/" + items.kanbanId + "#board-wrapper";
            var height = "360px";

            if (items.kanbanProvider == "airtable") {
                url = "https://airtable.com/" + items.kanbanId + "#board-wrapper";
                height = "500px";
            }
            else if (items.kanbanProvider == "other") {
                url = items.kanbanId;
                height = "400px";
            }

            var iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = height;
            iframe.style.border = "0";
            iframe.style.opacity = "0.9";

            var container;
            while (container === undefined) {
                container = document.getElementsByClassName('UI')[0];
                await sleep(2000);
            }
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

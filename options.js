// Save options to chrome.storage
function save_options() {
    var kanban_id = document.getElementById('kanban-id').value;
    var kanban_provider = document.getElementById('kanban-provider').value;
    chrome.storage.sync.set({
        kanbanId: kanban_id,
        kanbanProvider: kanban_provider
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'ID saved!'
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Default to ID empty
    chrome.storage.sync.get({
        kanbanId: ""
    }, function(items) {
        document.getElementById('kanban-id').value = items.kanbanId;
        document.getElementById('kanban-provider').value = items.kanbanProvider;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
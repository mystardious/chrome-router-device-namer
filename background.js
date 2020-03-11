// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({key: 0}, function() {
//         console.log('Value is set to ' + 0);
//     });
// });

chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      // With a new rule ...
      chrome.declarativeContent.onPageChanged.addRules([
        {
          // That fires when a page's URL contains a 'g' ...
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlContains: '192.168.0.1' }
            })
          ],
          // And shows the extension's page action.
          actions: [ new chrome.declarativeContent.ShowPageAction() ]
        }
      ]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    // chrome.tabs.executeScript({
    //     file: 'content.js'
    // });
    alert("nigga");
});


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    
//     // Run script when page is updated
//     chrome.tabs.executeScript({
//         file: 'content.js'
//     });
//     // chrome.storage.sync.get(['key'], function(result) {
//     //     console.log('Value currently is ' + result.key);
//     //     chrome.storage.sync.set({key: key.value+1}, function() {
//     //         console.log('Value is set to ');
//     //     });
//     // });
//     chrome.storage.sync.get(['key'], function(result) {
//         chrome.storage.sync.set({key: 1}, function() {
//             console.log('Value is set to ' + result.key);
//         });
//     });
    
// });

// //  chrome.webNavigation.onCompleted.addListener(function() {
// //     // Run script when page is updated
// //     chrome.tabs.executeScript({
// //         file: 'content.js'
// //     });
// // });
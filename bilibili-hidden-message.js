// ==UserScript==
// @name         Bilibili Hidden Message
// @namespace    http://tampermonkey.net/
// @version      2025-06-19
// @description  隐藏私信消息数量提示!
// @author       You
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none

// ==/UserScript==

(function() {
    'use strict';

    function run () {
        var $messageButton = document.getElementsByClassName('right-entry--message')[0];

        if (!$messageButton) {
            requestAnimationFrame(run)
            return;
        }

        var config = { attributes: false, childList: true, subtree: true };
        var callback = () => {
            var $messageNums = $messageButton.getElementsByClassName('red-num--message');
            $messageNums && Array.from($messageNums).forEach(($messageButton) => {
                $messageButton.style.opacity = 0;
            })
            console.log('Bilibili Hidden Message: Message hidden success!')
        }
        var observer = new MutationObserver(callback);

        observer.observe($messageButton, config)
    }

    run();

})();
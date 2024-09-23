document.getElementById('donation-btn')
    .addEventListener('click', function(){
        getClassHidden('donation', 'history-btn');
})

document.getElementById('history-btn')
    .addEventListener('click', function(){
        getClassHidden('history', 'donation-btn');
})
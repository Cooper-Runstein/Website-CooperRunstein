

var isIE = /*@cc_on!@*/false || !!document.documentMode;
if (isIE){
    alert("You are using Internet Explorer. Be warned, this site is not optimized for outdated browsers.")
}

var work = new Vue({
    el: "#work",
    data: {
        projects: [
            { 
                name: "React Personal Finance App -->  ", 
                src: 'https://github.com/Cooper-Runstein/React-Personal-Finance-App', 
                id: 1, projectTitle: "Personal Finance App"
            },
            { 
                name: "First React Project -->  ", 
                src: 'https://github.com/Cooper-Runstein/NBA-App-Learn-React/tree/6984cc8b19e412b51d5d2299862ce2e8750e9067', 
                id: 2, 
                projectTitle: "NBA Stat Comparison" 
            },
            { 
                name: "First AJAX Project -->  ", 
                src: 'https://github.com/Cooper-Runstein/MLB-Players-App', 
                id: 3, 
                projectTitle: "MLB Player Search App" 
            },
            { 
                name: "This Website's code -->  ", 
                src: 'https://github.com/Cooper-Runstein/Website-CooperRunstein',
                id: 6, projectTitle: "CooperRunstein.com"
            },
            { 
                name: "First Big Javascript Project -->  ", 
                src: 'https://github.com/Cooper-Runstein/Liars-dice', 
                id: 4, 
                projectTitle: "Liar's Dice Game" 
            },
            { 
                name: "First Big Python Project -->  ", 
                src: 'https://github.com/Cooper-Runstein/Python-Payment-Determination-App', 
                id: 5, 
                projectTitle: "Roomate Payments App" 
            }
        ],
    }
})

var skills = new Vue({
    el: "#skills",
    data: {
        show: 1,
    }
})

VueScrollTo.setDefaults({
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

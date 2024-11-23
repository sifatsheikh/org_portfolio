tailwind.config = {
    theme:{
        extend:{
          gridTemplateColumns:{
            'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            outfit:["Outfit", "sans-serif"],
             Ovo:["Ovo", "serif"]
        },
        animation:{
            spin_slow:'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#f3f3f3',
            darkHover : '#2a004a',
            darkTheme : '#191a1b'
        },
        boxShadow:{
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #000',
        }
    }  
},
     darkMode: 'selector'
}
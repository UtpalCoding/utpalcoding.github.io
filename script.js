
alert(`This is a Profile card design, designs are pure CSS.

- Slider is to control the background opacity
- Click the three dots above the profile pic to toggle visibility of slider
- Click Connect to connect in LinkedIn
`);

const slider = document.querySelector("#opaAdj>input");
const card = document.querySelector("#card");
const frame = document.querySelector("#frame");
slider.addEventListener("input",()=>{
   let o = slider.value/100;
   card.style.background = `rgba(255,70,100,${o})`;
   frame.style.background = `radial-gradient(at top right,rgba(100,110,215,${o}),rgba(120,140,180,${o}))`;
})

const opaAdj = document.querySelector("#opaAdj");
const nav = document.querySelector("#col_nav");

nav.addEventListener("click",()=>{
   if(opaAdj.style.opacity==1){
      opaAdj.style.opacity = 0;
      opaAdj.style.marginBottom = "-36px";
      setTimeout(()=>opaAdj.style.display="none",200);
   }
   else{
      opaAdj.style.display="block";
      setTimeout(()=>{
        opaAdj.style.opacity = 1;
        opaAdj.style.marginBottom = "16px";
      })
   }
})

var arr=[
    "Two common terms used to describe a salesperson are Farmer and Hunter. The reality is that most professional salespeople have a little of both. A hunter is often associated with aggressive personalities who use aggressive sales technique.",
    "In terms of sales methodology, a hunter refers to a person whose focus is on bringing in and closing deals. This process is called \"sales capturing\". An example is a commodity sale such as a long distance salesperson, shoe salesperson and to a degree a car salesperson.",
    "Their job is to find and convert buyers. A sales farmer is someone who creates sales demand through activities that directly influence and alter the buying process.",
    "Closed captions were created for deaf or hard of hearing individuals to assist in comprehension. They can also be used as a tool by those learning to read, learning to speak a non-native language, or in an environment where the audio is difficult to hear or is intentionally muted.",
    "The basic technique stands in contrast to hunt and peck typing in which the typist keeps his or her eyes on the source copy at all times. Touch typing also involves the use of the home row method, where typists keep their wrists up, rather than resting them on a desk or keyboard (which can cause carpal tunnel syndrome).",
    "To avoid this, typists should sit up tall, leaning slightly forward from the waist, place their feet flat on the floor in front of them with one foot slightly in front of the other, and keep their elbows close to their sides with forearms slanted slightly upward to the keyboard; fingers should be curved slightly and rest on the home row.",
    "A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf village in the Land of Fire, one of the Five Great Shinobi Countries in the Ninja World. In response, the leader of Konoha and the Fourth Hokage, Minato Namikaze (with his wife Kushina Uzumaki) seals the fox inside the body of his newborn son, Naruto Uzumaki, making Naruto a host of the beast.",
    "India, our country is a huge and beautiful land full of wonders. From the Himalayas to the Indian Ocean, Desert of Thar in the snowy mountains of Sikkim, it is a country full of beautiful landscapes and beautiful people. India is a unique country with diversity. \"Unity is diversity\" is the main slogan of the country.",
    "Undoubtedly, the strongest Uchiha of all-time, Sasuke gained the Mangekyo Sharingan after the death of Itachi Uchiha. His eyes granted him the power of Amaterasu and Flame Control. Along with that, Sasuke also gained the ability to use Full-body Susanoo, making him extremely powerful."
];
var count=0;
const start=document.querySelector('.btn');
const para=document.querySelector('.test');
start.addEventListener("click",function(){
    count++;
    if(count==1){
        let date=new Date;
    start_time= date.getTime();
    setTimeout(() => {
        para.innerHTML=`3`;
    }, 1000);
    setTimeout(() => {
        para.innerHTML=`2`;
    }, 2000);
    setTimeout(() => {
        para.innerHTML=`1`;
    }, 3000);
    setTimeout(function() {
    currentItem = Math.floor(Math.random() * arr.length);
    para.innerHTML=`${arr[currentItem]}`;
    /* console.log(`${start_time}`); */
    start.innerHTML=`Done`;
}, 4000);
    }
    else if(this.innerHTML =='Done' && count>1)
    {

        start.innerHTML=`start`;
        count=0;
        let date=new Date;
        let end_time=date.getTime();
        let total_time=(((end_time-start_time)/1000)-4);
        /* console.log(total_time); */

        const area=document.querySelector('#area');
        let val=area.value;
        let num_of_words=val.split(" ").length;

        /* console.log(num_of_words); */

        let speed=Math.round((num_of_words/total_time)*60); //speed

        /* console.log(speed); */

        let words_para=para.innerText.split(" "); //words in paragraph

        /* console.log(words_para); */

        let words_area=val.split(" "); // words in textarea

        /* console.log(words_area); */

        let cnt=0;
        words_para.forEach(function(item,index){
            if(item==words_area[index]){
                cnt++;
            }
        });
        let error=(words_para.length-cnt);
        para.innerHTML=`You typed total at ${speed} words per minutes. ${cnt} correct out of ${words_para.length} words and the total number of error are ${error}.`;
        area.value="";
    }
})
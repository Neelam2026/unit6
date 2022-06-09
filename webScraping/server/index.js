

const request= require("request-promise")
const cheerio=require("cheerio")
const fs=require("fs")
const json2csv=require("json2csv").Parser;

const movies=["https://www.imdb.com/title/tt4574334/?ref_=hm_fanfav_tt_i_3_pd_fp1",
"https://www.imdb.com/title/tt0119282/?ref_=nv_sr_srsg_4",
"https://www.imdb.com/title/tt4154796/?ref_=nv_sr_srsg_0"
];

(async()=>{
try{    
let imdbData=[]


for(let movie of movies){
    const response=await request({
        uri:movie,
        headers:{
            "accept":"application/json, text/plain, */*",
            "accept-encoding":"gzip, deflate, br",
             "accept-language": "en-GB,en;q=0.9,en-US;q=0.8,lb;q=0.7",
            
        },
        gzip:true,
    });
    
    let $=cheerio.load(response);
    
    let title=$('div[class="sc-94726ce4-2 khmuXj"]>h1').text()
    let summary=$('div[class="sc-16ede01-7 hrgVKw"]>span').text()
    let rating=$('div[class="sc-7ab21ed2-2 kYEdvH"]>span').text()
    
    
    imdbData.push({
        title,
        rating,
        summary,
       
       
    }) 
}


const j2cp=new json2csv()
const csv=j2cp.parse(imdbData)
console.log(imdbData)
fs.writeFileSync("./imdb.csv" ,csv, "utf-8")
}catch(err){
    console.log(err)
}

})()

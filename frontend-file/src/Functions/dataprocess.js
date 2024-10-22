import url from "../env"
async function dataprocess(path,extra){
 var response = await fetch(url.nodeapipath+path,extra);
 var result = await response.json();
 return result;
}

async function dataprocess1(path,extra){
    var response = await fetch(url.nodeapipath+path,extra);
    var result = await response.json();
    console.log(result);
    return result;
   }

export  {
    dataprocess,dataprocess1
};
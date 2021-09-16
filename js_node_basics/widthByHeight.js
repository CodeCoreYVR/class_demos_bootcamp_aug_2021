const fileName= `${width}_by_${height}`

fs.writeFile(`${fileName}.txt`, output, err=>{
    if(err){
    console.error(err);
    }
    console.log(`wrote "${fileName}" to disk`);
})


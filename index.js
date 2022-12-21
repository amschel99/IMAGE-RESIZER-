 <input type="file" multiple required name="images" id="images" accept='image/png, image/jpeg'
                            onChange={
                                (e)=>{
                                    const files=e.target?.files
                                    if(files){
                                        if(files.length<5){
                                    return;
                                        }
                                        
                                        for(let i=0;i<files.length;i++){
                                            if(files[i].size>2800000){
                                             return   setLargeImage(`images that exceed 2.8mbs are not allowed,choose again!`)

                                            }
                                            setFilesEnough(true)
                                            const reader=new FileReader()
                                            reader.addEventListener('load',(readerEvent)=>{

                                                //make an img element
                                                let img=document.createElement('img');
                                                   img.src = readerEvent.target.result;
                                                   //here we are going to resize our images to smaller pixel dimensions using the canvas Api


                                               img.onload=function (){

                                               
                                             
                                                const canvas=document.createElement('canvas')
                                                 let ctx = canvas.getContext("2d");
             ctx.drawImage(img, 0, 0); 
                                                         
                                                         
                let MAX_WIDTH = 300;
                let MAX_HEIGHT = 200;
                let width = img.width;
                let height = img.height;

                 if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                      ctx = canvas.getContext("2d");
             ctx.drawImage(img, 0, 0, width, height);
             //here we convert the image to 1/2 times the original resolution

            const  data=canvas.toDataURL('image/webp',0.5)
//now you can store data in the database.
            
                                               }
                                            })
                                            reader.readAsDataURL(files[i])
                                        }
                                    }

                                }
                            }
                            />

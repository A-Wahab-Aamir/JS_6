let Copied = () => {
    text1=document.getElementById('copy');
    text1.select()
    document.execCommand('copy')


    text2=document.getElementById('paste')
    text2.focus()
    document.getElementById('paste').style.backgroundColor="lightgreen"
   text2.value=text1.value; 

}
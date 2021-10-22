
var i,s1='',s2='',c1,c2,k,s3,g;
var j;
var s='';
var ct=0;
var h1=document.querySelector('h1');
var scr=document.querySelector('#screen');
var ele=document.querySelectorAll(".ele");

for(var i=0;i<ele.length;i++)
{
ele[i].addEventListener('click',function(e)
{
    
    
    if(e.target.textContent=="C")
    {
        s='';
        scr.textContent='0';
    }
    else
    if(e.target.textContent=="<--")
    {
        s=s.slice(0,-1);
        if(s=='')
        scr.textContent=0;
        else
        scr.textContent=s;
        
    }
    else
    if(e.target.textContent=="=")
    {
        while(1)
        { var p=0;
            for(i=0;i<s.length;i++)
            {
                if(s[i]=='/'){
                    p=1;
                break;
                }
            }
            if(p==0)
            {
                break;
            }
            else
            { s1=''; s2=''; s3='';
                for(j=i-1;j>=0;j--)
                {
                  if(s[j]!='x'&&s[j]!='+'&&s[j]!='-'&&s[j]!='/')
                  {
                      s1+=s[j];
                  }
                  else
                  break;
                }
                s1=reverse(s1);
                for(k=i+1;k<s.length;k++)
                {
                    if(s[k]!='x'&&s[k]!='+'&&s[k]!='-'&&s[k]!='/')
                    {
                        s2+=s[k];
                    }
                    else
                    break;
                }
                
console.log(s1);  
console.log(s2); 
console.log("/");
                s1=parseFloat(s1)/parseFloat(s2);
                console.log(s1);
                s3+=s.substring(0,j+1);
                console.log(s3);
                s3+=s1;
console.log(s3);
                s3+=s.substring(k);
                s=s3;
                console.log(s);

            }

        }
        while(1)
        {var p=0;
            for(i=0;i<s.length;i++)
            {
                if(s[i]=='x'){
                    p=1;
                break;
                }
            }
            if(p==0)
            {
                break;
            }
            else
            { s1=''; s2=''; s3='';
                for(j=i-1;j>=0;j--)
                {
                  if(s[j]!='x'&&s[j]!='+'&&s[j]!='-'&&s[j]!='/')
                  {
                      s1+=s[j];
                  }
                  else
                  break;
                }
              
                s1=reverse(s1);
                for(k=i+1;k<s.length;k++)
                {
                    if(s[k]!='x'&&s[k]!='+'&&s[k]!='-'&&s[k]!='/')
                    {
                        s2+=s[k];
                    }
                    else
                    break;
                }
                console.log(s1);  console.log(s2); console.log("*");
                s1=parseFloat(s1)*parseFloat(s2);
                console.log(s1);
                s3+=s.substring(0,j+1);
                console.log(s3);
                s3+=s1;
                console.log(s3);
                s3+=s.substring(k);
                s=s3;
                console.log(s);
            }

        }
        while(1)
        { var p=0;
            for(i=0;i<s.length;i++)
            {
                if(s[i]=='+'){
                    p=1;
                break;
                }
            }
            if(p==0)
            {
                break;
            }
            else
            { s1=''; s2=''; s3='';
                for(j=i-1;j>=0;j--)
                {
                  if(s[j]!='x'&&s[j]!='+'&&s[j]!='-'&&s[j]!='/')
                  {
                      s1+=s[j];
                  }
                  else
                  break;
                }
            // heloo for git/
                s1=reverse(s1);
                console.log(s1);
                for(k=i+1;k<s.length;k++)
                {
                    if(s[k]!='x'&&s[k]!='+'&&s[k]!='-'&&s[k]!='/')
                    {
                        s2+=s[k];
                    }
                    else
                    break;
                }
                console.log(s1);  console.log(s2); console.log("+");
                s1=parseFloat(s1)+parseFloat(s2);
                console.log(s1);
                s3+=s.substring(0,j+1);
                console.log(s3);
                s3+=s1;
console.log(s3);
                s3+=s.substring(k);
                s=s3;
                console.log(s);
            }

        }
        while(1)
        { var p=0;
            for(i=0;i<s.length;i++)
            {
                if(s[i]=='-'){
                    p=1;
                break;
                }
            }
            if(p==0)
            {
                break;
            }
            else
            { s1=''; s2=''; s3='';
                for(j=i-1;j>=0;j--)
                {
                  if(s[j]!='x'&&s[j]!='+'&&s[j]!='-'&&s[j]!='/')
                  {
                      s1+=s[j];
                  }
                  else
                  break;
                }
               // if(j==-1)
               // j=0;
                s1=reverse(s1);
                for(k=i+1;k<s.length;k++)
                {
                    if(s[k]!='x'&&s[k]!='+'&&s[k]!='-'&&s[k]!='/')
                    {
                        s2+=s[k];
                    }
                    else
                    break;
                }
                console.log(s1);  console.log(s2); console.log("-");
                s1=parseFloat(s1)-parseFloat(s2);
                console.log(s1);
                s3+=s.substring(0,j+1);
                console.log(s3);
                s3+=s1;
console.log(s3);
                s3+=s.substring(k);
                s=s3;
                console.log(s);

            }

        }
        
        //s=parseFloat(s).toPrecision(3);
        if(s.length>10)
        { 
           
            g=s.length;
            s=parseFloat(s).toPrecision(8);
          
            
        }

        scr.textContent=s;
    }
    else
    { var m;
        s+=e.target.textContent;
       m=s;
        if(s.length>12)
        m=m.substring(s.length-12);
    scr.textContent=m;
    }
    
})
}
function reverse(s){
    return s.split("").reverse().join("");
}
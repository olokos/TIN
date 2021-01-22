function handleRequest(){
    console.log(this.readyState);
  
    if((this.readyState===4)&&(this.status>=200&&this.status<400)){
      let responseText = JSON.parse(this.response);
      console.log(responseText);
    for(const x in responseText){
      console.log(x + " " + responseText[x]);
    }
    let resultDiv=document.getElementById("result");
    let newPoint = document.createElement("p");
    let text = document.createTextNode(responseText.result);
    newPoint.appendChild(text);
    resultDiv.appendChild(newPoint);
    }
  }
  
  function sendXMLfromForm(){
    let firstNumber = document.forms[0].firstNumber.value;
    let secondNumber = document.forms[0].secondNumber.value;
    let body = {firstNumber:firstNumber,secondNumber:secondNumber};
  let xhr= new XMLHttpRequest();
  xhr.onreadystatechange=handleRequest;
  xhr.open("POST", "http://localhost:8080/formdata");
  xhr.setRequestHeader("Content-type","application/json");
  xhr.send(JSON.stringify(body));
    }

    window.onload=function(){document.getElementById("sendAjax").onclick=sendXMLfromForm;
  }
import React from 'react';
import logo from './logo.svg';
import './App.css';

interface pingInterface {
    (message:string):Promise<string>;
}

declare var ping: pingInterface;

interface Window {
  webkit?: any;
  chrome?: any;
  external?: any;
  proton?: any;
}

declare var window: Window;

function App() {
  const openNew = async (event: React.MouseEvent<HTMLButtonElement>) => {
    var promise = window.proton.newwindow.invoke(123);
    promise
      .then(
      function(result: any) {
        console.log(result); // "Stuff worked!"
        //successFunc( result )
      },
      function(err: any) {
        console.log(err); // Error: "It broke"
      })
      ;
  }
  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      var promise;
      // promise = window.webkit.messageHandlers.mycallback1.postMessage("Hello from typescript1!");
      // promise = window.webkit.messageHandlers.mycallback1.postMessage("Hello from typescript2!");
      // promise = window.chrome.webview.postMessage("Hello from typescript2")
      promise = window.proton.mycallback1.invoke("Hello from typescript", "and warm hugs too", {"Name": "Batman", "Age":42})

      promise
        .then(
        function(result: any) {
          console.log(result); // "Stuff worked!"
          //successFunc( result )
        },
        function(err: any) {
          console.log(err); // Error: "It broke"
        })
        ;

        // var sleepPromise = window.webkit.messageHandlers.sleep.postMessage("10000");

        // sleepPromise.then(
        //   function(result: any) {
        //     console.log(result); // "Stuff worked!"
        //     alert(result);
        //     //successFunc( result )
        //   },
        //   function(err: any) {
        //     console.log(err); // Error: "It broke"
        //     // errorFunc( err )
        //   });
  
          
          
      // const response = await ping('hello');
      // console.log('got response: ' + response);

      // const response2 = await window.webkit.messageHandlers.test2.postMessage("Hello from typescript!")
      // console.log('got response2: ' + response2);
    } catch(err) {
      console.log('got error: ' + err);
    }
  }
  return(
      <div className="wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Teleport Cluster</h1>
      <form onSubmit={submitForm}>
      <fieldset>
         <label>
           <p>Cluster</p>
           <input name="name" placeholder="host:port"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
       <button onClick={openNew}>Reset</button>
      </form>
    </div>
  )
}

export default App;

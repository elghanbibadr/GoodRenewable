import { PopupModal } from "react-calendly";
function Callendly(props) {

  return (
    <div>
      <PopupModal

         url="https://calendly.com/alexi-good-renewable/30min" 
        pageSettings={props.pageSettings}
       
        onModalClose={() => props.setIsOpen(false)}
        open={props.isOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
}


export default Callendly






















// import React from "react";
// import { InlineWidget } from "react-calendly";


// const Callendly = () => {
  
//   return (
//     <div className="App">
//   <InlineWidget   url="https://calendly.com/good-renewable/arrange-a-call?" />
//     </div>
//   );
// };


// export default Callendly
import { useEffect } from "react";

function ExampleComponent({ onClickAnywhere} : Props) {
    
    useEffect(() => {
    function listener() {
    onClickAnywhere();
    }
    document.addEventListener("click", listener);
    return function cleanup() {
    document.removeEventListener("click", listener);
    };
    });
    
   }

   type Props = {
    onClickAnywhere : () => void,
}
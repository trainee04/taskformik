"use client";
// import Image from 'next/image'
import { useState } from "react";
import EmployeeForm from "./Form/page";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none  focus:shadow-outline"
      >
        open Form
      </button>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        size="1000px"
        className="bla bla bla overflow-auto"
      >
        <EmployeeForm  setIsOpen={setIsOpen} />
      </Drawer>
</>
  )
}


{/* // import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import EmployeeForm from './Form/page';

// // import Divider from '@mui/material/Divider';



// type Anchor = 'top' | 'left' | 'bottom' | 'right';

// export default function TemporaryDrawer() { */}
{/* //   const [state, setState] = React.useState({ */}
   
    
   
//     right: false,
//   });

//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//           (event as React.KeyboardEvent).key === 'Shift')
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
      
//     };

  
//     <Box
//       sx={{ width:  1000 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <EmployeeForm setState={setState}/>
//       {/* <Divider /> */}
      
//     </Box>
  

//   return (
//     <div>
//       {([ 'right'] as const).map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
            
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
    
